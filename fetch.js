const dogImg = document.getElementById('dogImg');

function getRandomDog(){
    fetch('https://dog.ceo/api/breeds/image/random')
    //parse svar som json hvis fetch bliver resolved
    // Vent på at svar parses som json
    .then(response => response.json())
    .then(data => {
        console.log(data)
        dogsList = data.message;
        dogImg.src = dogsList;
    } )
    // Vis fejl hvis der er en
    .catch(err => console.error(err))
}
getRandomDog();