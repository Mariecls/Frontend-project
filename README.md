 #  API DJANGO 

Ce projet est le front d'une API ,c'est une application web pour vérifier si une année est bissextile et afficher les résultats sur différentes pages.

  
## Installation
Pour cloner le front depuis GITHUB il faut utiliser  ``` pip install git+https://github.com/Mariecls/Frontend-project.git ```


## Usage


### Technologies utilisées


HTML 
CSS 
JS


### Accès à l'application :

Ouvrez le fichier index.html dans votre navigateur web.

### Fonctionnalités de l'Application :

### Page d'Accueil :

 Permet de vérifier si une année est bissextile en saisissant une année dans un formulaire.
Affiche le résultat de la requête sur la même page, indiquant si l'année est bissextile ou non.

 ### Nouvelle Page - Plage d'Années :

Accessible depuis la page d'accueil.
Permet de spécifier une plage d'années dans un formulaire.
Intègre un bouton pour récupérer les années bissextiles dans la plage en utilisant le deuxième endpoint de l'API.
Affiche le résultat de manière claire et lisible sur la même page.

### Historique :

Ajoute une troisième page pour afficher l'historique des appels aux endpoints.
Intègre un bouton pour actualiser l'historique en utilisant le troisième endpoint de l'API.
Affiche les résultats avec toutes les informations nécessaires, y compris le retour de la requête, l'endpoint utilisé et la date de l'appel.