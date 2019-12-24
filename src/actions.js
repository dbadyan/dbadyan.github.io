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
export function startQuest(state, adventureIndex) {
    state = doAction("send-adventurer-to-adventure", { adventureindex: adventureIndex, adventurerIndex: 0 });
    state = doAction("perform-round", { adventure: state.adventures[adventureIndex] });
    return state;
}
export function performRound(state, adventure) {
    const adventureIndex = state.adventures.indexOf(adventure);
    state = doAction("change-enemy-hp", { adventureIndex: adventureIndex, hpDelta: -state.player.stats.strength });

    if (isDead(state.adventures[adventureIndex].enemy)) {
        state = doAction("give-this-man-a-cookie", { gold: state.adventures[adventureIndex].rewards.gold });
        state = doAction("reward-exp", { exp: state.adventures[adventureIndex].rewards.exp });
        state = doAction("reset-adventure", { adventureIndex: adventureIndex });
        console.log("enemy dead");
        state = doAction("return-adventurer-from-adventure", { adventure: state.adventures[adventureIndex], adventurerIndex: 0 });
        return state;
    }

    state = doAction("change-player-hp", { hpDelta: -state.adventures[adventureIndex].enemy.damage });
    if (isDead(state.player)) {
        state = doAction("reset-adventure", { adventureIndex: adventureIndex });
        console.log("you dead");
        state = doAction("return-adventurer-from-adventure", { adventure: state.adventures[adventureIndex], adventurerIndex: 0 });
        return state;
    }

    state = doAction("collect-from-adventure", { adventureIndex: adventureIndex });
    if (isCollected(state.adventures[adventureIndex])) {
        state = doAction("give-this-man-a-cookie", { gold: state.adventures[adventureIndex].rewards.gold });
        state = doAction("reward-exp", { exp: state.adventures[adventureIndex].rewards.exp });
        state = doAction("reset-adventure", { adventureIndex: adventureIndex });
        console.log("you got away");
        state = doAction("return-adventurer-from-adventure", { adventure: state.adventures[adventureIndex], adventurerIndex: 0 });
        return state;
    }

    setTimeout(() => doAction("perform-round", { adventure: state.adventures[adventureIndex] }), 2000);

    return state;
}

export function startGame(state, initialState) {
    let newState = JSON.parse(JSON.stringify(initialState))
    newState.initialState = JSON.parse(JSON.stringify(initialState));
    return newState;
}

function isCollected(adventure) {
    return adventure.collectibles <= 0;
}

function isDead(character) {
    return character.hp <= 0;
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