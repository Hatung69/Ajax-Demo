document.getElementById('btn').addEventListener("click", sendrequest);


function sendrequest() {
    var url = "https://jsonplaceholder.typicode.com/todos"
    var xhl = new XMLHttpRequest();
    var output = document.getElementById("output");
    xhl.onreadystatechange = handleResult;
    xhl.open('GET', url);
    xhl.send();

    function handleResult() {
        if (xhl.readyState === XMLHttpRequest.DONE) {
            output.innerHTML = xhl.responseText;
        }
    }
}

