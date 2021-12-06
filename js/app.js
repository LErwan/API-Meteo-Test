const APIKEY = '8a06a543f64a68f67943a25389b86879';

//Appel à l'API meteo avec ville en paramètre de fonction

let apiCall = function(city){ // fonction qui prend en paramètre la ville (city)
    let url = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKEY + "&units=metric&lang=fr"; // url avec ville par défaut


    fetch(url).then(response => 
        response.json().then((data) => { //appel url then récupère response on traite en json puis récupère data afficher en console
        console.log(data);
        document.querySelector('#city').innerHTML ='Ville : ' + data.name; //je change son html ajoute icon et le nom de la ville va à l'intérieur clé name de data donne la ville
        document.querySelector('#temp').innerHTML ='<i class="fas fa-thermometer-half"></i>' + data.main.temp + " ° "; //clé temp dans main dans data donne le temps
        document.querySelector('#humidity').innerHTML ='<i class="fas fa-tint"></i>' + data.main.humidity + " % ";
        document.querySelector('#wind').innerHTML ="<i class='fas fa-wind'></i>" + data.wind.speed + " km/h ";
        })
    ).catch(err => console.log('Erreur : ' + err)); 
}

//Ecouteur d'événement sur soumission du formulaire

document.querySelector('form').addEventListener('submit', function(e){ //on ecoute la soumission du du formulaire (submit) et fonction en paramètre event
    e.preventDefault(); // casser événement par défaut
    let ville = document.querySelector('#inputcity').value; //on veut récupérer valeur de input

    apiCall(ville);
});

//Appel par défaut au chargement de la page

apiCall('Carvin'); 