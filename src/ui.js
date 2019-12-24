import { doAction } from './reducers';

export function renderGame(state) {

    const newPlayerElement = getPlayerElement(state);
    if (newPlayerElement.outerHTML != document.getElementById("player-data").innerHTML) {
        document.getElementById("player-data").innerHTML = "";
        document.getElementById("player-data").appendChild(newPlayerElement);
    }

    const newAdventuresElement = getAdventuresElement(state);
    if (newAdventuresElement.outerHTML != document.getElementById("advantures-data").innerHTML) {
        document.getElementById("advantures-data").innerHTML = "";
        document.getElementById("advantures-data").appendChild(newAdventuresElement);
    }

    const newAdventurersElement = getAdventurers(state);
    if (newAdventurersElement.outerHTML != document.getElementById("party-data").innerHTML) {
        document.getElementById("party-data").innerHTML = "";
        document.getElementById("party-data").appendChild(newAdventurersElement);
    }
}

function getPlayerElement(state) {
    const playerContainer = document.createElement("div");
    playerContainer.innerHTML = `
    <ul>
        <li>
            <span class="stat-name">HP</span>:
            <span id="player-hp">${Math.ceil(state.player.hp)}</span>
        </li>
        <li>
            <span class="stat-name">exp</span>: 
            <span id="player-exp">${state.player.exp}/${state.player.expToNextLevel}</span>
        </li>
        <li>
            <span class="stat-name">level</span>: 
            <span id="player-level">${state.player.level}</span>
        </li>
        <li>
            <span class="stat-name">gold</span>: 
            <span id="player-gold">${state.player.gold}</span>
        </li>
        <li>
            <span class="stat-name">strength</span>: 
            <span id="player-strength">${state.player.stats.strength}</span>
        </li>
        <li>
            <span class="stat-name">agility</span>: 
            <span id="player-agility">${state.player.stats.agility}</span>
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
    adventureContainer.appendChild(getPartyMembersSelector(adventure.selectedPartyMembers, state.party.adventurers, (isAdventurerGoing, adventurerName) => {
        doAction("choose-adventurer-for-adventure", {isAdventurerGoing, adventurerName, adventureIndex})
    }))
    adventureContainer.appendChild(button);

    return adventureContainer;
}

function getPartyMembersSelector(selectedAdventurersIndexes, adventurers, onChange) {
    const adventureElements = adventurers.map((adventurer, adventurerIndex) => {
        const inputContainer = document.createElement("div");
        const inputElement = document.createElement("input");
        inputElement.type = "checkbox";
        if (selectedAdventurersIndexes.indexOf(adventurerIndex) > -1) {
            inputElement.checked = true;
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

function getAdventuresElement(state) {
    const availableAdventures = getAvailableAdventures(state);
    const buttons = availableAdventures.map(adventure => {
        const adventureIndex = state.adventures.indexOf(adventure);
        return getAdventureElement(state, adventureIndex, () => doAction("start-quest", { adventureIndex: adventureIndex }));
    });
    const buttonsContainer = document.createElement("div");
    buttons.forEach(button => buttonsContainer.appendChild(button));
    return buttonsContainer;
};

function getAdventurers(state) {
    const partyContainer = document.createElement("div");
    partyContainer.className = "party-container";
    state.party.adventurers.forEach(adventurer => {
        partyContainer.innerHTML += `
        Member: ${adventurer.name} <br />
    `});
    return partyContainer;
}

function getAvailableAdventures(state) {
    return state.adventures.filter(adventure => state.player.level >= adventure.requiredLevel)
}