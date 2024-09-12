let eos = new Date('January 1, 2024 00:00:00');
let today = new Date.now()
let diff = today - eos

document.getElementById('count').innerText = diff