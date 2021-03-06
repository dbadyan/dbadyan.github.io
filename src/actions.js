import { doAction } from './reducers';
import { produce, createDraft, setAutoFreeze } from "immer";
import { getPlayerFromState } from './characterUtils';

setAutoFreeze(false)

export function changePlayerHP(state, hpDelta) {
    return produce(state, draftState => {
        const player = getPlayerFromState(draftState);
        player.hp = Math.min(player.maxHP, Math.max(0, player.hp + hpDelta));
    })
}

export function giveThisManACookie(state, gold) {
    return produce(state, draftState => {
        getPlayerFromState(draftState).gold += gold;
    })
}

export function levelUp(state) {
    return produce(state, draftState => {
        getPlayerFromState(draftState).level += 1;
        getPlayerFromState(draftState).expToNextLevel += (getPlayerFromState(draftState).level * getPlayerFromState(draftState).level * 300)
    })
}

export function rewardExp(state, exp) {
    return produce(state, draftState => {
        while (getPlayerFromState(draftState).expToNextLevel <= exp + getPlayerFromState(draftState).exp) {
            draftState = createDraft(doAction("level-up", draftState));
        }
        getPlayerFromState(draftState).exp += exp;
        return draftState;
    })
}

export function changeEnemyHP(state, adventureIndex, hpDelta) {
    return produce(state, draftState => {
        draftState.adventures[adventureIndex].enemy.hp += hpDelta;
    })

}

export function sendAdventurerToAdventure(state, adventureIndex, adventurerName) {
    return produce(state, draftState => {
        draftState.party.adventurers.forEach(adventurer => {
            if(adventurer.name == adventurerName) {
                adventurer.currentQuest = adventureIndex;
            }
        })
    })
}

export function returnAdventurerFromAdventure(state, adventurerName) {
    return produce(state, draftState => {
        draftState.party.adventurers.forEach(adventurer => {
            if(adventurer.name == adventurerName) {
                adventurer.currentQuest = null;
            }
        })
    })
}

export function collectFromAdventure(state, adventureIndex) {
    return produce(state, draftState => {
        draftState.adventures[adventureIndex].collectibles -= 1;
    })
}

export function resetAdventure(state, adventureIndex) {
    return produce(state, draftState => {
        draftState.adventures[adventureIndex].enemy = draftState.adventures[adventureIndex].originalEnemy;
        draftState.adventures[adventureIndex].collectibles = draftState.adventures[adventureIndex].originalCollectibles;
    })
}

export function startGame(_, initialState) {
    let newState = JSON.parse(JSON.stringify(initialState));
    return newState;
}

export function chooseAdventurerForAdventure(state, isAdventurerGoing, adventurerName, adventureIndex) {
    return produce(state, draftState => {
        if (isAdventurerGoing) {
            draftState.adventures[adventureIndex].selectedPartyMembers.push(adventurerName);
        } else {
            draftState.adventures[adventureIndex].selectedPartyMembers = draftState.adventures[adventureIndex].selectedPartyMembers.filter(partyMember => partyMember !== adventurerName)
        }
    })
}

export function writeToLog(state,logMessage){
    return produce(state, draftState => {
        draftState.log.push(logMessage);
    })
}

export function equipItem(state, itemName) {
    return produce(state, draftState => {
        getPlayerFromState(draftState).equipment[itemName].equipped = true;
    })
}

export function startAdventureIdling(state,adventureIndex){
    return produce(state, draftState => {
        draftState.adventures[adventureIndex].isIdling = true;
    })
}

export function stopAdventureIdling(state,adventureIndex){
    return produce(state, draftState => {
        draftState.adventures[adventureIndex].isIdling = false;
    })
}