let valorEmLibra = parseFloat(prompt( "Qual o valor em Libra que você quer converter?" ));

const precoLibra = 1.39;
let valorEmDolar = valorEmLibra * precoLibra;

alert("Valor em Dolar = $ " + valorEmDolar.toFixed(2));