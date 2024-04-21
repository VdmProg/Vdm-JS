var itens =[];
var adicionar = document.getElementById('adicionar');
var sortear = document.getElementById('sortear');

adicionar.onclick = function(){
    event.preventDefault();
    var item = document.getElementById('item');
    itens.push(item.value);

    document.getElementById('lista').innerHTML = " ";
    for (let i = 0; i < itens.length; i++) {
        document.getElementById('lista').innerHTML+='<li class = "list-itens">'+ itens[i] + '</li>';
    }

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