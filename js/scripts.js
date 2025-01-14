let input = document.getElementById("input-principal")
let botao = document.getElementById("botao-adicionar")
let listaTarefas = document.getElementById("tarefas")

let arrayDeTarefas = []

function clickBotao() {
    if(input.value.trim()){

        arrayDeTarefas.push(input.value.trim());
        mostrarNaTela()
        input.value = "";

    } else {
       listaTarefas.innerHTML = `<p class="erro"> Por favor insira alguma tarefa </p>`
    }
}

function removerTarefa(remove){
    const item = document.querySelectorAll('.item-tarefa')[remove];
    item.classList.add('removendo')

    setTimeout( () => {
        arrayDeTarefas.splice(remove, 1)
        mostrarNaTela
    }, 300)
}


function mostrarNaTela() {
    let newList = "";

    arrayDeTarefas.forEach((tarefa) => {
        newList += `
            <li class = "item-tarefa">
                <input type="checkbox" id="scales" >
             <label for="scales">
                <p>${tarefa}</p>
                </label>
            </li>
            
        `;
    
    });
        listaTarefas.innerHTML = newList;
}


botao.addEventListener("click", clickBotao);
