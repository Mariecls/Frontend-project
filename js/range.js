document.getElementById('rangeForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const startYear = document.getElementById('startYearInput').value;
    const endYear = document.getElementById('endYearInput').value;
    const rangeResult = document.getElementById('rangeResult');

    fetch(`http://127.0.0.1:8000/leap_years_in_range/${startYear}/${endYear}/`)
        .then(response => {
            if (!response.ok) {
                throw new Error('La requête a échoué.');
            }
            return response.json();
        })
        .then(data => {
            // Vérifiez si la clé years existe dans la réponse
            if (data.hasOwnProperty('years') && Array.isArray(data.years)) {
                rangeResult.innerText = data.years.join(', ');
            } else {
                throw new Error('Les données reçues ne sont pas au format attendu.');
            }
        })
        .catch(error => {
            rangeResult.innerText = 'Une erreur est survenue : ' + error.message;
        });
});
