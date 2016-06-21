document.addEventListener('DOMContentLoaded', startGame)

var boardCells = document.getElementsByClassName('board')[0].children;

function startGame (element) {
    for (var i = 0; i < boardCells.length; i++) {
    element.addListeners('click', element)
    element.addEventListeners('hidden', showCell)
    element.addEventListeners.preventDefault(markCell)
}
}

function addListeners (element) {
    evt.target.classList.hidden('click')
}

function showCell (evt) {
 evt.target.classList.hidden('showCell')
}

function markCell (evt) {
evt.preventDefault()
evt.marked.Class.toggle ('markcell')
}