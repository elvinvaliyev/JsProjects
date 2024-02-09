/** @type {HTMLCanvasElement} */
const canvas = document.getElementById('mycanvas');
const content = canvas.getContext('2d');

const randomInRange = (min, max) => Math.floor(Math.random() * (max - min)) + min;

function changeColor() {
    content.fillStyle = "rgba(" + randomInRange(0, 255) + ", " + randomInRange(0, 255) + ", " + randomInRange(0, 255) + ", " + randomInRange(0, 255) + ")";
    content.fillRect(0, 0, screen.availWidth, screen.availHeight);
    color.textContent = content.fillStyle;
}