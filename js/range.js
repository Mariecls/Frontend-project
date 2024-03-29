document.getElementById('rangeForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const startYear = document.getElementById('startYearInput').value;
    const endYear = document.getElementById('endYearInput').value;
    const rangeResult = document.getElementById('rangeResult');

    const isValidYear = (year) => /^\d{4}$/.test(year);

    if (!isValidYear(startYear) || !isValidYear(endYear)) {
        rangeResult.innerText = "Veuillez entrer une année de début et une année de fin valides (4 chiffres).";
    } else if (parseInt(startYear) >= parseInt(endYear)) {
        rangeResult.innerText = "L'année de début doit être inférieure à l'année de fin.";
    } else {
        fetch('http://127.0.0.1:8000/leap_years_in_range/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ startYear: startYear, endYear: endYear })
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('La requête a échoué.');
                }
                return response.json();
            })
            .then(data => {
                if (data.hasOwnProperty('years') && Array.isArray(data.years)) {
                    rangeResult.innerText = "Les années bissextiles entre " + startYear + " et " + endYear + " sont : " + data.years.join(', ');
                } else {
                    throw new Error('Les données reçues ne sont pas au format attendu.');
                }
            })
            .catch(error => {
                rangeResult.innerText = 'Une erreur est survenue : ' + error.message;
            });
    }
});
