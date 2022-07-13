const body = document.body
let numberOfSquares = 16

const grid = body.querySelector(".grid")
const button = body.querySelector(".prompt-btn")

const init = () => {
  grid.style.gridTemplateColumns = `repeat(${numberOfSquares}, 1fr)`
  grid.style.gridTemplateRows = `repeat(${numberOfSquares}, 1fr)`

  for (let i = 0; i < numberOfSquares ** 2; i++) {
    const square = document.createElement("div")
    square.className = "square"
    grid.appendChild(square)
  }

  grid.addEventListener(
    "mouseenter",
    (e) => {
      let target = e.target.closest(".square")

      if (!target) return

      target.style.backgroundColor = "white"
    },
    true
  )
}

button.addEventListener("click", (e) => {
  let answer = Number(prompt("enter a number between 0-100"))
  if (answer === NaN) {
    alert("enter a number")
  } else if (!Number.isInteger(answer)) {
    alert("enter a whole number")
  } else if (answer > 100) {
    alert("enter a value lower than 100")
  } else if (answer <= 1) {
    alert("enter a number greater than 1")
  } else {
    while (grid.firstChild) {
      grid.removeChild(grid.firstChild)
    }
    numberOfSquares = answer
    init()
  }
})

init()
