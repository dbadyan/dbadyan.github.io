import * as ui from './ui';
import * as actions from './actions';
import * as store from './store';

export function doAction(action, actionParams) {
    let state = store.getState();

    console.log(Array.from(arguments));

    switch (action) {
        case "start-game":
            state = actions.startGame(state, actionParams.initialState);
            break;
        case "change-enemy-hp":
            state = actions.changeEnemyHP(state, actionParams.adventureIndex, actionParams.hpDelta);
            break;
        case "change-player-hp":
            state = actions.changePlayerHP(state, actionParams.hpDelta);
            break;
        case "give-this-man-a-cookie":
            state = actions.giveThisManACookie(state, actionParams.gold);
            break;
        case "collect-from-adventure":
            state = actions.collectFromAdventure(state, actionParams.adventureIndex)
            break;
        case "reset-adventure":
            state = actions.resetAdventure(state, state.initialState, actionParams.adventureIndex);
            break;
        case "reward-exp":
            state = actions.rewardExp(state, actionParams.exp);
            break;
        case "level-up":
            state = actions.levelUp(state);
            break;
        case "perform-round":
            state = actions.performRound(state, actionParams.adventure);
            break;
        case "send-adventurer-to-adventure":
            state = actions.sendAdventurerToAdventure(state, actionParams.adventureIndex, actionParams.adventurerIndex);
            break;
        case "return-adventurer-from-adventure":
            state = actions.returnAdventurerFromAdventure(state, actionParams.adventurerIndex);
            break;
        case "start-quest":
            state = actions.startQuest(state,actionParams.adventureIndex);
            break;
        case "choose-adventurer-for-adventure":
            state = actions.chooseAdventurerForAdventure(state, actionParams.isAdventurerGoing, actionParams.adventurerName, actionParams.adventureIndex);
            break;
    }

    store.setState(state);

    console.log(state);

    ui.renderGame(state);

    return state;
}