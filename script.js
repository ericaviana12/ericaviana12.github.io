document.querySelectorAll('.card a').forEach(link => {
    link.addEventListener('click', (e) => {
        alert("Você está indo para o projeto: " + link.innerText);
    });
});
