// const heading = document.getElementById('Text')
// const input = 

// document.addEventListener('keypress', () => {
//     heading.textContent = `Key pressed is `
// })

const log = document.getElementById("log");
const input = document.querySelector("input");

input.addEventListener("keypress", logKey);

function logKey(e) {
  log.textContent += ` ${e.code} ${e.key} ${e.charCode}`;
}