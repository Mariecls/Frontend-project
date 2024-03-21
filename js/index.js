document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('yearForm').addEventListener('submit', function (event) {
        event.preventDefault();

        const yearInput = document.getElementById('yearInput');
        const year = parseInt(yearInput.value);
        const resultDiv = document.getElementById('result');

        if (!yearInput.value.trim()) {
            resultDiv.innerText = "Veuillez entrer une année.";
        } else {
            fetch('http://127.0.0.1:8000/is_leap_year/' + year + '/')
                .then(response => {
                    if (!response.ok) {
                        throw new Error('La requête a échoué.');
                    }
                    return response.json();
                })
                .then(data => {
                    if (data.is_leap_year) {
                        resultDiv.innerText = year + " est une année bissextile.";
                    } else {
                        resultDiv.innerText = year + " n'est pas une année bissextile.";
                    }
                })
                .catch(error => {
                    resultDiv.innerText = 'Une erreur est survenue : ' + error.message;
                });
        }

        yearInput.value = '';
    });
});
