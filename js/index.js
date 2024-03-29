document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('yearForm').addEventListener('submit', function (event) {
        event.preventDefault();

        const yearInput = document.getElementById('yearInput');
        const year = parseInt(yearInput.value);
        const resultDiv = document.getElementById('result');

        if (!yearInput.value.trim()) {
            resultDiv.innerText = "Veuillez entrer une année.";
        } else if (isNaN(year) || year.toString().length !== 4) {
            resultDiv.innerText = "Veuillez entrer une année valide de quatre chiffres.";
        } else {
            fetch('http://127.0.0.1:8000/is_leap_year/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ year: year })
            })
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

/*
.then(data => {
                    if (data.is_leap_year) {
                        resultDiv.innerText = year + " est une année bissextile.";
                    } else {
                        resultDiv.innerText = year + " n'est pas une année bissextile.";
                    }
                })
                */

