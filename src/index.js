import { initialState } from './initialState';
import { doAction } from './reducers';
import * as store from './store';

function healPlayer() {
    doAction("change-player-hp", { hpDelta: store.getState().player.hpRegain });
}

// setInterval(healPlayer, 1000);
if (localStorage.getItem('game')) {
    doAction("start-game",{initialState: JSON.parse(localStorage.getItem('game'))});
}
else
{
    doAction("start-game", { initialState: initialState });
}
