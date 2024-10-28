document.querySelectorAll('.card a') // Seleciona todos os links dentro de elementos com a classe "card" //
.forEach(link => { // Para cada link encontrado, executa a função seguinte //
    link.addEventListener('click', (e) => { // Adiciona um evento de clique ao link //
        alert("Você está indo para o projeto: " + link.innerText); // Exibe um alerta com o texto do link ao ser clicado //
    }); // Fim da função de evento //
}); // Fim do método forEach //
