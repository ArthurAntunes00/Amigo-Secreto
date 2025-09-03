let amigos = [];

function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const nome = input.value.trim();

    if (!nome) {
        alert("Digite um nome válido.");
        return;
    }

    amigos.push(nome);
    input.value = "";
    input.focus();

    atualizarLista();
}

function atualizarLista() {
    // Obter o elemento da lista
    const lista = document.getElementById("listaAmigos");

    // Limpar a lista existente
    lista.innerHTML = "";

    // Percorrer o array amigos
    for (let i = 0; i < amigos.length; i++) {
        // Criar um novo elemento <li>
        const li = document.createElement("li");
        li.textContent = amigos[i];

        // Adicionar o <li> à lista
        lista.appendChild(li);
    }
}

function sortearAmigo() {
    const resultado = document.getElementById("resultado");
    
    //Validar que há amigos disponíveis
    if (amigos.length === 0) {
        resultado.innerHTML = "<li>Nenhum amigo disponível para sortear.</li>";
        return;
    }

    //Gerar um índice aleatório
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    //Obter o nome sorteado
    const amigoSorteado = amigos[indiceAleatorio];

    //Mostrar o resultado
    resultado.innerHTML = `<li>Amigo sorteado: <strong>${amigoSorteado}</strong></li>`;

    // Mostra apenas o amigo sorteado
    resultado.innerHTML = `<li>Amigo sorteado: <strong>${amigoSorteado}</strong></li>`;
}

