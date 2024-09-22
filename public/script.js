// script.js
document.getElementById('postForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const data = document.getElementById('dataInput').value;
    fetch('YOUR_API_ENDPOINT', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ data: data.split(',') })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('postResponse').innerText = JSON.stringify(data, null, 2);
    })
    .catch(error => {
        document.getElementById('postResponse').innerText = 'Error: ' + error;
    });
});

document.getElementById('getRequestButton').addEventListener('click', function() {
    fetch('YOUR_API_ENDPOINT')
    .then(response => response.json())
    .then(data => {
        document.getElementById('getResponse').innerText = JSON.stringify(data, null, 2);
    })
    .catch(error => {
        document.getElementById('getResponse').innerText = 'Error: ' + error;
    });
});
