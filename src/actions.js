import { doAction } from './reducers';
import { produce, createDraft } from "immer";

export function changePlayerHP(state, hpDelta) {
    return produce(state, draftState => {
        const player = draftState.party.adventurers[0];
        draftState.party.adventurers[0].hp = Math.min(player.maxHP, Math.max(0, player.hp + hpDelta));
    })
}

export function giveThisManACookie(state, gold) {
    return produce(state, draftState => {
        draftState.party.adventurers[0].gold += gold;
    })
}

export function levelUp(state) {
    return produce(state, draftState => {
        draftState.party.adventurers[0].level += 1;
        draftState.party.adventurers[0].expToNextLevel += (draftState.party.adventurers[0].level * 300)
    })
}

export function rewardExp(state, exp) {
    return produce(state, draftState => {
        while (draftState.party.adventurers[0].expToNextLevel <= exp + draftState.party.adventurers[0].exp) {
            draftState = createDraft(doAction("level-up", draftState));
        }
        draftState.party.adventurers[0].exp += exp;
        return draftState;
    })
}

export function changeEnemyHP(state, adventureIndex, hpDelta) {
    return produce(state, draftState => {
        draftState.adventures[adventureIndex].enemy.hp += hpDelta;
    })

}

export function sendAdventurerToAdventure(state, adventureIndex, adventurerIndex) {
    return produce(state, draftState => {
        draftState.party.adventurers[adventurerIndex].currentQuest = adventureIndex;
    })
}

export function returnAdventurerFromAdventure(state, adventurerIndex) {
    return produce(state, draftState => {
        draftState.party.adventurers[adventurerIndex].currentQuest = null;
    })
}

export function collectFromAdventure(state, adventureIndex) {
    return produce(state, draftState => {
        draftState.adventures[adventureIndex].collectibles -= 1;
    })
}

export function resetAdventure(currentState, initialState, adventureIndex) {
    return produce(currentState, draftState => {
        draftState.adventures[adventureIndex] = initialState.adventures[adventureIndex];
    })
}

export function startGame(state, initialState) {
    let newState = JSON.parse(JSON.stringify(initialState))
    newState.initialState = JSON.parse(JSON.stringify(initialState));
    return newState;
}

export function chooseAdventurerForAdventure(currentState, isAdventurerGoing, adventurerName, adventureIndex) {
    return produce(currentState, draftState => {
        if (isAdventurerGoing) {
            draftState.adventures[adventureIndex].selectedPartyMembers.push(adventurerName);
        } else {
            draftState.adventures[adventureIndex].selectedPartyMembers = draftState.adventures[adventureIndex].selectedPartyMembers.filter(partyMember => partyMember !== adventurerName)
        }
    })
}
export function writeToLog(currentState,logMessage){
    return produce(currentState, draftState => {
        draftState.log.push(logMessage);
    })
}