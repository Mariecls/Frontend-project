document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('refreshButton').addEventListener('click', function () {
        fetch('http://127.0.0.1:8000/history/')
            .then(response => {
                if (!response.ok) {
                    throw new Error('La requête a échoué.');
                }
                return response.json();
            })
            .then(data => {
                const historyList = document.getElementById('historyResult');
                historyList.innerHTML = '';

                // Vérifier si data est un tableau
                if (!Array.isArray(data)) {
                    throw new Error('Les données reçues ne sont pas au format attendu.');
                }

                // Parcourir les données et les afficher
                data.forEach(call => {
                    const listItem = document.createElement('li');
                    listItem.textContent = `Date de l'appel : ${call.date}, Endpoint : ${call.endpoint}, Résultat : ${call.result}`;
                    historyList.appendChild(listItem);
                });
            })
            .catch(error => {
                document.getElementById('historyResult').innerText = 'Une erreur est survenue : ' + error.message;
            });
    });
});
