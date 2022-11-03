const canvas = document.getElementById('matrix')
const matrix = canvas.getContext('2d')

matrix.canvas.width  = window.innerWidth;
matrix.canvas.height = window.innerHeight;

const { width, height } = canvas.getBoundingClientRect()

matrix.fillStyle = '#000'
matrix.fillRect(0, 0, width, height)

const cols = Math.floor(width / 20) + 1
const rows = Array(cols).fill(0)

function matrixEffect () {
    matrix.fillStyle = '#0001'
    matrix.fillRect(0, 0, width, height)

    matrix.fillStyle = '#0F0'
    matrix.font = '15pt monospace'

    rows.forEach((y, index) => {
        const text = String.fromCharCode(Math.random() * 128)
        const x = index * 20
        matrix.fillText(text, x, y)

        if(y > 100 + Math.random() * 10000) {
            rows[index] = 0
        } else {
            rows[index] = y + 20
        }
    })
}
setInterval(matrixEffect, 50)