let globalState = {};

function doAction(action, actionParams) {
    switch(action) {
        case "start-game":
            globalState = JSON.parse(JSON.stringify(actionParams.state));
            break;
        case "change-enemy-hp":
            globalState = changeEnemyHP(globalState, actionParams.adventureIndex, actionParams.hpDelta);
            break;
        case "change-player-hp":
            globalState = changePlayerHP(globalState, actionParams.hpDelta);
            break;
        case "give-this-man-a-cookie":
            globalState = giveThisManACookie(globalState, actionParams.gold);
            break;
        case "collect-from-adventure":
            globalState = collectFromAdventure(globalState, actionParams.adventureIndex)
            break;
        case "reset-adventure":
            globalState = resetAdventure(globalState, initialState, actionParams.adventureIndex);
            break;
        case "reward-exp":
            globalState = rewardExp(globalState, actionParams.exp);
            break;
        case "level-up":
            globalState = levelUp(globalState);
            break;   
    }

    console.log(Array.from(arguments));
    console.log(globalState);

    renderGame(globalState);

    return globalState;
}

function renderGame() {
    document.getElementById("player-data").innerHTML = "";
    document.getElementById("player-data").appendChild(getPlayerElement());

    document.getElementById("advantures-data").innerHTML = "";
    document.getElementById("advantures-data").appendChild(getAdventuresElement());
}

function getPlayerElement() {
    const playerContainer = document.createElement("div");
    playerContainer.innerHTML = `
    <ul>
        <li>
            <span class="stat-name">HP</span>:
            <span id="player-hp">${Math.ceil(globalState.player.hp)}</span>
        </li>
        <li>
            <span class="stat-name">exp</span>: 
            <span id="player-exp">${globalState.player.exp}/${globalState.player.expToNextLevel}</span>
        </li>
        <li>
            <span class="stat-name">level</span>: 
            <span id="player-level">${globalState.player.level}</span>
        </li>
        <li>
            <span class="stat-name">gold</span>: 
            <span id="player-gold">${globalState.player.gold}</span>
        </li>
        <li>
            <span class="stat-name">strength</span>: 
            <span id="player-strength">${globalState.player.stats.strength}</span>
        </li>
        <li>
            <span class="stat-name">agility</span>: 
            <span id="player-agility">${globalState.player.stats.agility}</span>
        </li>
    </ul>`;
    return playerContainer;
    
}

function getAdventureElement(adventure, whatToDoWhenClicked){
    const button = document.createElement("button");
    button.innerText = adventure.description;
    button.onclick = whatToDoWhenClicked;

    const adventureContainer = document.createElement("div");
    adventureContainer.className = "adventure-container";
    adventureContainer.innerHTML = `
        Monster: ${adventure.enemy.name} (${adventure.enemy.hp} hp)<br />
        Reward: ${adventure.rewards.gold} gold | ${adventure.rewards.exp} exp <br />
    `;
    adventureContainer.appendChild(button);

    return adventureContainer;
}

function getAdventuresElement(){
    const buttons = getAdventures(globalState).map(adventure => {
        return getAdventureElement(adventure, () => performRound(adventure));
    });
    const buttonsContainer = document.createElement("div");
    buttons.forEach(button => buttonsContainer.appendChild(button));
    return buttonsContainer;
};

 function performRound(adventure){
    const adventureIndex = globalState.adventures.indexOf(adventure);
    doAction("change-enemy-hp", {adventureIndex: adventureIndex, hpDelta: -globalState.player.stats.strength});

    if (isDead(globalState.adventures[adventureIndex].enemy)){
        doAction("give-this-man-a-cookie", {gold: globalState.adventures[adventureIndex].rewards.gold});
        doAction("reward-exp", {exp: globalState.adventures[adventureIndex].rewards.exp});
        doAction("reset-adventure", {adventureIndex: adventureIndex});
        return console.log("enemy dead");
    } 
    
    doAction("change-player-hp", {hpDelta: -globalState.adventures[adventureIndex].enemy.damage});
    if (isDead(globalState.player)){
        doAction("reset-adventure", {adventureIndex: adventureIndex});
        return console.log("you dead");
    } 

    doAction("collect-from-adventure", {adventureIndex: adventureIndex});
    if (isCollected(globalState.adventures[adventureIndex])){
        doAction("give-this-man-a-cookie", {gold: globalState.adventures[adventureIndex].rewards.gold});
        doAction("reward-exp", {exp: globalState.adventures[adventureIndex].rewards.exp});
        doAction("reset-adventure", {adventureIndex: adventureIndex});
        return console.log("you got away");
    } 

    return setTimeout(() => performRound(globalState.adventures[adventureIndex]), 2000);
 }

function getAdventures(state){
    return state.adventures.filter(adventure => state.player.level >= adventure.requiredLevel)
}

function changePlayerHP(state, hpDelta) {
    const newHP = Math.min(state.player.maxHP, Math.max(0, state.player.hp + hpDelta));
    return {
        ...state,
        player: {
            ...state.player,
            hp: newHP
        }
    }
}

function giveThisManACookie(state, gold) {
    return {
        ...state,
        player: {
            ...state.player,
            gold: state.player.gold + gold
        }
    }
}

function levelUp(state) {
    return {
        ...state,
        player: {
            ...state.player,
            level: state.player.level + 1,
            expToNextLevel: state.player.expToNextLevel + (state.player.level*300) 
        }
    }
}

function rewardExp(state, exp) {
    while(state.player.expToNextLevel <= exp + state.player.exp){
        state = doAction("level-up", state);  
    }
    return {
        ...state,
        player: {
            ...state.player,
            exp: state.player.exp + exp,
        }
    }
}

function changeEnemyHP(state, adventureIndex, hpDelta) {
    const newAdventures = [...state.adventures];
    newAdventures[adventureIndex] = {
        ...state.adventures[adventureIndex],
        enemy: {
            ...state.adventures[adventureIndex].enemy,
            hp: state.adventures[adventureIndex].enemy.hp + hpDelta
        }
    }

    return {
        ...state,
        adventures: newAdventures
    }
}

function collectFromAdventure(state, adventureIndex){
    const newAdventures = [...state.adventures];
    
    newAdventures[adventureIndex] = {
        ...state.adventures[adventureIndex],
        collectibles: state.adventures[adventureIndex].collectibles - 1
    };

    return {
        ...state,
        adventures: newAdventures
    }
}

function resetAdventure(currentState, initialState, adventureIndex) {
    const newAdventures = [...currentState.adventures];
    newAdventures[adventureIndex] = {
        ...initialState.adventures[adventureIndex]
    }

    return {
        ...currentState,
        adventures: newAdventures
    }
}

function isCollected(adventure){
    return adventure.collectibles <= 0;
}

function isDead(character) {
    return character.hp <= 0;
}

function healPlayer() {
    doAction("change-player-hp", {hpDelta: globalState.player.hpRegain});    
}

setInterval(healPlayer, 1000);

doAction("start-game", {state: initialState});