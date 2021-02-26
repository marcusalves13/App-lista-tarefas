let url = window.location.pathname;
console.log(url);
function editar(id,descricaoTarefa) {
    let form = document.createElement('form');
    if (url =='/index.php') {
        form.action = 'index.php?pag=index&acao=atualizar';
    }else{
        form.action = 'tarefa_controle.php?acao=atualizar';
    }
    form.method='POST';
    form.className='row';
    let inputTarefa = document.createElement('input');
    inputTarefa.type = 'text';
    inputTarefa.name = 'tarefa';
    inputTarefa.className='col-9 form-control';
    inputTarefa.value= descricaoTarefa;

    let inputId=document.createElement('input');
    inputId.type='hidden';
    inputId.name='id';
    inputId.value = id;

    let button = document.createElement('button');
    button.type='submit';
    button.className=' col-3 btn btn-info'
    button.innerHTML = 'Atualizar';
    form.appendChild(inputTarefa);

    form.appendChild(inputId);

    form.appendChild(button);
    let tarefa = document.getElementById('tarefa_'+id);
    tarefa.innerHTML ='';
    tarefa.insertBefore(form,tarefa[0]);
    
   
}

function remover(id) {
    
    if (url =='/index.php') {
        location.href = 'index.php?pag=index&acao=remover&id=' + id;
    }else{
        location.href = 'todas_tarefas.php?acao=remover&id='+id;
    }
}
function marcarRealizada(id) {
	    if (url =='/index.php') {
        location.href = 'index.php?pag=index&acao=marcarRealizada&id=' + id;
    }else{
        location.href = 'todas_tarefas.php?acao=marcarRealizada&id='+id;
    }
}