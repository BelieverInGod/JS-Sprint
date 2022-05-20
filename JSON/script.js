const inputRub = document.querySelector("#uah"),
      inputUsd = document.querySelector("#usd");

inputRub.addEventListener('input', () => {
    const request = new XMLHttpRequest();

    request.open('GET', 'JSON/curent.json');
    request.setRequestHeader('Content-type', 'application/json')

});