document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('yearForm').addEventListener('submit', function (event) {
        event.preventDefault();

        const year = document.getElementById('yearInput').value;
        fetch('http://127.0.0.1:8000/is_leap_year/' + year + '/', {
            credentials: 'include',
            method: 'GET',
        })
            .then(response => response.json())
            .then(data => {
                document.getElementById('result').innerText = data.is_leap_year ? "Année bissextile" : "Année non bissextile";
            })
            .catch(error => {
                document.getElementById('result').innerText = 'Une erreur est survenue : ' + error.message;
            });

    });
});


