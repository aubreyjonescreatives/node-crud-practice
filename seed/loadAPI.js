import axios from 'axios'; 

const options = {
    method: 'GET', 
    url: 'https://deckofcardsapi.com/api/deck/new/draw/?count=25', 
  //  params: {}, 
  //  headers: {'access-token': process.env.SUPERHERO_API_KEY}
}; 


axios.request(options).then(function(response) {
    stuffMongo(response.data); 
}).catch(function (error) {
    console.error(error); 
}); 

const stuffMongo = (cardList) => {
    console.log(cardList)
    
}