window.onload = function () {
    item.focus();
}
    
var itens =[];
var adicionar = document.getElementById('adicionar');

adicionar.onclick = function(){
    event.preventDefault();
    var item = document.getElementById('item');
    itens.push(item.value);

    atualizaLista();

    item.value = " ";
    item.focus();
}

sortear.onclick = function(){
    event.preventDefault();
    var sorteio = Math.floor(Math.random() * (itens.length ));
    var resultado = itens[sorteio];

    for (let i = 1; i <= itens.length; i++) {
        document.getElementById('lista').childNodes[i].style.background = '#ccc';
    }

    document.getElementById('result').innerHTML ='<p>'+ resultado + '</p>';
    document.getElementById('lista').childNodes[sorteio + 1].style.background = '#aaa';
}

document.getElementById('lista').addEventListener('click', function(event) {
    // Verificar se o elemento clicado é um ícone de exclusão
    if (event.target && event.target.id === 'excluir') {
      // Encontrar o índice do item na lista
      var index = Array.from(document.getElementsByClassName('list-itens')).indexOf(event.target.parentNode);
      
      // Remover o item do array
      itens.splice(index, 1);
  
      // Atualizar a lista na tela
      var lista = document.getElementById('lista');
      atualizaLista();
    }
  });

  function atualizaLista() {
    lista.innerHTML = '';
      for (let i = 0; i < itens.length; i++) {
        lista.innerHTML += '<li class="list-itens">' + itens[i] + '<i id="excluir" class="fa-solid fa-xmark right"></i>' + '</li>';
      }
  };