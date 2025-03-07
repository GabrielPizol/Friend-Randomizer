function adicionar() {
    
    let nomeAmigo = document.getElementById('nome-amigo').value;
    let listaDeElementos = document.getElementById('lista-amigos');

    if(nomeAmigo && isNaN(nomeAmigo)){
            let li = document.createElement('li');
            li.textContent = nomeAmigo;
            listaDeElementos.appendChild(li);
    
            document.getElementById('nome-amigo').value = '';
    } else {
        alert('Digite um nome válido!')
    }
}

function sortear() {
    let li = document.querySelectorAll('li');
    if (li.length < 2) {
        alert("Não há amigos suficientes para sortear dois nomes distintos.");
        return;
    }
    
    if (li.length % 2 !== 0) {
        alert("O número de amigos deve ser par para realizar o sorteio.");
        return;
    }

    let nomes = Array.from(li).map(item => item.textContent);
    let listaSorteio = document.getElementById('lista-sorteio');
    listaSorteio.innerHTML = '';

    while (nomes.length > 0) {
        let primeiroSorteadoIndex = Math.floor(Math.random() * nomes.length);
        let primeiroSorteado = nomes.splice(primeiroSorteadoIndex, 1)[0];

        let segundoSorteadoIndex = Math.floor(Math.random() * nomes.length);
        let segundoSorteado = nomes.splice(segundoSorteadoIndex, 1)[0];

        listaSorteio.innerHTML += (`${primeiroSorteado} --> ${segundoSorteado}<br>`);
    }
}

function reiniciar() {
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}

