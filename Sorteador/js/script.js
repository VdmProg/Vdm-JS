window.onload = function () {
  document.getElementById('nome').focus();
}
    
var itens =[];
var adicionar = document.getElementById('adicionar');

adicionar.onclick = function(){
    event.preventDefault();
    var item = {};
    item.nome = document.getElementById('nome').value;
    item.autor = document.getElementById('autor').value;
    itens.push(item);

    atualizaLista();

    document.getElementById('nome').value = " ";
    document.getElementById('autor').value = " ";
    document.getElementById('nome').focus();
}

sortear.onclick = function(){
    event.preventDefault();
    document.getElementById('result').innerHTML = "";
    var sorteio = Math.floor(Math.random() * (itens.length ));
    var resultado = itens[sorteio];

    // for (let i = 1; i <= itens.length; i++) {
    //     document.getElementById('lista-itens').childNodes[i].style.background = '#ccc';
    // }

    document.getElementById('result').innerHTML ='<p>'+ resultado.nome + ' de ' + resultado.autor + '</p>';
    // document.getElementById('lista-itens').childNodes[sorteio + 1].style.background = '#aaa';
}

document.getElementById('lista').addEventListener('click', function(event) {
    // Verificar se o elemento clicado é um ícone de exclusão
    if (event.target && event.target.id === 'excluir') {
      // Encontrar o índice do item na lista
      var index = Array.from(document.getElementsByClassName('list-itens')).indexOf(event.target.parentNode);
      
      // Remover o item do array
      itens.splice(index, 1);
  
      // Atualizar a lista na tela
      var lista = document.getElementById('lista-itens');
      atualizaLista();
    }
  });

  function atualizaLista() {
    document.getElementById('lista-itens').innerHTML = '';
      for (let i = 0; i < itens.length; i++) {
        document.getElementById('lista-itens').innerHTML += '<tr class="list-itens"><td>' + itens[i].nome + '</td><td>'+ itens[i].autor + '</td><td><i id="excluir" class="fa-solid fa-xmark right"></i></td></tr>';
      }
  };
