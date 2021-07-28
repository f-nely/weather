document.querySelector('.busca').addEventListener('submit', (event)=> {
    event.preventDefault();

    let input = document.querySelector('#searchInput').value;

    if (input != '') {
        showWarning('Carregando...');

        let url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(input)}&appid=0b91301ae6107e00534ff53cdd3bd605&units=metric&lang=pt_br`;
    }
    
});

function showWarning(msg) {
    document.querySelector('.aviso').innerHTML = msg;
}