import { doAction } from './reducers';

export function renderGame(state) {
    document.getElementById("player-data").innerHTML = "";
    document.getElementById("player-data").appendChild(getPlayerElement(state));

    document.getElementById("advantures-data").innerHTML = "";
    document.getElementById("advantures-data").appendChild(getAdventuresElement(state));
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

function getAdventureElement(state, adventure, whatToDoWhenClicked) {
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
    `;
    adventureContainer.appendChild(button);

    return adventureContainer;
}

function getAdventuresElement(state) {
    const availableAdventures = getAvailableAdventures(state);
    const buttons = availableAdventures.map(adventure => {
        const adventureIndex = state.adventures.indexOf(adventure);
        return getAdventureElement(state, adventure, () => doAction("start-quest", { adventureIndex: adventureIndex }));
    });
    const buttonsContainer = document.createElement("div");
    buttons.forEach(button => buttonsContainer.appendChild(button));
    return buttonsContainer;
};

function getAvailableAdventures(state) {
    return state.adventures.filter(adventure => state.player.level >= adventure.requiredLevel)
}