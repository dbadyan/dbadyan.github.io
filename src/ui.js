import { doAction } from './reducers';
import { startQuest } from './quests';
import { calculateItemStrength, calculateItemDefense, getPlayerFromState } from './characterUtils';
import { renderWhenNeeded } from "./fe";

function abbreviateNumber(value) {
    let newValue = value;
    const suffixes = ["", "K", "M", "B","T"];
    let suffixNum = 0;
    while (newValue >= 1000) {
      newValue /= 1000;
      suffixNum++;
    }

    newValue = Math.round((newValue + Number.EPSILON) * 100) / 100;

    newValue += suffixes[suffixNum];
    return newValue;
  }

function renderPlayerHP(state) {
    const player = getPlayerFromState(state);
    document.getElementById("player-hp-progress").style.width = Math.floor((player.hp * 100) / player.maxHP) + "%";
    document.getElementById("player-hp").title = player.hpRegain + "/s";
    document.getElementById("player-hp-value").innerText = abbreviateNumber(player.hp);
}

function renderPlayerXP(state) {
    const player = getPlayerFromState(state);
    document.getElementById("player-exp-progress").style.width = Math.floor((player.exp * 100) / player.expToNextLevel) + "%";
    document.getElementById("player-exp-value").innerText = abbreviateNumber(player.exp) + "/" + abbreviateNumber(player.expToNextLevel);
    document.getElementById("player-level").innerText = abbreviateNumber(player.level);
}

function renderPlayerGold(state) {
    const player = getPlayerFromState(state);
    document.getElementById("player-gold").innerText = abbreviateNumber(player.gold);
}

function renderPlayerStrength(state) {
    const player = getPlayerFromState(state);
    document.getElementById("player-strength").innerText = abbreviateNumber(player.stats.strength) + " (+" + abbreviateNumber(calculateItemStrength(state)) + ")";
}

function renderPlayerAgility(state) {
    const player = getPlayerFromState(state);
    document.getElementById("player-agility").innerText = abbreviateNumber(player.stats.agility);
}
function renderPlayerDefense(state) {
    const player = getPlayerFromState(state);
    document.getElementById("player-defense").innerText = abbreviateNumber(player.stats.defense) + " (+" + abbreviateNumber(calculateItemDefense(state)) + ")";;
}

function renderInventory(state) {
    document.getElementById("inventory").innerHTML = "";
    document.getElementById("inventory").appendChild(getItemsContainer(state.inventory));
}

export function renderGame(store) {
    const renderers = {
        renderPlayerHP,
        renderPlayerXP,
        renderPlayerGold,
        renderPlayerStrength,
        renderPlayerAgility,
        renderPlayerDefense,
        renderInventory
    }

    Object.keys(renderers).forEach(renderer => {
        renderWhenNeeded(renderer, renderers[renderer], store.getPrevState(), store.getState());
    });

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

function getItemsContainer(items) {
    const itemsContainer = document.createElement("div");
    items.forEach(item => {
        itemsContainer.appendChild(getItemElement(item));
    });
    return itemsContainer;
}

function getItemElement(item) {
    const itemElement = document.createElement("div");
    itemElement.className = item.id + " inventory-item";
    return itemElement;
}

function getAdventureElement(state, adventureIndex, onSendPlayer, onStartIdling) {
    const adventure = state.adventures[adventureIndex];
    const button = document.createElement("button");
    button.innerText = "Send selected";
    button.classList = button.classList + " go-to-adventure"
    button.onclick = onSendPlayer;
    if (getPlayerFromState(state).currentQuest !== null) {
        button.disabled = true;
    }
    if (adventure.selectedPartyMembers.length === 0) {
      button.disabled = true;
    }
    const idleButton = document.createElement("button");
    idleButton.innerText = "Start idling";
    idleButton.onclick = onStartIdling;
    if (adventure.selectedPartyMembers.length === 0) {
      idleButton.disabled = true;
    }
    const adventureContainer = document.createElement("div");
    adventureContainer.className = "adventure-container";
    adventureContainer.innerHTML = `
        Monster: ${adventure.enemy.name} (${adventure.enemy.hp} hp)<br />
        Reward: ${adventure.rewards.gold} gold | ${adventure.rewards.exp} exp <br />
        Party Member:
    `;
    adventureContainer.appendChild(getPartyMembersSelector(state, adventureIndex, state.party.adventurers, (isAdventurerGoing, adventurerName) => {
        doAction("choose-adventurer-for-adventure", { isAdventurerGoing, adventurerName, adventureIndex })
    }))
    adventureContainer.appendChild(button);
    adventureContainer.appendChild(idleButton);
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

        if (isSelectedOnThisAdventure && !isWentOnAnotherAdventure) {
            inputElement.checked = true;
        } else {
            if (isSelectedForAnotherAdventure) {
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
        return getAdventureElement(state,
                                   adventureIndex,
                                   () => startQuest(store, adventureIndex),
                                   () => startIdling(store, adventureIndex));
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
    return state.adventures.filter(adventure => getPlayerFromState(state).level >= adventure.requiredLevel)
}
