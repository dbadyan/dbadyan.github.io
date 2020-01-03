import {doAction} from './reducers';

export function startQuest(store, adventureIndex) {
    doAction("send-adventurer-to-adventure", { adventureindex: adventureIndex, adventurerIndex: 0 }, "adventurers sent to " + store.getState().adventures[adventureIndex].name);
    
    const intervalId = setInterval(() => {
        const roundResult = performRound(store, adventureIndex);
        if (roundResult !== "CONTINUE") {
            clearInterval(intervalId);
        }
    }, 2000);
}

export function performRound(store, adventureIndex) {
    const strengthSum = getPartyStrength(store.getState(), adventureIndex);
    doAction("change-enemy-hp", { adventureIndex: adventureIndex, hpDelta: -strengthSum }, "damage done: " + strengthSum +" in the adventure " + store.getState().adventures[adventureIndex].name);

    if (isDead(store.getState().adventures[adventureIndex].enemy)) {
        doAction("give-this-man-a-cookie", { gold: store.getState().adventures[adventureIndex].rewards.gold }, "rewarded " + store.getState().adventures[adventureIndex].rewards.gold);
        doAction("reward-exp", { exp: store.getState().adventures[adventureIndex].rewards.exp }, "recieved " + store.getState().adventures[adventureIndex].rewards.exp + "exp");
        doAction("reset-adventure", { adventureIndex: adventureIndex });
        console.log("enemy dead");
        doAction("return-adventurer-from-adventure", { adventure: store.getState().adventures[adventureIndex], adventurerIndex: 0 });
        return "ENEMY_DEAD";
    }

    doAction("change-player-hp", { hpDelta: -store.getState().adventures[adventureIndex].enemy.damage });
    if (isDead(store.getState().party.adventurers[0])) {
        doAction("reset-adventure", { adventureIndex: adventureIndex });
        console.log("you dead");
        doAction("return-adventurer-from-adventure", { adventure: store.getState().adventures[adventureIndex], adventurerIndex: 0 });
        return "PLAYER_DEAD";
    }

    doAction("collect-from-adventure", { adventureIndex: adventureIndex });
    if (isCollected(store.getState().adventures[adventureIndex])) {
        doAction("give-this-man-a-cookie", { gold: store.getState().adventures[adventureIndex].rewards.gold });
        doAction("reward-exp", { exp: store.getState().adventures[adventureIndex].rewards.exp });
        doAction("reset-adventure", { adventureIndex: adventureIndex });
        console.log("you got away");
        doAction("return-adventurer-from-adventure", { adventure: store.getState().adventures[adventureIndex], adventurerIndex: 0 });
        return "PLAYER_ESCAPED";
    }

    return "CONTINUE"
}

function getPartyStrength(state, adventureindex) {
    return state.party.adventurers.filter(member => {
        return state.adventures[adventureindex].selectedPartyMembers.indexOf(member.name) > -1;
    }).reduce((strengthSum, currentMember) => strengthSum + currentMember.stats.strength, 0)
}
function isCollected(adventure) {
    return adventure.collectibles <= 0;
}

function isDead(character) {
    return character.hp <= 0;
}