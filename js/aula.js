/*

    VARIAVEIS:
    -let/ const/ var(descontinuado, nao usamos mais)

        -> const: tipo de variavel que nao pode atribuir um novo valor depois
        -> let: o valor pode ser atribuido quantas vezes quiser
        -> var: um tipo de variavel com escopo global(pode ocasionar em bugs)


    TIPOS DE DADOS:
    -> number: 1, 2, 3, 4, 5 ,6 6.5, 1,22, 33.5
    -> string: "peeixe", "bolas", "cachorro", "joao", 'ovo'
    -> boleana: True, false

    CONDICIONAIS:
    IF(se)/ ELSE(se nao)
    -> estruturas condicionais exige uma condicao para ser executada
    
    Funacoes:
        -Sao um trecho de codigo, que só é executado, quando é chamado

    Lacos:
        -ForEach
    

*/

// let num = 13

// if(num === 12){
//     console.log(true)
// } else
//     if(num > 12){
//         num = 0
//     } else{
//         num = {
//             status: 12,
//             age: 22
//         }
//     }

// function list() {
//     let lista = [1,3,4,5,6,7,8,9,10]
//     const soma = lista.reduce(function (acumulador, item){
//         return acumulador + item
        
//     }, 0)
//     console.log(soma)
    
// }
// list()




let produtos = ['blusa', 'tenis nike', 'camisa', 'shorts'] // array ou matriz

produtos.forEach(produto => {

    if(produto === 'camisa'){
        console.log({produto})
    } 
    
})

