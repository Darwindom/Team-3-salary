const morning = document.querySelector('.validate-2');
const evening = document.querySelector('.validate-3');
const night = document.querySelector('.validate-4');
const shab = document.querySelector('.validate-5');
const btn = document.querySelector('.btn-large');
const out = document.querySelector('.out');
const check = document.querySelector('.check')


btn.onclick = () => {
let sum = (a, b, c, d) => a + b + c + d;
let result = sum((+morning.value * 256), (+evening.value * 304), (+night.value * 352), (+shab.value * 384))
out.innerHTML = result;

check.onchange = () => {
    let six = +result + (+result * 6 / 100);
    if(check.checked){
        out.innerHTML = Math.round(+six);
    }
   
}
}



    



