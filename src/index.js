import { initialState } from './initialState';
import { doAction } from './reducers';
import { fight } from './quests'
import * as store from './store';

function healPlayer() {
    doAction("change-player-hp", { hpDelta: store.getState().party.adventurers[0].hpRegain });
}

setInterval(healPlayer, 1000);
if (localStorage.getItem('game')) {
    doAction("start-game", { initialState: JSON.parse(localStorage.getItem('game')) });
    const currentAdventures = new Set(store.getState().party.adventurers.map(adventurer => adventurer.currentQuest ));
    currentAdventures.forEach(adventureIndex => {
        if (adventureIndex != null) {
            fight(store, adventureIndex)
        }
    });
}
else {
    doAction("start-game", { initialState: initialState });
}
