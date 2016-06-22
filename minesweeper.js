document.addEventListener('DOMContentLoaded', startGame)

function startGame () {
  var boardCells = document.getElementsByClassName('board')[0].children
  for (var i = 0; i < boardCells.length; i++) {
    addListeners(boardCells[i])
  }
}

  function addListeners (element) {
    element.addEventListener ('click', showCell)
    element.addEventListener( markCell)
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
    if (classy[i].substring === 'row' ) {
      return Number(classes[i].split('-')[1])

    }
  }
}