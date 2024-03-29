document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('yearForm').addEventListener('submit', function (event) {
        event.preventDefault();

        const yearInput = document.getElementById('yearInput');
        const year = parseInt(yearInput.value);
        const resultDiv = document.getElementById('result');
        const nextLeapYearDiv = document.getElementById('prochaineBissextile');

        if (!yearInput.value.trim()) {
            resultDiv.innerText = "Veuillez entrer une année.";
        } else if (!isValidYear(yearInput.value)) {
            resultDiv.innerText = "Veuillez entrer une année valide (4 chiffres).";
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
                    resultDiv.innerText = "L'année " + year + (data.isLeapYear ? " est" : " n'est pas") + " bissextile.";
                    const nextLeapYear = prochaineAnneeBissextile(year);
                    nextLeapYearDiv.innerText = "La prochaine année bissextile après " + year + " est : " + nextLeapYear;
                })
                .catch(error => {
                    resultDiv.innerText = 'Une erreur est survenue : ' + error.message;
                });
        }

        yearInput.value = '';
    });
});

function isValidYear(year) {
    return /^\d{4}$/.test(year);
}

function prochaineAnneeBissextile(apresAnnee) {
    let annee = apresAnnee + 1;

    while (true) {
        if ((annee % 4 === 0 && annee % 100 !== 0) || annee % 400 === 0) {
            return annee;
        }
        annee++;
    }
}


/*
.then(data => {
                    if (data.is_leap_year) {
                        resultDiv.innerText = year + " est une année bissextile.";
                    } else {
                        resultDiv.innerText = year + " n'est pas une année bissextile.";
                    }
                })
                */

