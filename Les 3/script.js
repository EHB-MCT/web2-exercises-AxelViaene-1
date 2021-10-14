window.onload = start();

function start() {
    getData();
    async function getData() {
        document.getElementById("submitButton").addEventListener('submit', event => {
            let baseUrl = 'http://www.omdbapi.com/?apikey=d818a2e7&s=';
            let search = getInput();
            let url = baseUrl + search;
            let data = fetch(url)
                .then(response => response.json())
                .then(jsonData => console.log(jsonData));
            console.log(data);
        });


    };




    function getInput() {
        var input = document.getElementById('inputTitle').value;
        console.log(input);
    }







}