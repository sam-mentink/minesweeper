document.addEventListener('DOMContentLoaded', startGame)

function startGame () {
  var boardCells = document.getElementsByClassName('board')[0].children
  for (var i = 0; i < boardCells.length; i++) {
    addListeners(boardCells[i])
    addCellToBoard(cell[i])

    for (var i = 0; i < board.cells.length; i++) {
}
  }
}

function countMines () {
  var boardCells =
}

// After the for loop in startGame, write another loop.
// Instead of looping through DOM elements,
// this one should loop through the contents of board.cells.
// Write another function called countMines. When you've defined it,
// call it from your new for loop, once for each cell in board.cells.

//  Assign the result of countMines to a property on each cell object,
//surroundingMines using =.Pass the cell into the function as an argument.
//


  function addListeners (element) {
    element.addEventListener('click', showCell)
    element.addEventListener(markCell)
    }

function showCell (evt) {
  evt.target.classList.remove('hidden')
}

function markCell (evt) {
  evt.preventDefault()
 }

var board = {
  cells: []
}

function getRow (element) {
  var classy = element.classList
  for (var i = 0; i < classy.length; i++) {
    if (classy[i].substring(0, 3) === 'row' ){
      return Number(classy[i].split('-')[1])
    }
  }
}

function getCol (element) {
  var classy = element.classList
  for (var i = 0; i < classy.length; i++) {
    if (classy[i].substring(0, 3) === 'col' ){
      return Number(classy[i].split('-')[1])
    }
  }
}

function addCellToBoard (cell) {
  var newCell = {
    row: getRow(cell),
    col: getCol(cell),
    isMine: classList.contains('mine')
  }
}
board.cells.push(newCell)