import { initialState } from './initialState';
import { doAction } from './reducers';
import * as store from './store';

function healPlayer() {
    doAction("change-player-hp", { hpDelta: store.getState().player.hpRegain });
}

setInterval(healPlayer, 1000);

doAction("start-game", { initialState: initialState });