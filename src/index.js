let win = false
let celdas = document.getElementsByName('celdas')

window.onload = () => {
    console.log('loaded')

    // let cells = <GET ALL cell ELEMENTS>
    let cells = document.getElementsByClassName('cell')
    let players = document.getElementById('players')
    let table = document.getElementById("movement");
    let currentCell = []
    let count = 0


    for (const cell of cells) {
        cell.onclick = (event) => {
            if (win) return

            const [, x, y] = event.target.id.split('-')
            console.log(`click on ${x}:${y}`)

            //movimientos y jugadas
            let row = table.insertRow(0)
            let player = row.insertCell(-1)
            let turn = row.insertCell(0)
            let position = row.insertCell(1)
            if (table.childElementCount == 1)
                count = 1;
            else
                count++
            currentCell = parseInt(event.target.id)
            turn.innerHTML = count
            position.innerHTML = currentCell

            //POP-UP CASILLA OCUPADA
            if (cell.className === "cell-o" || cell.className === "cell-x")
                window.alert("esta  casilla esta ocupada")

            //comparar
            if (players.className === "turn-cell-o") {
                //CAMBIAR X y 0
                if (cell.className === 'cell')
                    cell.className = 'cell-o'
                players.classList.remove("turn-cell-o")
                players.classList.add("turn-cell-x")
                player.innerHTML = "O"
            }
            else if (players.className === "turn-cell-x") {
                if (cell.className === 'cell')
                    cell.className = 'cell-x'
                players.classList.remove("turn-cell-x")
                players.classList.add("turn-cell-o")
                player.innerHTML = "X"
            }

            checkWin()
        }
    }
}

function restart() {
    let celdas = document.getElementsByName("celdas");
    let movement = document.getElementById("movement");
    movement.innerHTML = "";
    celdas.forEach(cell => {
        cell.classList.remove("cell-o");
        cell.classList.remove("cell-x");
        cell.classList.add("cell");
        }
    )
    count = 0;
    players.className = "turn-cell-x"
}

function checkWin() {
    let winnersPositions = [
        [1, 2, 3], [4, 5, 6], [7, 8, 9], 
        [1, 4, 7], [2, 5, 8], [3, 6, 9],
        [1, 5, 9], [3, 5, 7]
    ]

    for (i = 0; i < winnersPositions.length; i++) {

        let a = document.getElementById(winnersPositions[i][0]).className
        let b = document.getElementById(winnersPositions[i][1]).className
        let c = document.getElementById(winnersPositions[i][2]).className
        
        if(a === 'cell-x'){
            if(b === 'cell-x'){
                if(c === 'cell-x'){
                    window.alert("¡¡¡X HA GANADO!!!")
                }
            }
        }

        if(a === 'cell-o'){
            if(b === 'cell-o'){
                if(c === 'cell-o'){
                    window.alert("¡¡¡O HA GANADO!!!")
                }
            }
        }
    }
}