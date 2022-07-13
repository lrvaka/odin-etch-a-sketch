const body = document.body

const grid = body.querySelector(".grid")


for (let i = 0; i < 257; i++) {
  const square = document.createElement("div")
  square.className = "dummy-square"
  grid.appendChild(square)
}
