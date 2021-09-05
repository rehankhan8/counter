const value = document.getElementById('value')

const incBtn = document.getElementById('inc')
const decBtn = document.getElementById('dec')
const resetBtn = document.getElementById('reset')

let valueIs = 0;

incBtn.addEventListener('click', ()=>{
    valueIs += 1;
    value.textContent = valueIs
})

decBtn.addEventListener('click', ()=>{
    valueIs -= 1;
    value.textContent = valueIs
})

resetBtn.addEventListener('click', () =>{
	valueIs = 0;
	value.textContent = valueIs
})

