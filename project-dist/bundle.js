var myApp;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/modern-normalize/modern-normalize.css":
/*!************************************************************!*\
  !*** ./node_modules/modern-normalize/modern-normalize.css ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/css/game-field.css":
/*!********************************!*\
  !*** ./src/css/game-field.css ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/css/start-window.css":
/*!**********************************!*\
  !*** ./src/css/start-window.css ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/js/add-level-options.js":
/*!*************************************!*\
  !*** ./src/js/add-level-options.js ***!
  \*************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addLevelOptions: () => (/* binding */ addLevelOptions)
/* harmony export */ });
function addLevelOptions (str, element) {
  const puzlLevel = document.createElement('optgroup');
  puzlLevel.classList.add('puzl-level'); 
  puzlLevel.setAttribute('label', str);
  element.append(puzlLevel);
  return puzlLevel;
}

/***/ }),

/***/ "./src/js/convert-time.js":
/*!********************************!*\
  !*** ./src/js/convert-time.js ***!
  \********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   convertTime: () => (/* binding */ convertTime)
/* harmony export */ });
function convertTime(milliseconds) {
  let seconds = Math.floor(milliseconds / 1000);
  let minutes = Math.floor(seconds / 60);
  seconds = seconds % 60;
  minutes = minutes % 60;
return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

/***/ }),

/***/ "./src/js/draw.js":
/*!************************!*\
  !*** ./src/js/draw.js ***!
  \************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clearField: () => (/* binding */ clearField),
/* harmony export */   draw: () => (/* binding */ draw)
/* harmony export */ });
/* harmony import */ var _css_game_field_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/game-field.css */ "./src/css/game-field.css");
/* harmony import */ var _nonos_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../nonos.json */ "./src/nonos.json");
/* harmony import */ var _start_window_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./start-window.js */ "./src/js/start-window.js");




function draw(index, arr) {
  let fieldW = _nonos_json__WEBPACK_IMPORTED_MODULE_1__[index].leftclues.length + _nonos_json__WEBPACK_IMPORTED_MODULE_1__[index].field.length;
  let fieldH = _nonos_json__WEBPACK_IMPORTED_MODULE_1__[index].topclues.length + _nonos_json__WEBPACK_IMPORTED_MODULE_1__[index].field.length;
  let fieldSize = _nonos_json__WEBPACK_IMPORTED_MODULE_1__[index].field.length;
  _start_window_js__WEBPACK_IMPORTED_MODULE_2__.gameSection.classList.remove('default');
  _start_window_js__WEBPACK_IMPORTED_MODULE_2__.gameSection.style.gridTemplateColumns = `repeat(${fieldW}, ${_nonos_json__WEBPACK_IMPORTED_MODULE_1__[index].size}px)`;
  _start_window_js__WEBPACK_IMPORTED_MODULE_2__.gameSection.style.gridTemplateRows = `repeat(${fieldH}, ${_nonos_json__WEBPACK_IMPORTED_MODULE_1__[index].size}px)`;
  for (let i = 0; i < fieldSize; i += 1) {
    arr[i] = new Array();
  }
  for (let i = 0; i < fieldH; i += 1) {
    for (let j = 0; j < fieldW; j += 1) {
      let cell = document.createElement('div');
      cell.classList.add('cell');
      if (i === fieldH - fieldSize - 1)
        cell.style.borderBottom = '4px solid black';
      else if ((i - (fieldH - fieldSize - 1)) % 5 === 0)
        cell.style.borderBottom = '4px solid gray';
      if (
        j === fieldW - fieldSize - 1) cell.style.borderRight = '4px solid black';
      else if  ((j - (fieldW - fieldSize - 1)) % 5 === 0
      ) {
        cell.style.borderRight = '4px solid gray';
      }
      _start_window_js__WEBPACK_IMPORTED_MODULE_2__.gameSection.append(cell);
      cell.addEventListener('contextmenu', (event) => {
        event.preventDefault();
      });
      if (
        (i < fieldH - fieldSize && j >= fieldW - fieldSize) ||
        (i >= fieldH - fieldSize && j < fieldW - fieldSize)
      ) {
        cell.classList.add('clues');
        if (i < fieldH - fieldSize) {
          if (_nonos_json__WEBPACK_IMPORTED_MODULE_1__[index].topclues[i][j - (fieldW - fieldSize)] !== 0) {
            cell.textContent = `${_nonos_json__WEBPACK_IMPORTED_MODULE_1__[index].topclues[i][j - (fieldW - fieldSize)]}`;
          }
        } else {
          if (_nonos_json__WEBPACK_IMPORTED_MODULE_1__[index].leftclues[j][i - (fieldH - fieldSize)] !== 0) {
            cell.textContent = `${_nonos_json__WEBPACK_IMPORTED_MODULE_1__[index].leftclues[j][i - (fieldH - fieldSize)]}`;
          }
        }
      } else {
        if (!(i < fieldH - fieldSize && j < fieldW - fieldSize)) {
          cell.classList.add('active');
          cell.i = i - (fieldH - fieldSize);
          cell.j = j - (fieldW - fieldSize);
          arr[i - (fieldH - fieldSize)].push(0);
        }
      }
    }
  }
}

function clearField() {
  _start_window_js__WEBPACK_IMPORTED_MODULE_2__.gameSection.innerHTML = '';
}

/***/ }),

/***/ "./src/js/sounds.js":
/*!**************************!*\
  !*** ./src/js/sounds.js ***!
  \**************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   toggleSounds: () => (/* binding */ toggleSounds)
/* harmony export */ });
function toggleSounds(element, ...item) {
  item.forEach((el) => {
    if (el.muted) {
      el.muted = false;
    } else {
      el.muted = true;
    }
  });
  if (element.textContent.includes('OFF'))
    element.textContent = element.textContent.replace('OFF', 'ON');
  else element.textContent = element.textContent.replace('ON', 'OFF');
}


/***/ }),

/***/ "./src/js/start-window.js":
/*!********************************!*\
  !*** ./src/js/start-window.js ***!
  \********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ShowStartWin: () => (/* binding */ ShowStartWin),
/* harmony export */   darkThemeRadio: () => (/* binding */ darkThemeRadio),
/* harmony export */   gameSection: () => (/* binding */ gameSection),
/* harmony export */   lightThemeRadio: () => (/* binding */ lightThemeRadio),
/* harmony export */   messageToSave: () => (/* binding */ messageToSave),
/* harmony export */   modalRezult: () => (/* binding */ modalRezult),
/* harmony export */   modalSave: () => (/* binding */ modalSave),
/* harmony export */   modalWin: () => (/* binding */ modalWin),
/* harmony export */   puzlSelect: () => (/* binding */ puzlSelect),
/* harmony export */   randomGame: () => (/* binding */ randomGame),
/* harmony export */   recordsBtn: () => (/* binding */ recordsBtn),
/* harmony export */   recordsWrap: () => (/* binding */ recordsWrap),
/* harmony export */   resetBtn: () => (/* binding */ resetBtn),
/* harmony export */   resumeBtn: () => (/* binding */ resumeBtn),
/* harmony export */   rezultScore: () => (/* binding */ rezultScore),
/* harmony export */   saveBtn: () => (/* binding */ saveBtn),
/* harmony export */   solutionGame: () => (/* binding */ solutionGame),
/* harmony export */   soundCellBtn: () => (/* binding */ soundCellBtn),
/* harmony export */   soundWinBtn: () => (/* binding */ soundWinBtn),
/* harmony export */   timeField: () => (/* binding */ timeField)
/* harmony export */ });
/* harmony import */ var _css_start_window_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/start-window.css */ "./src/css/start-window.css");
/* harmony import */ var _nonos_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../nonos.json */ "./src/nonos.json");
/* harmony import */ var _add_level_options_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-level-options.js */ "./src/js/add-level-options.js");




const puzlSelect = document.createElement('select');
const gameSection = document.createElement('section');
const resetBtn = document.createElement('button');
const timeField = document.createElement('div');
const modalWin = document.createElement('dialog');
const rezultScore = document.createElement('p');
const soundCellBtn = document.createElement('button');
const soundWinBtn = document.createElement('button');
const saveBtn = document.createElement('button');
const modalSave = document.createElement('dialog');
const resumeBtn = document.createElement('button');
const messageToSave = document.createElement('h2');
const recordsBtn = document.createElement('button');
const randomGame = document.createElement('button');
const solutionGame = document.createElement('button');
const recordsWrap = document.createElement('div');
const modalRezult = document.createElement('dialog');
const lightThemeRadio = document.createElement('input');
const darkThemeRadio = document.createElement('input');

function ShowStartWin() {
  const wrap = document.createElement('div');
  wrap.classList.add('wrapper');
  document.body.prepend(wrap);

  modalWin.classList.add('modal');
  document.body.append(modalWin);

  const message = document.createElement('h2');
  message.classList.add('heading-msg');
  message.textContent = 'Great! You have solved the nonogram!';
  rezultScore.classList.add('rezult-score');
  rezultScore.textContent = 'your time:';
  const recordsTitle = document.createElement('h3');
  recordsTitle.classList.add('records-title');
  recordsTitle.textContent = 'Records';
  recordsWrap.classList.add('records-wrap');
  recordsWrap.textContent = 'no records yet';
  modalWin.append(message);
  modalWin.append(rezultScore);
  modalWin.append(recordsTitle);
  modalWin.append(recordsWrap);

  modalSave.classList.add('modal-save');
  document.body.append(modalSave);
  messageToSave.classList.add('heading-msg');
  modalSave.append(messageToSave);

  modalRezult.classList.add('modal-rezult');
  document.body.append(modalRezult);

  const header = document.createElement('header');
  header.classList.add('header');
  wrap.append(header);

  const h1 = document.createElement('h1');
  h1.textContent = 'Nonograms online';
  h1.classList.add('heading');
  header.append(h1);

  lightThemeRadio.setAttribute('type', 'radio');
  lightThemeRadio.setAttribute('id', 'light');
  lightThemeRadio.setAttribute('name', 'theme');
  lightThemeRadio.classList.add('radio-btn-theme');
  lightThemeRadio.setAttribute('checked', 'true');
  const lightThemeLabel = document.createElement('label');
  lightThemeLabel.setAttribute('for', 'light');
  lightThemeLabel.classList.add('label-theme');
  lightThemeLabel.textContent = 'light theme';
  header.append(lightThemeLabel);
  header.append(lightThemeRadio);

  darkThemeRadio.setAttribute('type', 'radio');
  darkThemeRadio.setAttribute('id', 'dark');
  darkThemeRadio.setAttribute('name', 'theme');
  darkThemeRadio.classList.add('radio-btn-theme');
  const darkThemeLabel = document.createElement('label');
  darkThemeLabel.setAttribute('for', 'light');
  darkThemeLabel.classList.add('label-theme');
  darkThemeLabel.textContent = 'dark theme';
  header.append(darkThemeLabel);
  header.append(darkThemeRadio);

  document.body.classList.add('light-theme');

  const main = document.createElement('main');
  main.classList.add('main');
  wrap.append(main);

  const footer = document.createElement('footer');
  footer.classList.add('footer');
  wrap.append(footer);
  const menuSection = document.createElement('section');
  menuSection.setAttribute('class', 'menu section');
  main.append(menuSection);

  const menuItems = document.createElement('div');
  menuItems.classList.add('menu-items');

  puzlSelect.classList.add('puzl-select');
  const puzlText = document.createElement('option');
  puzlText.classList.add('puzl-name');
  puzlText.setAttribute('value', `-1`);
  puzlText.textContent = 'Select puzzle';
  puzlSelect.append(puzlText);

  const levelsNamesArr = [
    '1 level (5x5)',
    '2 level (10x10)',
    '3 level (15x15)',
  ];

  const levelsArr = [];
  levelsNamesArr.forEach((name) =>
    levelsArr.push((0,_add_level_options_js__WEBPACK_IMPORTED_MODULE_2__.addLevelOptions)(name, puzlSelect))
  );

  for (let i = 0; i < _nonos_json__WEBPACK_IMPORTED_MODULE_1__.length; i += 1) {
    let puzl = document.createElement('option');
    puzl.setAttribute('value', `${i}`);
    puzl.classList.add('puzl-name');
    puzl.textContent = _nonos_json__WEBPACK_IMPORTED_MODULE_1__[i].name;
    if (_nonos_json__WEBPACK_IMPORTED_MODULE_1__[i].level === '5x5') levelsArr[0].append(puzl);
    else if (_nonos_json__WEBPACK_IMPORTED_MODULE_1__[i].level === '10x10') levelsArr[1].append(puzl);
    else levelsArr[2].append(puzl);
  }
  menuItems.append(puzlSelect);

  timeField.classList.add('time-field');
  timeField.textContent = '00:00';
  menuItems.append(timeField);

  resetBtn.setAttribute('class', 'reset-btn btn');
  resetBtn.textContent = 'Reset game';
  menuItems.append(resetBtn);

  menuSection.append(menuItems);

  const soundBtnsWrap = document.createElement('div');
  soundBtnsWrap.classList.add('sound-btns-wrap');
  menuSection.append(soundBtnsWrap);

  soundCellBtn.setAttribute('class', 'sound-cell-btn btn');
  soundCellBtn.textContent = 'Cell sound: ON';
  soundBtnsWrap.append(soundCellBtn);

  soundWinBtn.setAttribute('class', 'sound-win-btn btn');
  soundWinBtn.textContent = 'Win sound: ON';
  soundBtnsWrap.append(soundWinBtn);

  const difBtnsWrap = document.createElement('div');
  difBtnsWrap.classList.add('dif-btns-wrap');
  menuSection.append(difBtnsWrap);

  recordsBtn.setAttribute('class', 'records-btn btn');
  recordsBtn.textContent = 'Records';
  difBtnsWrap.append(recordsBtn);

  randomGame.setAttribute('class', 'random-game btn');
  randomGame.textContent = 'Random game';
  difBtnsWrap.append(randomGame);

  solutionGame.setAttribute('class', 'solution-game btn');
  solutionGame.textContent = 'Solution';
  difBtnsWrap.append(solutionGame);

  gameSection.setAttribute('class', 'game default section');
  main.append(gameSection);

  const saveSection = document.createElement('section');
  saveSection.setAttribute('class', 'save section');
  main.append(saveSection);

  saveBtn.setAttribute('class', 'save-btn btn');
  saveBtn.textContent = 'Save game';
  saveSection.append(saveBtn);

  resumeBtn.setAttribute('class', 'resume-btn btn');
  resumeBtn.textContent = 'Resume prev game';
  saveSection.append(resumeBtn);
}


/***/ }),

/***/ "./src/nonos.json":
/*!************************!*\
  !*** ./src/nonos.json ***!
  \************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('[{"name":"firstPic","level":"5x5","size":30,"topclues":[[0,0,0,2,1],[3,2,3,1,1]],"leftclues":[[0,0,0,0,1],[2,1,3,3,3]],"field":[[0,0,0,1,1],[0,0,0,1,0],[1,1,1,0,0],[1,1,1,0,0],[1,0,1,1,1]]},{"name":"secondPic","level":"5x5","size":30,"topclues":[[2,0,0,0,0],[2,4,1,2,2]],"leftclues":[[1,2,0,0,0],[1,2,3,2,2]],"field":[[1,0,0,0,1],[1,1,0,1,1],[0,1,1,1,0],[1,1,0,0,0],[1,1,0,0,0]]},{"name":"thirdPic","level":"5x5","size":30,"topclues":[[0,0,1,0,0],[1,5,1,3,1]],"leftclues":[[0,1,0,0,2],[3,1,3,1,1]],"field":[[0,1,1,1,0],[0,1,0,1,0],[0,1,1,1,0],[0,1,0,0,0],[1,1,0,0,1]]},{"name":"five","level":"5x5","size":30,"topclues":[[0,1,1,1,0],[3,1,1,1,1],[1,1,1,1,3]],"leftclues":[[5,1,5,1,5]],"field":[[1,1,1,1,1],[1,0,0,0,0],[1,1,1,1,1],[0,0,0,0,1],[1,1,1,1,1]]},{"name":"eighty","level":"5x5","size":30,"topclues":[[0,1,0,0,0],[0,1,0,1,0],[5,1,5,1,5]],"leftclues":[[0,1,0,1,0],[0,1,3,1,0],[5,1,1,1,5]],"field":[[1,1,1,1,1],[1,0,1,0,1],[1,1,1,0,1],[1,0,1,0,1],[1,1,1,1,1]]},{"name":"ship","level":"10x10","size":25,"topclues":[[0,0,1,1,0,0,0,0,0,0],[0,3,2,1,0,6,4,2,0,0],[1,2,2,2,10,2,2,2,2,1]],"leftclues":[[0,0,1,1,1,2,0,0,0,0],[1,3,2,3,3,4,6,1,10,8]],"field":[[0,0,0,0,1,0,0,0,0,0],[0,0,0,1,1,1,0,0,0,0],[0,0,1,0,1,1,0,0,0,0],[0,1,0,0,1,1,1,0,0,0],[0,1,0,0,1,1,1,0,0,0],[0,1,1,0,1,1,1,1,0,0],[0,0,1,1,1,1,1,1,0,0],[0,0,0,0,1,0,0,0,0,0],[1,1,1,1,1,1,1,1,1,1],[0,1,1,1,1,1,1,1,1,0]]},{"name":"full_heart","level":"10x10","size":25,"topclues":[[4,6,7,7,7,7,7,6,4,0]],"leftclues":[[2,4,0,0,0,0,0,0,0,0],[2,4,9,9,9,7,5,3,1,0]],"field":[[0,1,1,0,0,0,1,1,0,0],[1,1,1,1,0,1,1,1,1,0],[1,1,1,1,1,1,1,1,1,0],[1,1,1,1,1,1,1,1,1,0],[1,1,1,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,1,0,0],[0,0,1,1,1,1,1,0,0,0],[0,0,0,1,1,1,0,0,0,0],[0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0]]},{"name":"empty_heart","level":"10x10","size":25,"topclues":[[1,1,1,2,3,3,2,1,1,2],[5,4,3,2,1,1,2,3,4,5]],"leftclues":[[0,1,0,0,0,0,0,0,0,0],[0,4,0,0,0,1,2,3,4,0],[9,1,2,0,0,1,2,3,4,10]],"field":[[0,1,1,1,1,1,1,1,1,1],[1,0,0,1,1,1,1,0,0,1],[0,0,0,0,1,1,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0,1],[1,1,0,0,0,0,0,0,1,1],[1,1,1,0,0,0,0,1,1,1],[1,1,1,1,0,0,1,1,1,1],[1,1,1,1,1,1,1,1,1,1]]},{"name":"smile","level":"10x10","size":25,"topclues":[[0,0,1,1,1,1,1,1,0,0],[0,0,1,1,1,1,1,1,0,0],[0,1,1,1,1,1,1,1,1,0],[6,1,1,1,1,1,1,1,1,6]],"leftclues":[[0,0,0,1,0,0,1,0,0,0],[0,0,0,2,0,1,1,1,0,0],[0,1,1,2,1,2,1,4,1,0],[6,1,1,1,1,1,1,1,1,6]],"field":[[0,0,1,1,1,1,1,1,0,0],[0,1,0,0,0,0,0,0,1,0],[1,0,0,0,0,0,0,0,0,1],[1,0,1,1,0,0,1,1,0,1],[1,0,0,0,0,0,0,0,0,1],[1,0,0,0,1,1,0,0,0,1],[1,0,1,0,0,0,0,1,0,1],[1,0,0,1,1,1,1,0,0,1],[0,1,0,0,0,0,0,0,1,0],[0,0,1,1,1,1,1,1,0,0]]},{"name":"face","level":"10x10","size":25,"topclues":[[0,0,0,2,0,1,0,0,1,0],[0,0,2,1,2,1,1,0,1,2],[0,5,3,1,4,1,2,0,1,2],[10,4,2,1,1,1,1,3,1,2]],"leftclues":[[0,0,0,0,3,0,0,0,0,0],[0,0,0,0,1,1,0,0,3,0],[7,5,0,0,2,3,2,0,3,4],[2,1,2,10,1,2,2,2,1,2]],"field":[[1,1,1,1,1,1,1,0,1,1],[1,1,1,1,1,0,0,0,0,1],[1,1,0,0,0,0,0,0,0,0],[1,1,1,1,1,1,1,1,1,1],[1,1,1,0,1,0,1,1,0,1],[1,0,1,1,1,0,0,1,1,0],[1,1,0,0,1,1,0,0,0,0],[1,1,0,0,0,0,0,0,0,0],[1,1,1,0,1,1,1,0,0,1],[1,1,1,1,0,0,0,0,1,1]]},{"name":"peak","level":"15x15","size":20,"topclues":[[0,0,0,0,0,10,10,0,10,10,0,0,0,0,0],[4,7,8,9,10,1,2,15,2,1,10,9,8,7,4]],"leftclues":[[0,0,0,0,0,0,0,0,0,0,0,6,4,0,0],[0,0,0,0,0,0,0,0,0,0,0,1,1,0,0],[1,3,5,7,9,11,13,13,15,15,15,6,4,3,5]],"field":[[0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,1,1,0,0,0,0,0,0],[0,0,0,0,0,1,1,1,1,1,0,0,0,0,0],[0,0,0,0,1,1,1,1,1,1,1,0,0,0,0],[0,0,0,1,1,1,1,1,1,1,1,1,0,0,0],[0,0,1,1,1,1,1,1,1,1,1,1,1,0,0],[0,1,1,1,1,1,1,1,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,1,1,1,1,1,1,1,0],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,0,1,0,1,1,1,1,1,1],[0,1,1,1,1,0,0,1,0,0,1,1,1,1,0],[0,0,0,0,0,0,1,1,1,0,0,0,0,0,0],[0,0,0,0,0,1,1,1,1,1,0,0,0,0,0]]},{"name":"sun","level":"15x15","size":20,"topclues":[[0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],[0,0,2,0,0,0,4,1,4,0,0,0,2,0,0],[0,0,4,3,0,0,1,1,1,0,0,3,4,0,0],[0,7,4,7,5,4,1,1,1,4,5,7,4,7,0],[15,7,2,3,5,4,4,1,4,4,5,3,2,7,15]],"leftclues":[[0,0,2,0,0,0,4,1,0,0,0,0,2,0,0],[0,0,4,3,0,0,1,1,0,4,0,3,4,0,0],[0,7,4,7,5,4,1,1,4,3,5,7,4,7,0],[15,7,2,3,5,4,4,1,4,4,5,3,2,7,15]],"field":[[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,0,1,1,1,1,1,1,1],[1,1,0,1,1,1,1,0,1,1,1,1,0,1,1],[1,1,1,0,1,1,1,1,1,1,1,0,1,1,1],[1,1,1,1,1,0,0,0,0,0,1,1,1,1,1],[1,1,1,1,0,0,0,0,0,0,0,1,1,1,1],[1,1,1,1,0,0,1,0,1,0,0,1,1,1,1],[1,0,0,1,0,0,0,0,0,0,0,1,0,0,1],[1,1,1,1,0,0,0,0,0,0,0,1,1,1,1],[1,1,1,1,0,0,1,1,1,0,0,1,1,1,1],[1,1,1,1,1,0,0,0,0,0,1,1,1,1,1],[1,1,1,0,1,1,1,1,1,1,1,0,1,1,1],[1,1,0,1,1,1,1,0,1,1,1,1,0,1,1],[1,1,1,1,1,1,1,0,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]]},{"name":"house","level":"15x15","size":20,"topclues":[[0,0,0,0,0,0,0,0,0,0,0,1,0,0,0],[0,0,0,0,0,1,0,0,0,0,4,1,1,0,0],[0,0,0,4,7,4,0,1,2,3,1,2,1,0,1],[1,0,3,2,2,2,4,2,1,2,2,2,1,0,1],[1,8,1,1,1,1,1,4,4,1,1,1,1,8,1]],"leftclues":[[0,0,0,0,0,0,0,0,0,0,0,1,0,0,0],[0,0,0,0,0,0,5,7,0,0,1,3,0,0,0],[0,0,0,0,0,0,1,1,0,0,3,2,1,1,0],[0,0,0,2,1,0,1,1,0,1,2,2,2,2,0],[1,2,1,2,2,9,1,1,15,1,1,1,1,1,15]],"field":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[0,0,0,0,0,0,0,0,0,0,0,1,1,0,0],[0,0,0,0,1,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,1,1,0,0,0,1,1,0,0,0,0],[0,0,0,0,1,0,0,0,0,1,1,0,0,0,0],[0,0,0,1,1,1,1,1,1,1,1,1,0,0,0],[0,0,1,1,1,1,1,0,1,0,1,0,1,0,0],[0,1,1,1,1,1,1,1,0,1,0,1,0,1,0],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[0,1,0,0,0,0,0,0,0,0,0,0,0,1,0],[0,1,0,1,1,1,0,0,0,0,1,1,0,1,0],[0,1,0,1,1,1,0,1,1,0,1,1,0,1,0],[0,1,0,0,0,0,0,1,1,0,0,0,0,1,0],[0,1,0,0,0,0,0,1,1,0,0,0,0,1,0],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]]},{"name":"grape","level":"15x15","size":20,"topclues":[[0,0,0,2,4,0,2,0,0,0,1,0,0,1,0],[0,2,0,4,2,5,2,0,1,1,4,2,1,4,0],[2,4,8,2,2,5,4,12,10,11,2,4,5,2,4]],"leftclues":[[0,0,0,2,0,0,0,0,0,0,0,0,0,0,0],[0,1,1,1,0,0,2,0,0,0,2,0,0,4,0],[3,1,1,1,7,7,4,2,4,5,5,2,0,2,0],[3,1,1,2,1,1,2,8,8,7,2,7,11,2,2]],"field":[[0,0,0,0,0,0,0,0,1,1,1,0,1,1,1],[0,0,0,0,0,0,0,1,0,0,0,1,0,0,1],[0,0,0,0,0,0,0,1,0,0,0,1,0,0,1],[0,0,0,0,1,1,0,1,0,1,0,0,0,1,1],[0,0,0,1,1,1,1,1,1,1,0,0,0,1,0],[0,0,0,1,1,1,1,1,1,1,0,0,0,1,0],[0,0,0,0,1,1,0,1,1,1,1,0,1,1,0],[0,0,1,1,0,1,1,1,1,1,1,1,1,0,0],[0,1,1,1,1,0,1,1,1,1,1,1,1,1,0],[0,1,1,1,1,1,0,1,1,1,1,1,1,1,0],[0,0,1,1,0,1,1,1,1,1,0,1,1,0,0],[0,1,1,0,1,1,1,1,1,1,1,0,0,0,0],[1,1,1,1,1,1,1,1,1,1,1,0,0,0,0],[1,1,1,1,0,1,1,0,1,1,0,0,0,0,0],[0,1,1,0,0,0,0,0,0,0,0,0,0,0,0]]},{"name":"elephant","level":"15x15","size":20,"topclues":[[0,0,3,0,0,0,1,0,0,0,0,0,0,0,0],[0,0,3,7,0,0,5,2,0,0,1,1,1,1,0],[1,11,1,2,7,15,7,8,14,9,6,9,9,10,12]],"leftclues":[[0,0,0,0,1,0,0,0,0,0,0,1,0,0,0],[0,0,0,6,4,6,0,0,0,0,0,1,3,0,0],[0,4,6,2,2,3,6,6,1,1,1,4,4,4,4],[3,2,6,1,1,2,7,8,10,10,10,4,4,4,4]],"field":[[0,0,0,0,0,1,1,1,0,0,0,0,0,0,0],[0,0,1,1,1,1,0,1,1,0,0,0,0,0,0],[0,1,1,1,1,1,1,0,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,0,1,1,0,0,0,0,1],[0,1,0,1,1,1,1,0,1,1,0,0,0,0,1],[0,1,1,1,1,1,1,0,1,1,1,0,0,1,1],[0,1,1,1,1,1,1,0,1,1,1,1,1,1,1],[1,1,1,1,1,1,0,1,1,1,1,1,1,1,1],[0,1,0,0,0,1,1,1,1,1,1,1,1,1,1],[0,1,0,0,0,1,1,1,1,1,1,1,1,1,1],[0,1,0,0,0,1,1,1,1,1,1,1,1,1,1],[0,1,0,1,0,1,1,1,1,0,0,1,1,1,1],[0,1,1,1,0,1,1,1,1,0,0,1,1,1,1],[0,0,0,0,0,1,1,1,1,0,0,1,1,1,1],[0,0,0,0,0,1,1,1,1,0,0,1,1,1,1]]}]');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var modern_normalize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! modern-normalize */ "./node_modules/modern-normalize/modern-normalize.css");
/* harmony import */ var _js_start_window_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/start-window.js */ "./src/js/start-window.js");
/* harmony import */ var _js_draw_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/draw.js */ "./src/js/draw.js");
/* harmony import */ var _nonos_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonos.json */ "./src/nonos.json");
/* harmony import */ var _js_sounds_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/sounds.js */ "./src/js/sounds.js");
/* harmony import */ var _js_convert_time_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./js/convert-time.js */ "./src/js/convert-time.js");







let currentPuzl = -1;
let fieldArr = [];
let startTime = 0;
let currentTime = 0;
let restoredTime = 0;
let timerId;
let touchStartTime = 0;

const blackEvt = new Audio('./sounds/black.ogg');
const emptyEvt = new Audio('./sounds/empty.ogg');
const crossEvt = new Audio('./sounds/cross.ogg');
const winEvt = new Audio('./sounds/win.ogg');

(0,_js_start_window_js__WEBPACK_IMPORTED_MODULE_1__.ShowStartWin)();
setTheme();
_js_start_window_js__WEBPACK_IMPORTED_MODULE_1__.puzlSelect.addEventListener('change', playGame);
_js_start_window_js__WEBPACK_IMPORTED_MODULE_1__.modalWin.addEventListener('click', () => {
  _js_start_window_js__WEBPACK_IMPORTED_MODULE_1__.modalWin.removeAttribute('open');
  document.body.style.overflow = '';
});
_js_start_window_js__WEBPACK_IMPORTED_MODULE_1__.resetBtn.addEventListener('click', rezetGame);
_js_start_window_js__WEBPACK_IMPORTED_MODULE_1__.soundCellBtn.addEventListener('click', (event) => {
  (0,_js_sounds_js__WEBPACK_IMPORTED_MODULE_4__.toggleSounds)(event.target, blackEvt, emptyEvt, crossEvt);
});
_js_start_window_js__WEBPACK_IMPORTED_MODULE_1__.soundWinBtn.addEventListener('click', (event) => {
  (0,_js_sounds_js__WEBPACK_IMPORTED_MODULE_4__.toggleSounds)(event.target, winEvt);
});
_js_start_window_js__WEBPACK_IMPORTED_MODULE_1__.saveBtn.addEventListener('click', saveCurrentGame);
_js_start_window_js__WEBPACK_IMPORTED_MODULE_1__.resumeBtn.addEventListener('click', restoreLastGame);
_js_start_window_js__WEBPACK_IMPORTED_MODULE_1__.randomGame.addEventListener('click', playRandomGame);
_js_start_window_js__WEBPACK_IMPORTED_MODULE_1__.solutionGame.addEventListener('click', showSolution);
_js_start_window_js__WEBPACK_IMPORTED_MODULE_1__.recordsBtn.addEventListener('click', showRecords);
document
  .getElementsByName('theme')
  .forEach((tag) => tag.addEventListener('change', changeTheme));

function playGame() {
  if (timerId) clearTimer(timerId);
  getPuzl();
  drawField(currentPuzl);
}

function getPuzl() {
  [...document.querySelectorAll('.puzl-name')].forEach((element) => {
    if (element.selected) currentPuzl = parseInt(element.value);
  });
}

function drawField() {
  (0,_js_draw_js__WEBPACK_IMPORTED_MODULE_2__.clearField)();
  if (currentPuzl < 0) {
    _js_start_window_js__WEBPACK_IMPORTED_MODULE_1__.puzlSelect.style.border = '2px solid #FF0000';
    _js_start_window_js__WEBPACK_IMPORTED_MODULE_1__.puzlSelect.blur();
  } else {
    _js_start_window_js__WEBPACK_IMPORTED_MODULE_1__.timeField.textContent = '00:00';
    _js_start_window_js__WEBPACK_IMPORTED_MODULE_1__.puzlSelect.style.border = '1px solid #000000';
    clearTimer(timerId);
    restoredTime = 0;
    (0,_js_draw_js__WEBPACK_IMPORTED_MODULE_2__.draw)(currentPuzl, fieldArr);
    document
      .querySelectorAll('.cell.active')
      .forEach((cell) => addCellEvents(cell));
  }
  setTheme();
}

function toggleBlack() {
  if (event.target.classList.contains('black')) {
    emptyEvt.play();
    event.target.classList.toggle('black');
    fieldArr[event.target.i][event.target.j] = 0;
  } else {
    if (event.target.classList.contains('cross')) {
      event.target.classList.toggle('cross');
    }
    blackEvt.play();
    event.target.classList.toggle('black');
    fieldArr[event.target.i][event.target.j] = 1;
  }
  if (checkPuzl(currentPuzl)) showRezult();
}

function toggleCross() {
  if (event.target.classList.contains('black')) {
    event.target.classList.toggle('black');
    fieldArr[event.target.i][event.target.j] = 0;
  }
  if (event.target.classList.contains('cross')) emptyEvt.play();
  else crossEvt.play();
  event.target.classList.toggle('cross');
}

function addCellEvents(item) {
  item.addEventListener('click', toggleBlack);
  item.addEventListener('contextmenu', toggleCross);
  item.addEventListener('touchstart', StartTouchTime);
  item.addEventListener('touchend', EndTouchTime);
  item.addEventListener('click', getStartTime);
  item.addEventListener('contextmenu', getStartTime);
}

function StartTouchTime() {
  touchStartTime = Date.now();
}

function EndTouchTime(event) {
  const durationTime = Date.now() - touchStartTime;
  if (durationTime > 500) {
    const contextMenuEvt = new Event('contextmenu', {
      bubbles: true,
      cancelable: true,
    });
    event.target.dispatchEvent(contextMenuEvt);
  }
  touchStartTime = 0;
}

function removeCellEvents(item) {
  item.removeEventListener('click', toggleBlack);
  item.removeEventListener('contextmenu', toggleCross);
  item.removeEventListener('touchstart', StartTouchTime);
  item.removeEventListener('touchend', EndTouchTime);
}

function checkPuzl(index) {
  let ans = true;
  for (let i = 0; i < _nonos_json__WEBPACK_IMPORTED_MODULE_3__[index].field.length; i += 1) {
    for (let j = 0; j < _nonos_json__WEBPACK_IMPORTED_MODULE_3__[index].field.length; j += 1) {
      if (fieldArr[i][j] !== _nonos_json__WEBPACK_IMPORTED_MODULE_3__[index].field[i][j]) {
        ans = false;
      }
    }
  }
  return ans;
}

function showRezult() {
  winEvt.play();
  saveRezult();
  if (localStorage.getItem('records')) viewRecords(_js_start_window_js__WEBPACK_IMPORTED_MODULE_1__.recordsWrap);
  let answer = {
    minute: +`${_js_start_window_js__WEBPACK_IMPORTED_MODULE_1__.timeField.textContent.slice(0, 2)}`,
    seconds: +`${_js_start_window_js__WEBPACK_IMPORTED_MODULE_1__.timeField.textContent.slice(length - 2)}`,
  };
  _js_start_window_js__WEBPACK_IMPORTED_MODULE_1__.rezultScore.textContent = `your time: ${answer.minute}:${answer.seconds}`;
  _js_start_window_js__WEBPACK_IMPORTED_MODULE_1__.modalWin.setAttribute('open', 'true');
  document.body.style.overflow = 'hidden';
  clearTimer(timerId);
  Array.from(document.querySelectorAll('.active')).forEach((element) => {
    removeCellEvents(element);
  });
}

function rezetGame() {
  _js_start_window_js__WEBPACK_IMPORTED_MODULE_1__.gameSection.innerHTML = '';
  drawField(currentPuzl);
}

function getStartTime() {
  startTime = new Date().getTime();
  document.querySelectorAll('.active').forEach((cell) => {
    cell.removeEventListener('click', getStartTime);
    cell.removeEventListener('contextmenu', getStartTime);
  });
  timerId = setInterval(getCurrentTime, 1000);
}

function clearTimer(id) {
  clearInterval(id);
}

function getCurrentTime() {
  let now = new Date().getTime();
  currentTime = now - startTime + restoredTime;
  _js_start_window_js__WEBPACK_IMPORTED_MODULE_1__.timeField.textContent = (0,_js_convert_time_js__WEBPACK_IMPORTED_MODULE_5__.convertTime)(currentTime);
}

function saveCurrentGame() {
  if (currentPuzl === -1) {
    _js_start_window_js__WEBPACK_IMPORTED_MODULE_1__.messageToSave.textContent = 'There is no game to save';
    _js_start_window_js__WEBPACK_IMPORTED_MODULE_1__.modalSave.setAttribute('open', 'true');
    setTimeout(() => _js_start_window_js__WEBPACK_IMPORTED_MODULE_1__.modalSave.removeAttribute('open'), 1200);
  } else {
    const puzl = currentPuzl;
    const time = currentTime;
    const currenTArr = [...document.querySelectorAll('.active')];
    currenTArr.forEach((element, index) => {
      currenTArr[index] = [...element.classList];
    });
    clearTimer(timerId);
    localStorage.setItem('lastGame', JSON.stringify([puzl, time, currenTArr]));
    [...document.querySelectorAll('.active')].forEach((element) => {
      removeCellEvents(element);
    });
  }
}

function restoreLastGame() {
  if (localStorage.getItem('lastGame')) {
    let restoredArr = JSON.parse(localStorage.getItem('lastGame'));
    currentPuzl = restoredArr[0];
    restoredTime = restoredArr[1];
    if (timerId) clearTimer(timerId);
    (0,_js_draw_js__WEBPACK_IMPORTED_MODULE_2__.clearField)();
    _js_start_window_js__WEBPACK_IMPORTED_MODULE_1__.puzlSelect.querySelectorAll('.puzl-name')[currentPuzl + 1].selected = true;
    (0,_js_draw_js__WEBPACK_IMPORTED_MODULE_2__.draw)(currentPuzl, fieldArr);
    _js_start_window_js__WEBPACK_IMPORTED_MODULE_1__.timeField.textContent = (0,_js_convert_time_js__WEBPACK_IMPORTED_MODULE_5__.convertTime)(restoredTime);
    let activeCells = document.querySelectorAll('.active');
    activeCells.forEach((element, index) => {
      element.classList.add(...restoredArr[2][index]);
      if (element.classList.contains('black')) {
        fieldArr[Math.trunc(index / _nonos_json__WEBPACK_IMPORTED_MODULE_3__[currentPuzl].field.length)][
          index % _nonos_json__WEBPACK_IMPORTED_MODULE_3__[currentPuzl].field.length
        ] = 1;
      }
      addCellEvents(element);
    });
    setTheme();
    localStorage.removeItem('lastGame');
  } else {
    _js_start_window_js__WEBPACK_IMPORTED_MODULE_1__.messageToSave.textContent = 'No game to restore!';
    _js_start_window_js__WEBPACK_IMPORTED_MODULE_1__.modalSave.setAttribute('open', 'true');
    setTimeout(() => _js_start_window_js__WEBPACK_IMPORTED_MODULE_1__.modalSave.removeAttribute('open'), 1200);
  }
}

function playRandomGame() {
  if (timerId) clearTimer(timerId);
  currentPuzl = Math.floor(Math.random() * 15);
  _js_start_window_js__WEBPACK_IMPORTED_MODULE_1__.puzlSelect.querySelectorAll('.puzl-name')[currentPuzl + 1].selected = true;
  drawField(currentPuzl);
}

function showSolution() {
  if (currentPuzl === -1) {
    _js_start_window_js__WEBPACK_IMPORTED_MODULE_1__.messageToSave.textContent = 'There is no puzl to solution';
    _js_start_window_js__WEBPACK_IMPORTED_MODULE_1__.modalSave.setAttribute('open', 'true');
    setTimeout(() => _js_start_window_js__WEBPACK_IMPORTED_MODULE_1__.modalSave.removeAttribute('open'), 1200);
  } else {
    if (timerId) clearTimer(timerId);
    const activeCells = document.querySelectorAll('.active');
    const solutionCells = _nonos_json__WEBPACK_IMPORTED_MODULE_3__[currentPuzl].field.flat();
    currentTime = 0;
    _js_start_window_js__WEBPACK_IMPORTED_MODULE_1__.timeField.textContent = '--:--';
    solutionCells.forEach((cell, index) => {
      if (cell === 0) activeCells[index].setAttribute('class', 'cell active');
      else activeCells[index].setAttribute('class', 'cell active black');
      removeCellEvents(activeCells[index]);
    });
  }
  setTheme();
}

function saveRezult() {
  let rezultArr = [];
  if (localStorage.getItem('records'))
    rezultArr = JSON.parse(localStorage.getItem('records'));
  let rezult = [currentTime, _nonos_json__WEBPACK_IMPORTED_MODULE_3__[currentPuzl].name, _nonos_json__WEBPACK_IMPORTED_MODULE_3__[currentPuzl].level];
  rezultArr.push(rezult);
  rezultArr.sort((a, b) => a[0] - b[0]);
  if (rezultArr.length > 5) rezultArr.length = 5;
  localStorage.setItem('records', JSON.stringify(rezultArr));
}

function showRecords() {
  if (localStorage.getItem('records')) {
    viewRecords(_js_start_window_js__WEBPACK_IMPORTED_MODULE_1__.modalRezult);
    _js_start_window_js__WEBPACK_IMPORTED_MODULE_1__.modalRezult.setAttribute('open', 'true');
    setTimeout(() => _js_start_window_js__WEBPACK_IMPORTED_MODULE_1__.modalRezult.removeAttribute('open'), 2000);
  } else {
    _js_start_window_js__WEBPACK_IMPORTED_MODULE_1__.messageToSave.textContent = 'No records';
    _js_start_window_js__WEBPACK_IMPORTED_MODULE_1__.modalSave.setAttribute('open', 'true');
    setTimeout(() => _js_start_window_js__WEBPACK_IMPORTED_MODULE_1__.modalSave.removeAttribute('open'), 1200);
  }
}

function viewRecords(parentElem) {
  parentElem.textContent = '';
  let recordsArr = JSON.parse(localStorage.getItem('records'));
  parentElem.style.gridTemplateRows = `repeat(${recordsArr.length + 1}, 1fr)`;
  ['time', 'name', 'level'].concat(recordsArr.flat()).forEach((elem) => {
    const cell = document.createElement('div');
    if (typeof elem === 'number') cell.textContent = (0,_js_convert_time_js__WEBPACK_IMPORTED_MODULE_5__.convertTime)(elem);
    else cell.textContent = elem;
    parentElem.append(cell);
  });
}

function changeTheme() {
  if (document.body.classList.contains('light-theme')) {
    document.body.classList.add('dark-theme');
    document.body.classList.remove('light-theme');
    document.body.querySelectorAll('*').forEach((tag) => {
      tag.classList.add('dark-theme');
      tag.classList.remove('light-theme');
    });
  } else {
    document.body.classList.add('light-theme');
    document.body.classList.remove('dark-theme');
    document.body.querySelectorAll('*').forEach((tag) => {
      tag.classList.add('light-theme');
      tag.classList.remove('dark-theme');
    });
  }
}

function setTheme() {
  if (document.body.classList.contains('light-theme')) {
    document.body.querySelectorAll('*').forEach((tag) => {
      tag.classList.add('light-theme');
      tag.classList.remove('dark-theme');
    });
  } else {
    document.body.querySelectorAll('*').forEach((tag) => {
      tag.classList.add('dark-theme');
      tag.classList.remove('light-theme');
    });
  }
}

})();

myApp = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7OztBQ0FPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ05PO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLG9DQUFvQyxHQUFHLG9DQUFvQztBQUNyRjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTitCO0FBQzJCO0FBQ1Y7O0FBRXpDO0FBQ1AsZUFBZSx3Q0FBSywyQkFBMkIsd0NBQUs7QUFDcEQsZUFBZSx3Q0FBSywwQkFBMEIsd0NBQUs7QUFDbkQsa0JBQWtCLHdDQUFLO0FBQ3ZCLEVBQUUseURBQVc7QUFDYixFQUFFLHlEQUFXLHVDQUF1QyxPQUFPLElBQUksd0NBQUssYUFBYTtBQUNqRixFQUFFLHlEQUFXLG9DQUFvQyxPQUFPLElBQUksd0NBQUssYUFBYTtBQUM5RSxrQkFBa0IsZUFBZTtBQUNqQztBQUNBO0FBQ0Esa0JBQWtCLFlBQVk7QUFDOUIsb0JBQW9CLFlBQVk7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSx5REFBVztBQUNqQjtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsd0NBQUs7QUFDbkIsa0NBQWtDLHdDQUFLLDhDQUE4QztBQUNyRjtBQUNBLFVBQVU7QUFDVixjQUFjLHdDQUFLO0FBQ25CLGtDQUFrQyx3Q0FBSywrQ0FBK0M7QUFDdEY7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQLEVBQUUseURBQVc7QUFDYjs7Ozs7Ozs7Ozs7Ozs7QUM1RE87QUFDUDtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1hpQztBQUN5QjtBQUNEOztBQUVsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1CQUFtQixzRUFBZTtBQUNsQzs7QUFFQSxrQkFBa0IsSUFBSSx3Q0FBSyxTQUFTO0FBQ3BDO0FBQ0Esa0NBQWtDLEVBQUU7QUFDcEM7QUFDQSx1QkFBdUIsd0NBQUs7QUFDNUIsUUFBUSx3Q0FBSztBQUNiLGFBQWEsd0NBQUs7QUFDbEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNB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YnBhY2s6Ly9teUFwcC8uL25vZGVfbW9kdWxlcy9tb2Rlcm4tbm9ybWFsaXplL21vZGVybi1ub3JtYWxpemUuY3NzP2Q3OGEiLCJ3ZWJwYWNrOi8vbXlBcHAvLi9zcmMvY3NzL2dhbWUtZmllbGQuY3NzPzM1NTciLCJ3ZWJwYWNrOi8vbXlBcHAvLi9zcmMvY3NzL3N0YXJ0LXdpbmRvdy5jc3M/YWYwZCIsIndlYnBhY2s6Ly9teUFwcC8uL3NyYy9qcy9hZGQtbGV2ZWwtb3B0aW9ucy5qcyIsIndlYnBhY2s6Ly9teUFwcC8uL3NyYy9qcy9jb252ZXJ0LXRpbWUuanMiLCJ3ZWJwYWNrOi8vbXlBcHAvLi9zcmMvanMvZHJhdy5qcyIsIndlYnBhY2s6Ly9teUFwcC8uL3NyYy9qcy9zb3VuZHMuanMiLCJ3ZWJwYWNrOi8vbXlBcHAvLi9zcmMvanMvc3RhcnQtd2luZG93LmpzIiwid2VicGFjazovL215QXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL215QXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9teUFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL215QXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbXlBcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiZXhwb3J0IGZ1bmN0aW9uIGFkZExldmVsT3B0aW9ucyAoc3RyLCBlbGVtZW50KSB7XG4gIGNvbnN0IHB1emxMZXZlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGdyb3VwJyk7XG4gIHB1emxMZXZlbC5jbGFzc0xpc3QuYWRkKCdwdXpsLWxldmVsJyk7IFxuICBwdXpsTGV2ZWwuc2V0QXR0cmlidXRlKCdsYWJlbCcsIHN0cik7XG4gIGVsZW1lbnQuYXBwZW5kKHB1emxMZXZlbCk7XG4gIHJldHVybiBwdXpsTGV2ZWw7XG59IiwiZXhwb3J0IGZ1bmN0aW9uIGNvbnZlcnRUaW1lKG1pbGxpc2Vjb25kcykge1xuICBsZXQgc2Vjb25kcyA9IE1hdGguZmxvb3IobWlsbGlzZWNvbmRzIC8gMTAwMCk7XG4gIGxldCBtaW51dGVzID0gTWF0aC5mbG9vcihzZWNvbmRzIC8gNjApO1xuICBzZWNvbmRzID0gc2Vjb25kcyAlIDYwO1xuICBtaW51dGVzID0gbWludXRlcyAlIDYwO1xucmV0dXJuIGAke21pbnV0ZXMudG9TdHJpbmcoKS5wYWRTdGFydCgyLCAnMCcpfToke3NlY29uZHMudG9TdHJpbmcoKS5wYWRTdGFydCgyLCAnMCcpfWA7XG59IiwiaW1wb3J0ICcuLi9jc3MvZ2FtZS1maWVsZC5jc3MnO1xuaW1wb3J0IG5vbm9zIGZyb20gJy4uL25vbm9zLmpzb24nIGFzc2VydCB7IHR5cGU6ICdqc29uJyB9O1xuaW1wb3J0IHsgZ2FtZVNlY3Rpb24gfSBmcm9tICcuL3N0YXJ0LXdpbmRvdy5qcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBkcmF3KGluZGV4LCBhcnIpIHtcbiAgbGV0IGZpZWxkVyA9IG5vbm9zW2luZGV4XS5sZWZ0Y2x1ZXMubGVuZ3RoICsgbm9ub3NbaW5kZXhdLmZpZWxkLmxlbmd0aDtcbiAgbGV0IGZpZWxkSCA9IG5vbm9zW2luZGV4XS50b3BjbHVlcy5sZW5ndGggKyBub25vc1tpbmRleF0uZmllbGQubGVuZ3RoO1xuICBsZXQgZmllbGRTaXplID0gbm9ub3NbaW5kZXhdLmZpZWxkLmxlbmd0aDtcbiAgZ2FtZVNlY3Rpb24uY2xhc3NMaXN0LnJlbW92ZSgnZGVmYXVsdCcpO1xuICBnYW1lU2VjdGlvbi5zdHlsZS5ncmlkVGVtcGxhdGVDb2x1bW5zID0gYHJlcGVhdCgke2ZpZWxkV30sICR7bm9ub3NbaW5kZXhdLnNpemV9cHgpYDtcbiAgZ2FtZVNlY3Rpb24uc3R5bGUuZ3JpZFRlbXBsYXRlUm93cyA9IGByZXBlYXQoJHtmaWVsZEh9LCAke25vbm9zW2luZGV4XS5zaXplfXB4KWA7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZmllbGRTaXplOyBpICs9IDEpIHtcbiAgICBhcnJbaV0gPSBuZXcgQXJyYXkoKTtcbiAgfVxuICBmb3IgKGxldCBpID0gMDsgaSA8IGZpZWxkSDsgaSArPSAxKSB7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBmaWVsZFc7IGogKz0gMSkge1xuICAgICAgbGV0IGNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnY2VsbCcpO1xuICAgICAgaWYgKGkgPT09IGZpZWxkSCAtIGZpZWxkU2l6ZSAtIDEpXG4gICAgICAgIGNlbGwuc3R5bGUuYm9yZGVyQm90dG9tID0gJzRweCBzb2xpZCBibGFjayc7XG4gICAgICBlbHNlIGlmICgoaSAtIChmaWVsZEggLSBmaWVsZFNpemUgLSAxKSkgJSA1ID09PSAwKVxuICAgICAgICBjZWxsLnN0eWxlLmJvcmRlckJvdHRvbSA9ICc0cHggc29saWQgZ3JheSc7XG4gICAgICBpZiAoXG4gICAgICAgIGogPT09IGZpZWxkVyAtIGZpZWxkU2l6ZSAtIDEpIGNlbGwuc3R5bGUuYm9yZGVyUmlnaHQgPSAnNHB4IHNvbGlkIGJsYWNrJztcbiAgICAgIGVsc2UgaWYgICgoaiAtIChmaWVsZFcgLSBmaWVsZFNpemUgLSAxKSkgJSA1ID09PSAwXG4gICAgICApIHtcbiAgICAgICAgY2VsbC5zdHlsZS5ib3JkZXJSaWdodCA9ICc0cHggc29saWQgZ3JheSc7XG4gICAgICB9XG4gICAgICBnYW1lU2VjdGlvbi5hcHBlbmQoY2VsbCk7XG4gICAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2NvbnRleHRtZW51JywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9KTtcbiAgICAgIGlmIChcbiAgICAgICAgKGkgPCBmaWVsZEggLSBmaWVsZFNpemUgJiYgaiA+PSBmaWVsZFcgLSBmaWVsZFNpemUpIHx8XG4gICAgICAgIChpID49IGZpZWxkSCAtIGZpZWxkU2l6ZSAmJiBqIDwgZmllbGRXIC0gZmllbGRTaXplKVxuICAgICAgKSB7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnY2x1ZXMnKTtcbiAgICAgICAgaWYgKGkgPCBmaWVsZEggLSBmaWVsZFNpemUpIHtcbiAgICAgICAgICBpZiAobm9ub3NbaW5kZXhdLnRvcGNsdWVzW2ldW2ogLSAoZmllbGRXIC0gZmllbGRTaXplKV0gIT09IDApIHtcbiAgICAgICAgICAgIGNlbGwudGV4dENvbnRlbnQgPSBgJHtub25vc1tpbmRleF0udG9wY2x1ZXNbaV1baiAtIChmaWVsZFcgLSBmaWVsZFNpemUpXX1gO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAobm9ub3NbaW5kZXhdLmxlZnRjbHVlc1tqXVtpIC0gKGZpZWxkSCAtIGZpZWxkU2l6ZSldICE9PSAwKSB7XG4gICAgICAgICAgICBjZWxsLnRleHRDb250ZW50ID0gYCR7bm9ub3NbaW5kZXhdLmxlZnRjbHVlc1tqXVtpIC0gKGZpZWxkSCAtIGZpZWxkU2l6ZSldfWA7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoIShpIDwgZmllbGRIIC0gZmllbGRTaXplICYmIGogPCBmaWVsZFcgLSBmaWVsZFNpemUpKSB7XG4gICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgICBjZWxsLmkgPSBpIC0gKGZpZWxkSCAtIGZpZWxkU2l6ZSk7XG4gICAgICAgICAgY2VsbC5qID0gaiAtIChmaWVsZFcgLSBmaWVsZFNpemUpO1xuICAgICAgICAgIGFycltpIC0gKGZpZWxkSCAtIGZpZWxkU2l6ZSldLnB1c2goMCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFyRmllbGQoKSB7XG4gIGdhbWVTZWN0aW9uLmlubmVySFRNTCA9ICcnO1xufSIsImV4cG9ydCBmdW5jdGlvbiB0b2dnbGVTb3VuZHMoZWxlbWVudCwgLi4uaXRlbSkge1xuICBpdGVtLmZvckVhY2goKGVsKSA9PiB7XG4gICAgaWYgKGVsLm11dGVkKSB7XG4gICAgICBlbC5tdXRlZCA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbC5tdXRlZCA9IHRydWU7XG4gICAgfVxuICB9KTtcbiAgaWYgKGVsZW1lbnQudGV4dENvbnRlbnQuaW5jbHVkZXMoJ09GRicpKVxuICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSBlbGVtZW50LnRleHRDb250ZW50LnJlcGxhY2UoJ09GRicsICdPTicpO1xuICBlbHNlIGVsZW1lbnQudGV4dENvbnRlbnQgPSBlbGVtZW50LnRleHRDb250ZW50LnJlcGxhY2UoJ09OJywgJ09GRicpO1xufVxuIiwiaW1wb3J0ICcuLi9jc3Mvc3RhcnQtd2luZG93LmNzcyc7XG5pbXBvcnQgbm9ub3MgZnJvbSAnLi4vbm9ub3MuanNvbicgYXNzZXJ0IHsgdHlwZTogJ2pzb24nIH07XG5pbXBvcnQgeyBhZGRMZXZlbE9wdGlvbnMgfSBmcm9tICcuL2FkZC1sZXZlbC1vcHRpb25zLmpzJztcblxuZXhwb3J0IGNvbnN0IHB1emxTZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbmV4cG9ydCBjb25zdCBnYW1lU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbmV4cG9ydCBjb25zdCByZXNldEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuZXhwb3J0IGNvbnN0IHRpbWVGaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuZXhwb3J0IGNvbnN0IG1vZGFsV2luID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGlhbG9nJyk7XG5leHBvcnQgY29uc3QgcmV6dWx0U2NvcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5leHBvcnQgY29uc3Qgc291bmRDZWxsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5leHBvcnQgY29uc3Qgc291bmRXaW5CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbmV4cG9ydCBjb25zdCBzYXZlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5leHBvcnQgY29uc3QgbW9kYWxTYXZlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGlhbG9nJyk7XG5leHBvcnQgY29uc3QgcmVzdW1lQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5leHBvcnQgY29uc3QgbWVzc2FnZVRvU2F2ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG5leHBvcnQgY29uc3QgcmVjb3Jkc0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuZXhwb3J0IGNvbnN0IHJhbmRvbUdhbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbmV4cG9ydCBjb25zdCBzb2x1dGlvbkdhbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbmV4cG9ydCBjb25zdCByZWNvcmRzV3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuZXhwb3J0IGNvbnN0IG1vZGFsUmV6dWx0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGlhbG9nJyk7XG5leHBvcnQgY29uc3QgbGlnaHRUaGVtZVJhZGlvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbmV4cG9ydCBjb25zdCBkYXJrVGhlbWVSYWRpbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG5cbmV4cG9ydCBmdW5jdGlvbiBTaG93U3RhcnRXaW4oKSB7XG4gIGNvbnN0IHdyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgd3JhcC5jbGFzc0xpc3QuYWRkKCd3cmFwcGVyJyk7XG4gIGRvY3VtZW50LmJvZHkucHJlcGVuZCh3cmFwKTtcblxuICBtb2RhbFdpbi5jbGFzc0xpc3QuYWRkKCdtb2RhbCcpO1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZChtb2RhbFdpbik7XG5cbiAgY29uc3QgbWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gIG1lc3NhZ2UuY2xhc3NMaXN0LmFkZCgnaGVhZGluZy1tc2cnKTtcbiAgbWVzc2FnZS50ZXh0Q29udGVudCA9ICdHcmVhdCEgWW91IGhhdmUgc29sdmVkIHRoZSBub25vZ3JhbSEnO1xuICByZXp1bHRTY29yZS5jbGFzc0xpc3QuYWRkKCdyZXp1bHQtc2NvcmUnKTtcbiAgcmV6dWx0U2NvcmUudGV4dENvbnRlbnQgPSAneW91ciB0aW1lOic7XG4gIGNvbnN0IHJlY29yZHNUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gIHJlY29yZHNUaXRsZS5jbGFzc0xpc3QuYWRkKCdyZWNvcmRzLXRpdGxlJyk7XG4gIHJlY29yZHNUaXRsZS50ZXh0Q29udGVudCA9ICdSZWNvcmRzJztcbiAgcmVjb3Jkc1dyYXAuY2xhc3NMaXN0LmFkZCgncmVjb3Jkcy13cmFwJyk7XG4gIHJlY29yZHNXcmFwLnRleHRDb250ZW50ID0gJ25vIHJlY29yZHMgeWV0JztcbiAgbW9kYWxXaW4uYXBwZW5kKG1lc3NhZ2UpO1xuICBtb2RhbFdpbi5hcHBlbmQocmV6dWx0U2NvcmUpO1xuICBtb2RhbFdpbi5hcHBlbmQocmVjb3Jkc1RpdGxlKTtcbiAgbW9kYWxXaW4uYXBwZW5kKHJlY29yZHNXcmFwKTtcblxuICBtb2RhbFNhdmUuY2xhc3NMaXN0LmFkZCgnbW9kYWwtc2F2ZScpO1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZChtb2RhbFNhdmUpO1xuICBtZXNzYWdlVG9TYXZlLmNsYXNzTGlzdC5hZGQoJ2hlYWRpbmctbXNnJyk7XG4gIG1vZGFsU2F2ZS5hcHBlbmQobWVzc2FnZVRvU2F2ZSk7XG5cbiAgbW9kYWxSZXp1bHQuY2xhc3NMaXN0LmFkZCgnbW9kYWwtcmV6dWx0Jyk7XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kKG1vZGFsUmV6dWx0KTtcblxuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcbiAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2hlYWRlcicpO1xuICB3cmFwLmFwcGVuZChoZWFkZXIpO1xuXG4gIGNvbnN0IGgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgaDEudGV4dENvbnRlbnQgPSAnTm9ub2dyYW1zIG9ubGluZSc7XG4gIGgxLmNsYXNzTGlzdC5hZGQoJ2hlYWRpbmcnKTtcbiAgaGVhZGVyLmFwcGVuZChoMSk7XG5cbiAgbGlnaHRUaGVtZVJhZGlvLnNldEF0dHJpYnV0ZSgndHlwZScsICdyYWRpbycpO1xuICBsaWdodFRoZW1lUmFkaW8uc2V0QXR0cmlidXRlKCdpZCcsICdsaWdodCcpO1xuICBsaWdodFRoZW1lUmFkaW8uc2V0QXR0cmlidXRlKCduYW1lJywgJ3RoZW1lJyk7XG4gIGxpZ2h0VGhlbWVSYWRpby5jbGFzc0xpc3QuYWRkKCdyYWRpby1idG4tdGhlbWUnKTtcbiAgbGlnaHRUaGVtZVJhZGlvLnNldEF0dHJpYnV0ZSgnY2hlY2tlZCcsICd0cnVlJyk7XG4gIGNvbnN0IGxpZ2h0VGhlbWVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gIGxpZ2h0VGhlbWVMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdsaWdodCcpO1xuICBsaWdodFRoZW1lTGFiZWwuY2xhc3NMaXN0LmFkZCgnbGFiZWwtdGhlbWUnKTtcbiAgbGlnaHRUaGVtZUxhYmVsLnRleHRDb250ZW50ID0gJ2xpZ2h0IHRoZW1lJztcbiAgaGVhZGVyLmFwcGVuZChsaWdodFRoZW1lTGFiZWwpO1xuICBoZWFkZXIuYXBwZW5kKGxpZ2h0VGhlbWVSYWRpbyk7XG5cbiAgZGFya1RoZW1lUmFkaW8uc2V0QXR0cmlidXRlKCd0eXBlJywgJ3JhZGlvJyk7XG4gIGRhcmtUaGVtZVJhZGlvLnNldEF0dHJpYnV0ZSgnaWQnLCAnZGFyaycpO1xuICBkYXJrVGhlbWVSYWRpby5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAndGhlbWUnKTtcbiAgZGFya1RoZW1lUmFkaW8uY2xhc3NMaXN0LmFkZCgncmFkaW8tYnRuLXRoZW1lJyk7XG4gIGNvbnN0IGRhcmtUaGVtZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgZGFya1RoZW1lTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnbGlnaHQnKTtcbiAgZGFya1RoZW1lTGFiZWwuY2xhc3NMaXN0LmFkZCgnbGFiZWwtdGhlbWUnKTtcbiAgZGFya1RoZW1lTGFiZWwudGV4dENvbnRlbnQgPSAnZGFyayB0aGVtZSc7XG4gIGhlYWRlci5hcHBlbmQoZGFya1RoZW1lTGFiZWwpO1xuICBoZWFkZXIuYXBwZW5kKGRhcmtUaGVtZVJhZGlvKTtcblxuICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ2xpZ2h0LXRoZW1lJyk7XG5cbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcbiAgbWFpbi5jbGFzc0xpc3QuYWRkKCdtYWluJyk7XG4gIHdyYXAuYXBwZW5kKG1haW4pO1xuXG4gIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpO1xuICBmb290ZXIuY2xhc3NMaXN0LmFkZCgnZm9vdGVyJyk7XG4gIHdyYXAuYXBwZW5kKGZvb3Rlcik7XG4gIGNvbnN0IG1lbnVTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICBtZW51U2VjdGlvbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ21lbnUgc2VjdGlvbicpO1xuICBtYWluLmFwcGVuZChtZW51U2VjdGlvbik7XG5cbiAgY29uc3QgbWVudUl0ZW1zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG1lbnVJdGVtcy5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW1zJyk7XG5cbiAgcHV6bFNlbGVjdC5jbGFzc0xpc3QuYWRkKCdwdXpsLXNlbGVjdCcpO1xuICBjb25zdCBwdXpsVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICBwdXpsVGV4dC5jbGFzc0xpc3QuYWRkKCdwdXpsLW5hbWUnKTtcbiAgcHV6bFRleHQuc2V0QXR0cmlidXRlKCd2YWx1ZScsIGAtMWApO1xuICBwdXpsVGV4dC50ZXh0Q29udGVudCA9ICdTZWxlY3QgcHV6emxlJztcbiAgcHV6bFNlbGVjdC5hcHBlbmQocHV6bFRleHQpO1xuXG4gIGNvbnN0IGxldmVsc05hbWVzQXJyID0gW1xuICAgICcxIGxldmVsICg1eDUpJyxcbiAgICAnMiBsZXZlbCAoMTB4MTApJyxcbiAgICAnMyBsZXZlbCAoMTV4MTUpJyxcbiAgXTtcblxuICBjb25zdCBsZXZlbHNBcnIgPSBbXTtcbiAgbGV2ZWxzTmFtZXNBcnIuZm9yRWFjaCgobmFtZSkgPT5cbiAgICBsZXZlbHNBcnIucHVzaChhZGRMZXZlbE9wdGlvbnMobmFtZSwgcHV6bFNlbGVjdCkpXG4gICk7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBub25vcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGxldCBwdXpsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgcHV6bC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgYCR7aX1gKTtcbiAgICBwdXpsLmNsYXNzTGlzdC5hZGQoJ3B1emwtbmFtZScpO1xuICAgIHB1emwudGV4dENvbnRlbnQgPSBub25vc1tpXS5uYW1lO1xuICAgIGlmIChub25vc1tpXS5sZXZlbCA9PT0gJzV4NScpIGxldmVsc0FyclswXS5hcHBlbmQocHV6bCk7XG4gICAgZWxzZSBpZiAobm9ub3NbaV0ubGV2ZWwgPT09ICcxMHgxMCcpIGxldmVsc0FyclsxXS5hcHBlbmQocHV6bCk7XG4gICAgZWxzZSBsZXZlbHNBcnJbMl0uYXBwZW5kKHB1emwpO1xuICB9XG4gIG1lbnVJdGVtcy5hcHBlbmQocHV6bFNlbGVjdCk7XG5cbiAgdGltZUZpZWxkLmNsYXNzTGlzdC5hZGQoJ3RpbWUtZmllbGQnKTtcbiAgdGltZUZpZWxkLnRleHRDb250ZW50ID0gJzAwOjAwJztcbiAgbWVudUl0ZW1zLmFwcGVuZCh0aW1lRmllbGQpO1xuXG4gIHJlc2V0QnRuLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncmVzZXQtYnRuIGJ0bicpO1xuICByZXNldEJ0bi50ZXh0Q29udGVudCA9ICdSZXNldCBnYW1lJztcbiAgbWVudUl0ZW1zLmFwcGVuZChyZXNldEJ0bik7XG5cbiAgbWVudVNlY3Rpb24uYXBwZW5kKG1lbnVJdGVtcyk7XG5cbiAgY29uc3Qgc291bmRCdG5zV3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBzb3VuZEJ0bnNXcmFwLmNsYXNzTGlzdC5hZGQoJ3NvdW5kLWJ0bnMtd3JhcCcpO1xuICBtZW51U2VjdGlvbi5hcHBlbmQoc291bmRCdG5zV3JhcCk7XG5cbiAgc291bmRDZWxsQnRuLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnc291bmQtY2VsbC1idG4gYnRuJyk7XG4gIHNvdW5kQ2VsbEJ0bi50ZXh0Q29udGVudCA9ICdDZWxsIHNvdW5kOiBPTic7XG4gIHNvdW5kQnRuc1dyYXAuYXBwZW5kKHNvdW5kQ2VsbEJ0bik7XG5cbiAgc291bmRXaW5CdG4uc2V0QXR0cmlidXRlKCdjbGFzcycsICdzb3VuZC13aW4tYnRuIGJ0bicpO1xuICBzb3VuZFdpbkJ0bi50ZXh0Q29udGVudCA9ICdXaW4gc291bmQ6IE9OJztcbiAgc291bmRCdG5zV3JhcC5hcHBlbmQoc291bmRXaW5CdG4pO1xuXG4gIGNvbnN0IGRpZkJ0bnNXcmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRpZkJ0bnNXcmFwLmNsYXNzTGlzdC5hZGQoJ2RpZi1idG5zLXdyYXAnKTtcbiAgbWVudVNlY3Rpb24uYXBwZW5kKGRpZkJ0bnNXcmFwKTtcblxuICByZWNvcmRzQnRuLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncmVjb3Jkcy1idG4gYnRuJyk7XG4gIHJlY29yZHNCdG4udGV4dENvbnRlbnQgPSAnUmVjb3Jkcyc7XG4gIGRpZkJ0bnNXcmFwLmFwcGVuZChyZWNvcmRzQnRuKTtcblxuICByYW5kb21HYW1lLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncmFuZG9tLWdhbWUgYnRuJyk7XG4gIHJhbmRvbUdhbWUudGV4dENvbnRlbnQgPSAnUmFuZG9tIGdhbWUnO1xuICBkaWZCdG5zV3JhcC5hcHBlbmQocmFuZG9tR2FtZSk7XG5cbiAgc29sdXRpb25HYW1lLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnc29sdXRpb24tZ2FtZSBidG4nKTtcbiAgc29sdXRpb25HYW1lLnRleHRDb250ZW50ID0gJ1NvbHV0aW9uJztcbiAgZGlmQnRuc1dyYXAuYXBwZW5kKHNvbHV0aW9uR2FtZSk7XG5cbiAgZ2FtZVNlY3Rpb24uc2V0QXR0cmlidXRlKCdjbGFzcycsICdnYW1lIGRlZmF1bHQgc2VjdGlvbicpO1xuICBtYWluLmFwcGVuZChnYW1lU2VjdGlvbik7XG5cbiAgY29uc3Qgc2F2ZVNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gIHNhdmVTZWN0aW9uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnc2F2ZSBzZWN0aW9uJyk7XG4gIG1haW4uYXBwZW5kKHNhdmVTZWN0aW9uKTtcblxuICBzYXZlQnRuLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnc2F2ZS1idG4gYnRuJyk7XG4gIHNhdmVCdG4udGV4dENvbnRlbnQgPSAnU2F2ZSBnYW1lJztcbiAgc2F2ZVNlY3Rpb24uYXBwZW5kKHNhdmVCdG4pO1xuXG4gIHJlc3VtZUJ0bi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3Jlc3VtZS1idG4gYnRuJyk7XG4gIHJlc3VtZUJ0bi50ZXh0Q29udGVudCA9ICdSZXN1bWUgcHJldiBnYW1lJztcbiAgc2F2ZVNlY3Rpb24uYXBwZW5kKHJlc3VtZUJ0bik7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnbW9kZXJuLW5vcm1hbGl6ZSc7XG5pbXBvcnQge1xuICBnYW1lU2VjdGlvbixcbiAgcHV6bFNlbGVjdCxcbiAgU2hvd1N0YXJ0V2luLFxuICB0aW1lRmllbGQsXG4gIG1vZGFsV2luLFxuICByZXp1bHRTY29yZSxcbiAgc291bmRDZWxsQnRuLFxuICBzb3VuZFdpbkJ0bixcbiAgcmVzZXRCdG4sXG4gIHNhdmVCdG4sXG4gIG1vZGFsU2F2ZSxcbiAgcmVzdW1lQnRuLFxuICBtZXNzYWdlVG9TYXZlLFxuICByZWNvcmRzQnRuLFxuICByYW5kb21HYW1lLFxuICBzb2x1dGlvbkdhbWUsXG4gIHJlY29yZHNXcmFwLFxuICBtb2RhbFJlenVsdCxcbn0gZnJvbSAnLi9qcy9zdGFydC13aW5kb3cuanMnO1xuaW1wb3J0IHsgY2xlYXJGaWVsZCwgZHJhdyB9IGZyb20gJy4vanMvZHJhdy5qcyc7XG5pbXBvcnQgbm9ub3MgZnJvbSAnLi9ub25vcy5qc29uJyBhc3NlcnQgeyB0eXBlOiAnanNvbicgfTtcbmltcG9ydCB7IHRvZ2dsZVNvdW5kcyB9IGZyb20gJy4vanMvc291bmRzLmpzJztcbmltcG9ydCB7IGNvbnZlcnRUaW1lIH0gZnJvbSAnLi9qcy9jb252ZXJ0LXRpbWUuanMnO1xuXG5sZXQgY3VycmVudFB1emwgPSAtMTtcbmxldCBmaWVsZEFyciA9IFtdO1xubGV0IHN0YXJ0VGltZSA9IDA7XG5sZXQgY3VycmVudFRpbWUgPSAwO1xubGV0IHJlc3RvcmVkVGltZSA9IDA7XG5sZXQgdGltZXJJZDtcbmxldCB0b3VjaFN0YXJ0VGltZSA9IDA7XG5cbmNvbnN0IGJsYWNrRXZ0ID0gbmV3IEF1ZGlvKCcuL3NvdW5kcy9ibGFjay5vZ2cnKTtcbmNvbnN0IGVtcHR5RXZ0ID0gbmV3IEF1ZGlvKCcuL3NvdW5kcy9lbXB0eS5vZ2cnKTtcbmNvbnN0IGNyb3NzRXZ0ID0gbmV3IEF1ZGlvKCcuL3NvdW5kcy9jcm9zcy5vZ2cnKTtcbmNvbnN0IHdpbkV2dCA9IG5ldyBBdWRpbygnLi9zb3VuZHMvd2luLm9nZycpO1xuXG5TaG93U3RhcnRXaW4oKTtcbnNldFRoZW1lKCk7XG5wdXpsU2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHBsYXlHYW1lKTtcbm1vZGFsV2luLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBtb2RhbFdpbi5yZW1vdmVBdHRyaWJ1dGUoJ29wZW4nKTtcbiAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICcnO1xufSk7XG5yZXNldEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlemV0R2FtZSk7XG5zb3VuZENlbGxCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgdG9nZ2xlU291bmRzKGV2ZW50LnRhcmdldCwgYmxhY2tFdnQsIGVtcHR5RXZ0LCBjcm9zc0V2dCk7XG59KTtcbnNvdW5kV2luQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gIHRvZ2dsZVNvdW5kcyhldmVudC50YXJnZXQsIHdpbkV2dCk7XG59KTtcbnNhdmVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzYXZlQ3VycmVudEdhbWUpO1xucmVzdW1lQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVzdG9yZUxhc3RHYW1lKTtcbnJhbmRvbUdhbWUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBwbGF5UmFuZG9tR2FtZSk7XG5zb2x1dGlvbkdhbWUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzaG93U29sdXRpb24pO1xucmVjb3Jkc0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNob3dSZWNvcmRzKTtcbmRvY3VtZW50XG4gIC5nZXRFbGVtZW50c0J5TmFtZSgndGhlbWUnKVxuICAuZm9yRWFjaCgodGFnKSA9PiB0YWcuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgY2hhbmdlVGhlbWUpKTtcblxuZnVuY3Rpb24gcGxheUdhbWUoKSB7XG4gIGlmICh0aW1lcklkKSBjbGVhclRpbWVyKHRpbWVySWQpO1xuICBnZXRQdXpsKCk7XG4gIGRyYXdGaWVsZChjdXJyZW50UHV6bCk7XG59XG5cbmZ1bmN0aW9uIGdldFB1emwoKSB7XG4gIFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHV6bC1uYW1lJyldLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICBpZiAoZWxlbWVudC5zZWxlY3RlZCkgY3VycmVudFB1emwgPSBwYXJzZUludChlbGVtZW50LnZhbHVlKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGRyYXdGaWVsZCgpIHtcbiAgY2xlYXJGaWVsZCgpO1xuICBpZiAoY3VycmVudFB1emwgPCAwKSB7XG4gICAgcHV6bFNlbGVjdC5zdHlsZS5ib3JkZXIgPSAnMnB4IHNvbGlkICNGRjAwMDAnO1xuICAgIHB1emxTZWxlY3QuYmx1cigpO1xuICB9IGVsc2Uge1xuICAgIHRpbWVGaWVsZC50ZXh0Q29udGVudCA9ICcwMDowMCc7XG4gICAgcHV6bFNlbGVjdC5zdHlsZS5ib3JkZXIgPSAnMXB4IHNvbGlkICMwMDAwMDAnO1xuICAgIGNsZWFyVGltZXIodGltZXJJZCk7XG4gICAgcmVzdG9yZWRUaW1lID0gMDtcbiAgICBkcmF3KGN1cnJlbnRQdXpsLCBmaWVsZEFycik7XG4gICAgZG9jdW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKCcuY2VsbC5hY3RpdmUnKVxuICAgICAgLmZvckVhY2goKGNlbGwpID0+IGFkZENlbGxFdmVudHMoY2VsbCkpO1xuICB9XG4gIHNldFRoZW1lKCk7XG59XG5cbmZ1bmN0aW9uIHRvZ2dsZUJsYWNrKCkge1xuICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnYmxhY2snKSkge1xuICAgIGVtcHR5RXZ0LnBsYXkoKTtcbiAgICBldmVudC50YXJnZXQuY2xhc3NMaXN0LnRvZ2dsZSgnYmxhY2snKTtcbiAgICBmaWVsZEFycltldmVudC50YXJnZXQuaV1bZXZlbnQudGFyZ2V0LmpdID0gMDtcbiAgfSBlbHNlIHtcbiAgICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnY3Jvc3MnKSkge1xuICAgICAgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoJ2Nyb3NzJyk7XG4gICAgfVxuICAgIGJsYWNrRXZ0LnBsYXkoKTtcbiAgICBldmVudC50YXJnZXQuY2xhc3NMaXN0LnRvZ2dsZSgnYmxhY2snKTtcbiAgICBmaWVsZEFycltldmVudC50YXJnZXQuaV1bZXZlbnQudGFyZ2V0LmpdID0gMTtcbiAgfVxuICBpZiAoY2hlY2tQdXpsKGN1cnJlbnRQdXpsKSkgc2hvd1JlenVsdCgpO1xufVxuXG5mdW5jdGlvbiB0b2dnbGVDcm9zcygpIHtcbiAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2JsYWNrJykpIHtcbiAgICBldmVudC50YXJnZXQuY2xhc3NMaXN0LnRvZ2dsZSgnYmxhY2snKTtcbiAgICBmaWVsZEFycltldmVudC50YXJnZXQuaV1bZXZlbnQudGFyZ2V0LmpdID0gMDtcbiAgfVxuICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnY3Jvc3MnKSkgZW1wdHlFdnQucGxheSgpO1xuICBlbHNlIGNyb3NzRXZ0LnBsYXkoKTtcbiAgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoJ2Nyb3NzJyk7XG59XG5cbmZ1bmN0aW9uIGFkZENlbGxFdmVudHMoaXRlbSkge1xuICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9nZ2xlQmxhY2spO1xuICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NvbnRleHRtZW51JywgdG9nZ2xlQ3Jvc3MpO1xuICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBTdGFydFRvdWNoVGltZSk7XG4gIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCBFbmRUb3VjaFRpbWUpO1xuICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZ2V0U3RhcnRUaW1lKTtcbiAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjb250ZXh0bWVudScsIGdldFN0YXJ0VGltZSk7XG59XG5cbmZ1bmN0aW9uIFN0YXJ0VG91Y2hUaW1lKCkge1xuICB0b3VjaFN0YXJ0VGltZSA9IERhdGUubm93KCk7XG59XG5cbmZ1bmN0aW9uIEVuZFRvdWNoVGltZShldmVudCkge1xuICBjb25zdCBkdXJhdGlvblRpbWUgPSBEYXRlLm5vdygpIC0gdG91Y2hTdGFydFRpbWU7XG4gIGlmIChkdXJhdGlvblRpbWUgPiA1MDApIHtcbiAgICBjb25zdCBjb250ZXh0TWVudUV2dCA9IG5ldyBFdmVudCgnY29udGV4dG1lbnUnLCB7XG4gICAgICBidWJibGVzOiB0cnVlLFxuICAgICAgY2FuY2VsYWJsZTogdHJ1ZSxcbiAgICB9KTtcbiAgICBldmVudC50YXJnZXQuZGlzcGF0Y2hFdmVudChjb250ZXh0TWVudUV2dCk7XG4gIH1cbiAgdG91Y2hTdGFydFRpbWUgPSAwO1xufVxuXG5mdW5jdGlvbiByZW1vdmVDZWxsRXZlbnRzKGl0ZW0pIHtcbiAgaXRlbS5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRvZ2dsZUJsYWNrKTtcbiAgaXRlbS5yZW1vdmVFdmVudExpc3RlbmVyKCdjb250ZXh0bWVudScsIHRvZ2dsZUNyb3NzKTtcbiAgaXRlbS5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgU3RhcnRUb3VjaFRpbWUpO1xuICBpdGVtLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgRW5kVG91Y2hUaW1lKTtcbn1cblxuZnVuY3Rpb24gY2hlY2tQdXpsKGluZGV4KSB7XG4gIGxldCBhbnMgPSB0cnVlO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG5vbm9zW2luZGV4XS5maWVsZC5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgbm9ub3NbaW5kZXhdLmZpZWxkLmxlbmd0aDsgaiArPSAxKSB7XG4gICAgICBpZiAoZmllbGRBcnJbaV1bal0gIT09IG5vbm9zW2luZGV4XS5maWVsZFtpXVtqXSkge1xuICAgICAgICBhbnMgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGFucztcbn1cblxuZnVuY3Rpb24gc2hvd1JlenVsdCgpIHtcbiAgd2luRXZ0LnBsYXkoKTtcbiAgc2F2ZVJlenVsdCgpO1xuICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3JlY29yZHMnKSkgdmlld1JlY29yZHMocmVjb3Jkc1dyYXApO1xuICBsZXQgYW5zd2VyID0ge1xuICAgIG1pbnV0ZTogK2Ake3RpbWVGaWVsZC50ZXh0Q29udGVudC5zbGljZSgwLCAyKX1gLFxuICAgIHNlY29uZHM6ICtgJHt0aW1lRmllbGQudGV4dENvbnRlbnQuc2xpY2UobGVuZ3RoIC0gMil9YCxcbiAgfTtcbiAgcmV6dWx0U2NvcmUudGV4dENvbnRlbnQgPSBgeW91ciB0aW1lOiAke2Fuc3dlci5taW51dGV9OiR7YW5zd2VyLnNlY29uZHN9YDtcbiAgbW9kYWxXaW4uc2V0QXR0cmlidXRlKCdvcGVuJywgJ3RydWUnKTtcbiAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xuICBjbGVhclRpbWVyKHRpbWVySWQpO1xuICBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hY3RpdmUnKSkuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgIHJlbW92ZUNlbGxFdmVudHMoZWxlbWVudCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiByZXpldEdhbWUoKSB7XG4gIGdhbWVTZWN0aW9uLmlubmVySFRNTCA9ICcnO1xuICBkcmF3RmllbGQoY3VycmVudFB1emwpO1xufVxuXG5mdW5jdGlvbiBnZXRTdGFydFRpbWUoKSB7XG4gIHN0YXJ0VGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYWN0aXZlJykuZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgIGNlbGwucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBnZXRTdGFydFRpbWUpO1xuICAgIGNlbGwucmVtb3ZlRXZlbnRMaXN0ZW5lcignY29udGV4dG1lbnUnLCBnZXRTdGFydFRpbWUpO1xuICB9KTtcbiAgdGltZXJJZCA9IHNldEludGVydmFsKGdldEN1cnJlbnRUaW1lLCAxMDAwKTtcbn1cblxuZnVuY3Rpb24gY2xlYXJUaW1lcihpZCkge1xuICBjbGVhckludGVydmFsKGlkKTtcbn1cblxuZnVuY3Rpb24gZ2V0Q3VycmVudFRpbWUoKSB7XG4gIGxldCBub3cgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgY3VycmVudFRpbWUgPSBub3cgLSBzdGFydFRpbWUgKyByZXN0b3JlZFRpbWU7XG4gIHRpbWVGaWVsZC50ZXh0Q29udGVudCA9IGNvbnZlcnRUaW1lKGN1cnJlbnRUaW1lKTtcbn1cblxuZnVuY3Rpb24gc2F2ZUN1cnJlbnRHYW1lKCkge1xuICBpZiAoY3VycmVudFB1emwgPT09IC0xKSB7XG4gICAgbWVzc2FnZVRvU2F2ZS50ZXh0Q29udGVudCA9ICdUaGVyZSBpcyBubyBnYW1lIHRvIHNhdmUnO1xuICAgIG1vZGFsU2F2ZS5zZXRBdHRyaWJ1dGUoJ29wZW4nLCAndHJ1ZScpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4gbW9kYWxTYXZlLnJlbW92ZUF0dHJpYnV0ZSgnb3BlbicpLCAxMjAwKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBwdXpsID0gY3VycmVudFB1emw7XG4gICAgY29uc3QgdGltZSA9IGN1cnJlbnRUaW1lO1xuICAgIGNvbnN0IGN1cnJlblRBcnIgPSBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFjdGl2ZScpXTtcbiAgICBjdXJyZW5UQXJyLmZvckVhY2goKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgICBjdXJyZW5UQXJyW2luZGV4XSA9IFsuLi5lbGVtZW50LmNsYXNzTGlzdF07XG4gICAgfSk7XG4gICAgY2xlYXJUaW1lcih0aW1lcklkKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbGFzdEdhbWUnLCBKU09OLnN0cmluZ2lmeShbcHV6bCwgdGltZSwgY3VycmVuVEFycl0pKTtcbiAgICBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFjdGl2ZScpXS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICByZW1vdmVDZWxsRXZlbnRzKGVsZW1lbnQpO1xuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlc3RvcmVMYXN0R2FtZSgpIHtcbiAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdsYXN0R2FtZScpKSB7XG4gICAgbGV0IHJlc3RvcmVkQXJyID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbGFzdEdhbWUnKSk7XG4gICAgY3VycmVudFB1emwgPSByZXN0b3JlZEFyclswXTtcbiAgICByZXN0b3JlZFRpbWUgPSByZXN0b3JlZEFyclsxXTtcbiAgICBpZiAodGltZXJJZCkgY2xlYXJUaW1lcih0aW1lcklkKTtcbiAgICBjbGVhckZpZWxkKCk7XG4gICAgcHV6bFNlbGVjdC5xdWVyeVNlbGVjdG9yQWxsKCcucHV6bC1uYW1lJylbY3VycmVudFB1emwgKyAxXS5zZWxlY3RlZCA9IHRydWU7XG4gICAgZHJhdyhjdXJyZW50UHV6bCwgZmllbGRBcnIpO1xuICAgIHRpbWVGaWVsZC50ZXh0Q29udGVudCA9IGNvbnZlcnRUaW1lKHJlc3RvcmVkVGltZSk7XG4gICAgbGV0IGFjdGl2ZUNlbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFjdGl2ZScpO1xuICAgIGFjdGl2ZUNlbGxzLmZvckVhY2goKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoLi4ucmVzdG9yZWRBcnJbMl1baW5kZXhdKTtcbiAgICAgIGlmIChlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnYmxhY2snKSkge1xuICAgICAgICBmaWVsZEFycltNYXRoLnRydW5jKGluZGV4IC8gbm9ub3NbY3VycmVudFB1emxdLmZpZWxkLmxlbmd0aCldW1xuICAgICAgICAgIGluZGV4ICUgbm9ub3NbY3VycmVudFB1emxdLmZpZWxkLmxlbmd0aFxuICAgICAgICBdID0gMTtcbiAgICAgIH1cbiAgICAgIGFkZENlbGxFdmVudHMoZWxlbWVudCk7XG4gICAgfSk7XG4gICAgc2V0VGhlbWUoKTtcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnbGFzdEdhbWUnKTtcbiAgfSBlbHNlIHtcbiAgICBtZXNzYWdlVG9TYXZlLnRleHRDb250ZW50ID0gJ05vIGdhbWUgdG8gcmVzdG9yZSEnO1xuICAgIG1vZGFsU2F2ZS5zZXRBdHRyaWJ1dGUoJ29wZW4nLCAndHJ1ZScpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4gbW9kYWxTYXZlLnJlbW92ZUF0dHJpYnV0ZSgnb3BlbicpLCAxMjAwKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBwbGF5UmFuZG9tR2FtZSgpIHtcbiAgaWYgKHRpbWVySWQpIGNsZWFyVGltZXIodGltZXJJZCk7XG4gIGN1cnJlbnRQdXpsID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTUpO1xuICBwdXpsU2VsZWN0LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wdXpsLW5hbWUnKVtjdXJyZW50UHV6bCArIDFdLnNlbGVjdGVkID0gdHJ1ZTtcbiAgZHJhd0ZpZWxkKGN1cnJlbnRQdXpsKTtcbn1cblxuZnVuY3Rpb24gc2hvd1NvbHV0aW9uKCkge1xuICBpZiAoY3VycmVudFB1emwgPT09IC0xKSB7XG4gICAgbWVzc2FnZVRvU2F2ZS50ZXh0Q29udGVudCA9ICdUaGVyZSBpcyBubyBwdXpsIHRvIHNvbHV0aW9uJztcbiAgICBtb2RhbFNhdmUuc2V0QXR0cmlidXRlKCdvcGVuJywgJ3RydWUnKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IG1vZGFsU2F2ZS5yZW1vdmVBdHRyaWJ1dGUoJ29wZW4nKSwgMTIwMCk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKHRpbWVySWQpIGNsZWFyVGltZXIodGltZXJJZCk7XG4gICAgY29uc3QgYWN0aXZlQ2VsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYWN0aXZlJyk7XG4gICAgY29uc3Qgc29sdXRpb25DZWxscyA9IG5vbm9zW2N1cnJlbnRQdXpsXS5maWVsZC5mbGF0KCk7XG4gICAgY3VycmVudFRpbWUgPSAwO1xuICAgIHRpbWVGaWVsZC50ZXh0Q29udGVudCA9ICctLTotLSc7XG4gICAgc29sdXRpb25DZWxscy5mb3JFYWNoKChjZWxsLCBpbmRleCkgPT4ge1xuICAgICAgaWYgKGNlbGwgPT09IDApIGFjdGl2ZUNlbGxzW2luZGV4XS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NlbGwgYWN0aXZlJyk7XG4gICAgICBlbHNlIGFjdGl2ZUNlbGxzW2luZGV4XS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NlbGwgYWN0aXZlIGJsYWNrJyk7XG4gICAgICByZW1vdmVDZWxsRXZlbnRzKGFjdGl2ZUNlbGxzW2luZGV4XSk7XG4gICAgfSk7XG4gIH1cbiAgc2V0VGhlbWUoKTtcbn1cblxuZnVuY3Rpb24gc2F2ZVJlenVsdCgpIHtcbiAgbGV0IHJlenVsdEFyciA9IFtdO1xuICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3JlY29yZHMnKSlcbiAgICByZXp1bHRBcnIgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdyZWNvcmRzJykpO1xuICBsZXQgcmV6dWx0ID0gW2N1cnJlbnRUaW1lLCBub25vc1tjdXJyZW50UHV6bF0ubmFtZSwgbm9ub3NbY3VycmVudFB1emxdLmxldmVsXTtcbiAgcmV6dWx0QXJyLnB1c2gocmV6dWx0KTtcbiAgcmV6dWx0QXJyLnNvcnQoKGEsIGIpID0+IGFbMF0gLSBiWzBdKTtcbiAgaWYgKHJlenVsdEFyci5sZW5ndGggPiA1KSByZXp1bHRBcnIubGVuZ3RoID0gNTtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3JlY29yZHMnLCBKU09OLnN0cmluZ2lmeShyZXp1bHRBcnIpKTtcbn1cblxuZnVuY3Rpb24gc2hvd1JlY29yZHMoKSB7XG4gIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncmVjb3JkcycpKSB7XG4gICAgdmlld1JlY29yZHMobW9kYWxSZXp1bHQpO1xuICAgIG1vZGFsUmV6dWx0LnNldEF0dHJpYnV0ZSgnb3BlbicsICd0cnVlJyk7XG4gICAgc2V0VGltZW91dCgoKSA9PiBtb2RhbFJlenVsdC5yZW1vdmVBdHRyaWJ1dGUoJ29wZW4nKSwgMjAwMCk7XG4gIH0gZWxzZSB7XG4gICAgbWVzc2FnZVRvU2F2ZS50ZXh0Q29udGVudCA9ICdObyByZWNvcmRzJztcbiAgICBtb2RhbFNhdmUuc2V0QXR0cmlidXRlKCdvcGVuJywgJ3RydWUnKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IG1vZGFsU2F2ZS5yZW1vdmVBdHRyaWJ1dGUoJ29wZW4nKSwgMTIwMCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gdmlld1JlY29yZHMocGFyZW50RWxlbSkge1xuICBwYXJlbnRFbGVtLnRleHRDb250ZW50ID0gJyc7XG4gIGxldCByZWNvcmRzQXJyID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncmVjb3JkcycpKTtcbiAgcGFyZW50RWxlbS5zdHlsZS5ncmlkVGVtcGxhdGVSb3dzID0gYHJlcGVhdCgke3JlY29yZHNBcnIubGVuZ3RoICsgMX0sIDFmcilgO1xuICBbJ3RpbWUnLCAnbmFtZScsICdsZXZlbCddLmNvbmNhdChyZWNvcmRzQXJyLmZsYXQoKSkuZm9yRWFjaCgoZWxlbSkgPT4ge1xuICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpZiAodHlwZW9mIGVsZW0gPT09ICdudW1iZXInKSBjZWxsLnRleHRDb250ZW50ID0gY29udmVydFRpbWUoZWxlbSk7XG4gICAgZWxzZSBjZWxsLnRleHRDb250ZW50ID0gZWxlbTtcbiAgICBwYXJlbnRFbGVtLmFwcGVuZChjZWxsKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGNoYW5nZVRoZW1lKCkge1xuICBpZiAoZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuY29udGFpbnMoJ2xpZ2h0LXRoZW1lJykpIHtcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ2RhcmstdGhlbWUnKTtcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ2xpZ2h0LXRoZW1lJyk7XG4gICAgZG9jdW1lbnQuYm9keS5xdWVyeVNlbGVjdG9yQWxsKCcqJykuZm9yRWFjaCgodGFnKSA9PiB7XG4gICAgICB0YWcuY2xhc3NMaXN0LmFkZCgnZGFyay10aGVtZScpO1xuICAgICAgdGFnLmNsYXNzTGlzdC5yZW1vdmUoJ2xpZ2h0LXRoZW1lJyk7XG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdsaWdodC10aGVtZScpO1xuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnZGFyay10aGVtZScpO1xuICAgIGRvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvckFsbCgnKicpLmZvckVhY2goKHRhZykgPT4ge1xuICAgICAgdGFnLmNsYXNzTGlzdC5hZGQoJ2xpZ2h0LXRoZW1lJyk7XG4gICAgICB0YWcuY2xhc3NMaXN0LnJlbW92ZSgnZGFyay10aGVtZScpO1xuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNldFRoZW1lKCkge1xuICBpZiAoZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuY29udGFpbnMoJ2xpZ2h0LXRoZW1lJykpIHtcbiAgICBkb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3JBbGwoJyonKS5mb3JFYWNoKCh0YWcpID0+IHtcbiAgICAgIHRhZy5jbGFzc0xpc3QuYWRkKCdsaWdodC10aGVtZScpO1xuICAgICAgdGFnLmNsYXNzTGlzdC5yZW1vdmUoJ2RhcmstdGhlbWUnKTtcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBkb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3JBbGwoJyonKS5mb3JFYWNoKCh0YWcpID0+IHtcbiAgICAgIHRhZy5jbGFzc0xpc3QuYWRkKCdkYXJrLXRoZW1lJyk7XG4gICAgICB0YWcuY2xhc3NMaXN0LnJlbW92ZSgnbGlnaHQtdGhlbWUnKTtcbiAgICB9KTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9