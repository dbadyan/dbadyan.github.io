import { doAction } from './reducers';

export function changePlayerHP(state, hpDelta) {
    const newHP = Math.min(state.player.maxHP, Math.max(0, state.player.hp + hpDelta));
    return {
        ...state,
        player: {
            ...state.player,
            hp: newHP
        }
    }
}

export function giveThisManACookie(state, gold) {
    return {
        ...state,
        player: {
            ...state.player,
            gold: state.player.gold + gold
        }
    }
}

export function levelUp(state) {
    return {
        ...state,
        player: {
            ...state.player,
            level: state.player.level + 1,
            expToNextLevel: state.player.expToNextLevel + (state.player.level * 300)
        }
    }
}

export function rewardExp(state, exp) {
    while (state.player.expToNextLevel <= exp + state.player.exp) {
        state = doAction("level-up", state);
    }
    return {
        ...state,
        player: {
            ...state.player,
            exp: state.player.exp + exp,
        }
    }
}

export function changeEnemyHP(state, adventureIndex, hpDelta) {
    const newAdventures = [...state.adventures];
    newAdventures[adventureIndex] = {
        ...state.adventures[adventureIndex],
        enemy: {
            ...state.adventures[adventureIndex].enemy,
            hp: state.adventures[adventureIndex].enemy.hp + hpDelta
        }
    }

    return {
        ...state,
        adventures: newAdventures
    }
}

export function sendAdventurerToAdventure(state, adventureIndex, adventurerIndex) {
    const newAdventurers = [...state.party.adventurers];
    newAdventurers[adventurerIndex] = {
        ...newAdventurers[adventurerIndex],
        currentQuest: adventureIndex
    }

    return {
        ...state,
        party: {
            ...state.party,
            adventurers: newAdventurers
        }
    }
}

export function returnAdventurerFromAdventure(state, adventurerIndex) {
    const newAdventurers = [...state.party.adventurers];
    newAdventurers[adventurerIndex] = {
        ...newAdventurers[adventurerIndex],
        currentQuest: null
    }

    return {
        ...state,
        party: {
            ...state.party,
            adventurers: newAdventurers
        }
    }
}

export function collectFromAdventure(state, adventureIndex) {
    const newAdventures = [...state.adventures];

    newAdventures[adventureIndex] = {
        ...state.adventures[adventureIndex],
        collectibles: state.adventures[adventureIndex].collectibles - 1
    };

    return {
        ...state,
        adventures: newAdventures
    }
}

export function resetAdventure(currentState, initialState, adventureIndex) {
    const newAdventures = [...currentState.adventures];
    newAdventures[adventureIndex] = {
        ...initialState.adventures[adventureIndex]
    }

    return {
        ...currentState,
        adventures: newAdventures
    }
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