/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/actions.js":
/*!************************!*\
  !*** ./src/actions.js ***!
  \************************/
/*! exports provided: changePlayerHP, giveThisManACookie, levelUp, rewardExp, changeEnemyHP, sendAdventurerToAdventure, returnAdventurerFromAdventure, collectFromAdventure, resetAdventure, startQuest, performRound, startGame */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changePlayerHP", function() { return changePlayerHP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "giveThisManACookie", function() { return giveThisManACookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "levelUp", function() { return levelUp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rewardExp", function() { return rewardExp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeEnemyHP", function() { return changeEnemyHP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendAdventurerToAdventure", function() { return sendAdventurerToAdventure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "returnAdventurerFromAdventure", function() { return returnAdventurerFromAdventure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "collectFromAdventure", function() { return collectFromAdventure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetAdventure", function() { return resetAdventure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startQuest", function() { return startQuest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "performRound", function() { return performRound; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startGame", function() { return startGame; });
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reducers */ "./src/reducers.js");


function changePlayerHP(state, hpDelta) {
    const newHP = Math.min(state.player.maxHP, Math.max(0, state.player.hp + hpDelta));
    return {
        ...state,
        player: {
            ...state.player,
            hp: newHP
        }
    }
}

function giveThisManACookie(state, gold) {
    return {
        ...state,
        player: {
            ...state.player,
            gold: state.player.gold + gold
        }
    }
}

function levelUp(state) {
    return {
        ...state,
        player: {
            ...state.player,
            level: state.player.level + 1,
            expToNextLevel: state.player.expToNextLevel + (state.player.level * 300)
        }
    }
}

function rewardExp(state, exp) {
    while (state.player.expToNextLevel <= exp + state.player.exp) {
        state = Object(_reducers__WEBPACK_IMPORTED_MODULE_0__["doAction"])("level-up", state);
    }
    return {
        ...state,
        player: {
            ...state.player,
            exp: state.player.exp + exp,
        }
    }
}

function changeEnemyHP(state, adventureIndex, hpDelta) {
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

function sendAdventurerToAdventure(state, adventureIndex, adventurerIndex) {
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

function returnAdventurerFromAdventure(state, adventurerIndex) {
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

function collectFromAdventure(state, adventureIndex) {
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

function resetAdventure(currentState, initialState, adventureIndex) {
    const newAdventures = [...currentState.adventures];
    newAdventures[adventureIndex] = {
        ...initialState.adventures[adventureIndex]
    }

    return {
        ...currentState,
        adventures: newAdventures
    }
}
function startQuest(state, adventureIndex) {
    state = Object(_reducers__WEBPACK_IMPORTED_MODULE_0__["doAction"])("send-adventurer-to-adventure", { adventureindex: adventureIndex, adventurerIndex: 0 });
    state = Object(_reducers__WEBPACK_IMPORTED_MODULE_0__["doAction"])("perform-round", { adventure: state.adventures[adventureIndex] });
    return state;
}
function performRound(state, adventure) {
    const adventureIndex = state.adventures.indexOf(adventure);
    state = Object(_reducers__WEBPACK_IMPORTED_MODULE_0__["doAction"])("change-enemy-hp", { adventureIndex: adventureIndex, hpDelta: -state.player.stats.strength });

    if (isDead(state.adventures[adventureIndex].enemy)) {
        state = Object(_reducers__WEBPACK_IMPORTED_MODULE_0__["doAction"])("give-this-man-a-cookie", { gold: state.adventures[adventureIndex].rewards.gold });
        state = Object(_reducers__WEBPACK_IMPORTED_MODULE_0__["doAction"])("reward-exp", { exp: state.adventures[adventureIndex].rewards.exp });
        state = Object(_reducers__WEBPACK_IMPORTED_MODULE_0__["doAction"])("reset-adventure", { adventureIndex: adventureIndex });
        console.log("enemy dead");
        state = Object(_reducers__WEBPACK_IMPORTED_MODULE_0__["doAction"])("return-adventurer-from-adventure", { adventure: state.adventures[adventureIndex], adventurerIndex: 0 });
        return state;
    }

    state = Object(_reducers__WEBPACK_IMPORTED_MODULE_0__["doAction"])("change-player-hp", { hpDelta: -state.adventures[adventureIndex].enemy.damage });
    if (isDead(state.player)) {
        state = Object(_reducers__WEBPACK_IMPORTED_MODULE_0__["doAction"])("reset-adventure", { adventureIndex: adventureIndex });
        console.log("you dead");
        state = Object(_reducers__WEBPACK_IMPORTED_MODULE_0__["doAction"])("return-adventurer-from-adventure", { adventure: state.adventures[adventureIndex], adventurerIndex: 0 });
        return state;
    }

    state = Object(_reducers__WEBPACK_IMPORTED_MODULE_0__["doAction"])("collect-from-adventure", { adventureIndex: adventureIndex });
    if (isCollected(state.adventures[adventureIndex])) {
        state = Object(_reducers__WEBPACK_IMPORTED_MODULE_0__["doAction"])("give-this-man-a-cookie", { gold: state.adventures[adventureIndex].rewards.gold });
        state = Object(_reducers__WEBPACK_IMPORTED_MODULE_0__["doAction"])("reward-exp", { exp: state.adventures[adventureIndex].rewards.exp });
        state = Object(_reducers__WEBPACK_IMPORTED_MODULE_0__["doAction"])("reset-adventure", { adventureIndex: adventureIndex });
        console.log("you got away");
        state = Object(_reducers__WEBPACK_IMPORTED_MODULE_0__["doAction"])("return-adventurer-from-adventure", { adventure: state.adventures[adventureIndex], adventurerIndex: 0 });
        return state;
    }

    setTimeout(() => Object(_reducers__WEBPACK_IMPORTED_MODULE_0__["doAction"])("perform-round", { adventure: state.adventures[adventureIndex] }), 2000);

    return state;
}

function startGame(state, initialState) {
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

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _initialState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initialState */ "./src/initialState.js");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducers */ "./src/reducers.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./store */ "./src/store.js");




function healPlayer() {
    Object(_reducers__WEBPACK_IMPORTED_MODULE_1__["doAction"])("change-player-hp", { hpDelta: _store__WEBPACK_IMPORTED_MODULE_2__["getState"]().player.hpRegain });
}

setInterval(healPlayer, 1000);

Object(_reducers__WEBPACK_IMPORTED_MODULE_1__["doAction"])("start-game", { initialState: _initialState__WEBPACK_IMPORTED_MODULE_0__["initialState"] });

/***/ }),

/***/ "./src/initialState.js":
/*!*****************************!*\
  !*** ./src/initialState.js ***!
  \*****************************/
/*! exports provided: initialState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
const initialState = {
    player: {
        maxHP: 100,
        hp: 100,
        gold: 100,
        exp: 0,
        expToNextLevel: 100,
        level: 1,
        hpRegain: 0.5,
        isInAdventure: false,
        stats: {
            strength: 10,
            agility: 5
        }
    },
    party: {
        adventurers: [
            {
                currentQuest: null,
                name: "pooper",
                stats: {
                    strength: 5
                },
                price: 200
            },
            {
                currentQuest: null,
                name: "butthole",
                stats: {
                    strength: 5
                },
                price: 200
            }
        ]
    },
    adventures: [
        {
            description: "fetch",
            collectibles: 3,
            requiredLevel: 1,
            rewards: {
                gold: 5,
                item: "glove",
                exp: 100
            },
            enemy: {
                name: "orc",
                hp: 30,
                damage: 10
            }
        },
        {
            description: "more fetch",
            collectibles: 3,
            requiredLevel: 2,
            rewards: {
                gold: 5,
                item: "glove",
                exp: 5000
            },
            enemy: {
                name: "orc",
                hp: 50,
                damage: 20
            }
        }
    ]
};

/***/ }),

/***/ "./src/reducers.js":
/*!*************************!*\
  !*** ./src/reducers.js ***!
  \*************************/
/*! exports provided: doAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doAction", function() { return doAction; });
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui */ "./src/ui.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ "./src/actions.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./store */ "./src/store.js");




function doAction(action, actionParams) {
    let state = _store__WEBPACK_IMPORTED_MODULE_2__["getState"]();

    console.log(Array.from(arguments));

    switch (action) {
        case "start-game":
            state = _actions__WEBPACK_IMPORTED_MODULE_1__["startGame"](state, actionParams.initialState);
            break;
        case "change-enemy-hp":
            state = _actions__WEBPACK_IMPORTED_MODULE_1__["changeEnemyHP"](state, actionParams.adventureIndex, actionParams.hpDelta);
            break;
        case "change-player-hp":
            state = _actions__WEBPACK_IMPORTED_MODULE_1__["changePlayerHP"](state, actionParams.hpDelta);
            break;
        case "give-this-man-a-cookie":
            state = _actions__WEBPACK_IMPORTED_MODULE_1__["giveThisManACookie"](state, actionParams.gold);
            break;
        case "collect-from-adventure":
            state = _actions__WEBPACK_IMPORTED_MODULE_1__["collectFromAdventure"](state, actionParams.adventureIndex)
            break;
        case "reset-adventure":
            state = _actions__WEBPACK_IMPORTED_MODULE_1__["resetAdventure"](state, state.initialState, actionParams.adventureIndex);
            break;
        case "reward-exp":
            state = _actions__WEBPACK_IMPORTED_MODULE_1__["rewardExp"](state, actionParams.exp);
            break;
        case "level-up":
            state = _actions__WEBPACK_IMPORTED_MODULE_1__["levelUp"](state);
            break;
        case "perform-round":
            state = _actions__WEBPACK_IMPORTED_MODULE_1__["performRound"](state, actionParams.adventure);
            break;
        case "send-adventurer-to-adventure":
            state = _actions__WEBPACK_IMPORTED_MODULE_1__["sendAdventurerToAdventure"](state, actionParams.adventureIndex, actionParams.adventurerIndex);
            break;
        case "return-adventurer-from-adventure":
            state = _actions__WEBPACK_IMPORTED_MODULE_1__["returnAdventurerFromAdventure"](state, actionParams.adventurerIndex);
            break;
        case "start-quest":
            state = _actions__WEBPACK_IMPORTED_MODULE_1__["startQuest"](state,actionParams.adventureIndex);
            break;
    }

    _store__WEBPACK_IMPORTED_MODULE_2__["setState"](state);

    console.log(state);

    _ui__WEBPACK_IMPORTED_MODULE_0__["renderGame"](state);

    return state;
}

/***/ }),

/***/ "./src/store.js":
/*!**********************!*\
  !*** ./src/store.js ***!
  \**********************/
/*! exports provided: getState, setState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getState", function() { return getState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setState", function() { return setState; });
let state = {};

function getState() {
    return state;
}

function setState(newState) {
    state = newState;
}

/***/ }),

/***/ "./src/ui.js":
/*!*******************!*\
  !*** ./src/ui.js ***!
  \*******************/
/*! exports provided: renderGame */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderGame", function() { return renderGame; });
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reducers */ "./src/reducers.js");


function renderGame(state) {
    document.getElementById("player-data").innerHTML = "";
    document.getElementById("player-data").appendChild(getPlayerElement(state));

    document.getElementById("advantures-data").innerHTML = "";
    document.getElementById("advantures-data").appendChild(getAdventuresElement(state));
}

function getPlayerElement(state) {
    const playerContainer = document.createElement("div");
    playerContainer.innerHTML = `
    <ul>
        <li>
            <span class="stat-name">HP</span>:
            <span id="player-hp">${Math.ceil(state.player.hp)}</span>
        </li>
        <li>
            <span class="stat-name">exp</span>: 
            <span id="player-exp">${state.player.exp}/${state.player.expToNextLevel}</span>
        </li>
        <li>
            <span class="stat-name">level</span>: 
            <span id="player-level">${state.player.level}</span>
        </li>
        <li>
            <span class="stat-name">gold</span>: 
            <span id="player-gold">${state.player.gold}</span>
        </li>
        <li>
            <span class="stat-name">strength</span>: 
            <span id="player-strength">${state.player.stats.strength}</span>
        </li>
        <li>
            <span class="stat-name">agility</span>: 
            <span id="player-agility">${state.player.stats.agility}</span>
        </li>
    </ul>`;
    return playerContainer;

}

function getAdventureElement(state, adventure, whatToDoWhenClicked) {
    const button = document.createElement("button");
    button.innerText = adventure.description;
    button.onclick = whatToDoWhenClicked;
    if (state.party.adventurers[0].currentQuest !== null) {
        button.disabled = true;
    }
    const adventureContainer = document.createElement("div");
    adventureContainer.className = "adventure-container";
    adventureContainer.innerHTML = `
        Monster: ${adventure.enemy.name} (${adventure.enemy.hp} hp)<br />
        Reward: ${adventure.rewards.gold} gold | ${adventure.rewards.exp} exp <br />
    `;
    adventureContainer.appendChild(button);

    return adventureContainer;
}

function getAdventuresElement(state) {
    const availableAdventures = getAvailableAdventures(state);
    const buttons = availableAdventures.map(adventure => {
        const adventureIndex = state.adventures.indexOf(adventure);
        return getAdventureElement(state, adventure, () => Object(_reducers__WEBPACK_IMPORTED_MODULE_0__["doAction"])("start-quest", { adventureIndex: adventureIndex }));
    });
    const buttonsContainer = document.createElement("div");
    buttons.forEach(button => buttonsContainer.appendChild(button));
    return buttonsContainer;
};

function getAvailableAdventures(state) {
    return state.adventures.filter(adventure => state.player.level >= adventure.requiredLevel)
}

/***/ })

/******/ });
//# sourceMappingURL=main.js.map