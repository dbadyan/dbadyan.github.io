import { doAction } from './reducers';
import { startQuest } from './quests';

export function renderGame(store) {

    const newPlayerElement = getPlayerElement(store);
    if (newPlayerElement.outerHTML != document.getElementById("player-data").innerHTML) {
        document.getElementById("player-data").innerHTML = "";
        document.getElementById("player-data").appendChild(newPlayerElement);
    }

    const newAdventuresElement = getAdventuresElement(store);
    if (newAdventuresElement.outerHTML != document.getElementById("advantures-data").innerHTML) {
        document.getElementById("advantures-data").innerHTML = "";
        document.getElementById("advantures-data").appendChild(newAdventuresElement);
    }

    const newAdventurersElement = getAdventurers(store);
    if (newAdventurersElement.outerHTML != document.getElementById("party-data").innerHTML) {
        document.getElementById("party-data").innerHTML = "";
        document.getElementById("party-data").appendChild(newAdventurersElement);
    }

    const newLogElement = getLog(store);
    if (newLogElement.outerHTML != document.getElementById("quest-log").innerHTML) {
        document.getElementById("quest-log").innerHTML = "";
        document.getElementById("quest-log").appendChild(newLogElement);
    }

}

function getPlayerElement(store) {
    const state = store.getState();
    const playerContainer = document.createElement("div");
    const player = state.party.adventurers[0];
    playerContainer.innerHTML = `
    <ul>
        <li>
            <span class="stat-name">HP</span>:
            <span id="player-hp">${Math.ceil(player.hp)}</span>
        </li>
        <li>
            <span class="stat-name">exp</span>: 
            <span id="player-exp">${player.exp}/${player.expToNextLevel}</span>
        </li>
        <li>
            <span class="stat-name">level</span>: 
            <span id="player-level">${player.level}</span>
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

function getAdventureElement(state, adventureIndex, whatToDoWhenClicked) {
    const adventure = state.adventures[adventureIndex];
    const button = document.createElement("button");
    button.innerText = adventure.description;
    button.onclick = whatToDoWhenClicked;
    if (state.party.adventurers[0].currentQuest !== null) {
        button.disabled = true;
    }
    const adventureContainer = document.createElement("div");
    adventureContainer.className = "adventure-container";
    adventureContainer.innerHTML = `
        Monster: ${adventure.enemy.name} (${adventure.enemy.hp} hp)<br />
        Reward: ${adventure.rewards.gold} gold | ${adventure.rewards.exp} exp <br />
        Party Member:
    `;
    adventureContainer.appendChild(getPartyMembersSelector(state, adventureIndex, state.party.adventurers, (isAdventurerGoing, adventurerName) => {
        doAction("choose-adventurer-for-adventure", {isAdventurerGoing, adventurerName, adventureIndex})
    }))
    adventureContainer.appendChild(button);

    return adventureContainer;
}

function getPartyMembersSelector(state, adventureIndex, adventurers, onChange) {
    const adventureElements = adventurers.map((adventurer) => {
        const inputContainer = document.createElement("div");
        const inputElement = document.createElement("input");
        inputElement.type = "checkbox";
        const isSelectedOnThisAdventure = state.adventures[adventureIndex].selectedPartyMembers.indexOf(adventurer.name) > -1;
        const isWentOnAnotherAdventure = adventurer.currentQuest !== null && adventurer.currentQuest !== adventureIndex;
        const isSelectedForAnotherAdventure = state.adventures.filter(adventure => adventure.selectedPartyMembers.indexOf(adventurer.name) > -1).length > 0;
        
        if(isSelectedOnThisAdventure && !isWentOnAnotherAdventure) {
            inputElement.checked = true;
        } else {
            if(isSelectedForAnotherAdventure) {
                inputElement.disabled = true;
            }
        }
        inputElement.value = adventurer.name;
        inputElement.onchange = event => {
            onChange(event.target.checked, adventurer.name);
        }
        const textElement = document.createElement("span");
        textElement.innerText = adventurer.name;
        inputContainer.appendChild(inputElement);
        inputContainer.appendChild(textElement);
        return inputContainer;
    });

    const selector = document.createElement("div");
    adventureElements.forEach(adventureElement => selector.appendChild(adventureElement));
    return selector
}

function getAdventuresElement(store) {
    const state = store.getState();
    const availableAdventures = getAvailableAdventures(state);
    const buttons = availableAdventures.map(adventure => {
        const adventureIndex = state.adventures.indexOf(adventure);
        return getAdventureElement(state, adventureIndex, () => startQuest(store, adventureIndex));
    });
    const buttonsContainer = document.createElement("div");
    buttons.forEach(button => buttonsContainer.appendChild(button));
    return buttonsContainer;
};

function getAdventurers(store) {
    const state = store.getState();
    const partyContainer = document.createElement("div");
    partyContainer.className = "party-container";
    state.party.adventurers.forEach(adventurer => {
        partyContainer.innerHTML += `
        Member: ${adventurer.name} <br />
    `});
    return partyContainer;
}

function getLog(store) {
    const state = store.getState();
    const logContainer = document.createElement("div");
    logContainer.className = "log-container";
    state.log.forEach(line => {
        logContainer.innerHTML += `
        ${line} <br />
    `});
    return logContainer;
}

function getAvailableAdventures(state) {
    return state.adventures.filter(adventure => state.party.adventurers[0].level >= adventure.requiredLevel)
}