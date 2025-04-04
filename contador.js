let numero = 0;
 
const btnSoma = document.getElementById('mais');
btnSoma.addEventListener('click', function() {
    numero = numero + 1;
    document.getElementById('valor').innerHTML = numero;
});
 
 
const btnmenos = document.getElementById('menos');
btnmenos.addEventListener('click', function() {
    numero = numero -1;
    document.getElementById('valor').innerHTML = numero;
});