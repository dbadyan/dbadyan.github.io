const player = {
    hp: 100,
    gold: 100,
    exp: 0,
    stats: {
        strength: 10,
        agility: 5
    }
};

const initialAdventures = [
    {
        description: "fetch",
        collectibles: 3,
        rewards: {
            gold: 5,
            item: "glove",
            exp: 5
        },
        enemy: {
            name: "orc",
            hp: 30,
            damage: 10
        }
    },
    {
        description: "more fetch",
        collectibles: 3,
        rewards: {
            gold: 5,
            item: "glove",
            exp: 5
        },
        enemy: {
            name: "orc",
            hp: 50,
            damage: 10
        }
    }
]

function renderGame(player, adventures) {
    console.log(player);
    console.log(adventures);

    document.getElementById("player-data").innerHTML = "";
    document.getElementById("player-data").appendChild(getPlayerElement(player, adventures));

    document.getElementById("advantures-data").innerHTML = "";
    document.getElementById("advantures-data").appendChild(getAdventuresElement(player, adventures));
}

function getPlayerElement(player, adventures) {
    const playerContainer = document.createElement("div");
    playerContainer.innerHTML = `
    <ul>
        <li>
            <span class="stat-name">HP</span>:
            <span id="player-hp">${player.hp}</span>
        </li>
        <li>
            <span class="stat-name">exp</span>: 
            <span id="player-exp">${player.exp}</span>
        </li>
        <li>
            <span class="stat-name">gold</span>: 
            <span id="player-gold">${player.gold}</span>
        </li>
        <li>
            <span class="stat-name">strength</span>: 
            <span id="player-strength">${player.stats.strength}</span>
        </li>
        <li>
            <span class="stat-name">agility</span>: 
            <span id="player-agility">${player.stats.agility}</span>
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
        Reward: ${adventure.rewards.gold} gold <br />
    `;
    adventureContainer.appendChild(button);

    return adventureContainer;
}

function getAdventuresElement(player, adventures){
    const buttons = adventures.map((adventure, index) => {
        return getAdventureElement(adventure, () => performRound(player, adventures, index));
    });
    const buttonsContainer = document.createElement("div");
    buttons.forEach(button => buttonsContainer.appendChild(button));
    return buttonsContainer;
    
};

 function performRound(player, adventures, adventureIndex){
    const adventure = adventures[adventureIndex];

    const adventuresAfterDamage = hitAdvantureEnemy(adventures, adventureIndex, -player.stats.strength);
    if (isDead(adventuresAfterDamage[adventureIndex].enemy)){
        adventure.rewards.gold
        const richCharacter = giveThisManACookie(player, adventuresAfterDamage[adventureIndex].rewards.gold);
        renderGame(richCharacter, initialAdventures);
        return alert("enemy dead");
    } 
    
    const playerAfterDamage = changeHP(player, -adventure.enemy.damage);
    if (isDead(playerAfterDamage)){
        renderGame(playerAfterDamage, initialAdventures);
        return alert("you dead");
    } 

    const adventuresAfterCollection = collectFromAdventure(adventuresAfterDamage, adventureIndex);
    if (isCollected(adventuresAfterCollection[adventureIndex])){
        const richCharacter = giveThisManACookie(player, adventuresAfterCollection[adventureIndex].rewards.gold);
        renderGame(richCharacter, initialAdventures);
        return alert("you got away");
    } 
    
    renderGame(playerAfterDamage, adventuresAfterCollection);

    return setTimeout(() => performRound(playerAfterDamage, adventuresAfterCollection, adventureIndex), 2000);
 }

function changeHP(character, hpDelta) {
    return {
        ...character,
        hp: character.hp + hpDelta
    }
}
function giveThisManACookie(character, gold) {
    return {
        ...character,
        gold: character.gold + gold
    }
}
function hitAdvantureEnemy(adventures, adventureIndex, hpDelta) {
    const newAdventures = [...adventures]
    newAdventures[adventureIndex] = {
        ...newAdventures[adventureIndex],
        enemy: changeHP(newAdventures[adventureIndex].enemy, hpDelta)
    };
    return newAdventures;
}
function collectFromAdventure(adventures, adventureIndex){
    const newAdventures = [...adventures]
    newAdventures[adventureIndex] = {
        ...adventures[adventureIndex],
        collectibles: adventures[adventureIndex].collectibles - 1
    };
    return newAdventures;
}
function isCollected(adventure){
    return adventure.collectibles <= 0;
}
function isDead(character) {
    return character.hp <= 0;
}

renderGame(player, initialAdventures);