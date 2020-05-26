    import { doAction } from './reducers';
import { calculateItemStrength, calculateItemDefense } from './characterUtils';

export function startIdling(store, adventureIndex) {
    doAction("start-adventure-idling", { adventureIndex: adventureIndex });

    startQuest(store, adventureIndex);
}
export function stoptIdling(_, adventureIndex) {
    doAction("stop-adventure-idling", { adventureIndex: adventureIndex });
}

export function startQuest(store, adventureIndex) {

//    if (store.getState().adventures[adventureIndex].selectedPartyMembers.length === 0) {
//        doAction('choose-adventurer-for-adventure', { adventureIndex: adventureIndex, adventurerName: "player1", isAdventurerGoing: true });
//    }

    store.getState().adventures[adventureIndex].selectedPartyMembers.forEach(adventurerName => {
        doAction("send-adventurer-to-adventure", { adventureIndex: adventureIndex, adventurerName: adventurerName }, "adventurers sent to " + store.getState().adventures[adventureIndex].name);
    });

    fight(store, adventureIndex);
}

export function performRound(store, adventureIndex) {
    const strengthSum = getPartyStrength(store.getState(), adventureIndex) + calculateItemStrength(store.getState());
    doAction("change-enemy-hp", { adventureIndex: adventureIndex, hpDelta: -strengthSum}, "damage done: " + strengthSum + " in the adventure " + store.getState().adventures[adventureIndex].name);

    if (isDead(store.getState().adventures[adventureIndex].enemy)) {
        doAction("give-this-man-a-cookie", { gold: store.getState().adventures[adventureIndex].rewards.gold }, "rewarded " + store.getState().adventures[adventureIndex].rewards.gold + " gold");
        doAction("reward-exp", { exp: store.getState().adventures[adventureIndex].rewards.exp }, "recieved " + store.getState().adventures[adventureIndex].rewards.exp + "exp");
        console.log("enemy dead");
        store.getState().adventures[adventureIndex].selectedPartyMembers.forEach(adventurerName => {
            doAction("return-adventurer-from-adventure", { adventurerName: adventurerName }, "adventurers returned from " + store.getState().adventures[adventureIndex].name);
        });
        doAction("reset-adventure", { adventureIndex: adventureIndex });
        return "ENEMY_DEAD";
    }

    doAction("change-player-hp", { hpDelta: Math.min(0, calculateItemDefense(store.getState()) - store.getState().adventures[adventureIndex].enemy.damage) });
    if (isDead(store.getState().party.adventurers[0])) {
        console.log("you dead");
        store.getState().adventures[adventureIndex].selectedPartyMembers.forEach(adventurerName => {
            doAction("return-adventurer-from-adventure", { adventurerName: adventurerName }, "adventurers returned from " + store.getState().adventures[adventureIndex].name);
        });
        doAction("reset-adventure", { adventureIndex: adventureIndex });
        return "PLAYER_DEAD";
    }

    doAction("collect-from-adventure", { adventureIndex: adventureIndex });
    if (isCollected(store.getState().adventures[adventureIndex])) {
        doAction("give-this-man-a-cookie", { gold: store.getState().adventures[adventureIndex].rewards.gold });
        doAction("reward-exp", { exp: store.getState().adventures[adventureIndex].rewards.exp });
        console.log("you got away");
        store.getState().adventures[adventureIndex].selectedPartyMembers.forEach(adventurerName => {
            doAction("return-adventurer-from-adventure", { adventurerName: adventurerName }, "adventurers returned from " + store.getState().adventures[adventureIndex].name);
        });
        doAction("reset-adventure", { adventureIndex: adventureIndex });
        return "PLAYER_ESCAPED";
    }

    return "CONTINUE"
}

function getPartyStrength(state, adventureIndex) {
    return state.party.adventurers.filter(member => {
        return state.adventures[adventureIndex].selectedPartyMembers.indexOf(member.name) > -1;
    }).reduce((strengthSum, currentMember) => strengthSum + currentMember.stats.strength, 0)
}
function isCollected(adventure) {
    return adventure.collectibles <= 0;
}

function isDead(character) {
    return character.hp <= 0;
}

export function fight(store, adventureIndex) {
    const intervalId = setInterval(() => {
        const roundResult = performRound(store, adventureIndex);
        if (roundResult !== "CONTINUE" && store.getState().adventures[adventureIndex].isIdling === false) {
            clearInterval(intervalId);
        }
    }, 2000);
}
