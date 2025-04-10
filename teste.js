// Arrays globais
var a1 = [];
var a2 = [];

// Função para preencher os arrays
function preencherArrays() {
    var t = document.getElementById('fill').selectedIndex
    if(t == 0){
        for(let i = 0; i < 10; i++){
            a1[i] = 1 + i
        }
    }else{
        if(t == 1){
            for(let i = 0; i < 10; i++){
                a1[i] = 1 + i*2
            }
    }else{
        for(let i = 0; i < 10; i++){
            a1[i] = 1 + i*4
        }
    }
}
}
// Função para manipular os arrays
function manipularArrays() {
  // Multiplicar todos os valores do array1 por 2
  a1 = a1.map(function(value) {
    return value * 2;
  });

  // Adicionar 10 a cada valor do array2
  a2 = a2.map(function(value) {
    return value + 10;
  });
}

// Função para visualizar os conteúdos dos arrays
function visualizarArrays() {
  console.log('Array 1:', a1);
  console.log('Array 2:', a2);
}
