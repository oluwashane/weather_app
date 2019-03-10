//init storage
const storage = new Storage();

//Get stored location data
const wLocation = storage.getLocationData();

const weather = new Weather(wLocation.city);


const ui = new UI();

document.addEventListener('DOMContentLoaded', getWeather);

//Change Location Event 
document.getElementById('w-change-btn').addEventListener('click', (e) => {
  const city = document.querySelector('#state').value
  weather.changeLocation(city);
  //Add to L storage
  storage.setLocationData(city);
  //Get and display weather
  getWeather();
  $('#locModal').modal('hide');
})

function getWeather() {
  weather.getWeather()
  .then(data => {
    ui.paint(data);
    
  })
  .catch(err => console.log(err)) 
}


  

/*   unirest.get("https://weatherbit-v1-mashape.p.rapidapi.com/current?lat={lat}&lon={lon}")
  .header("X-RapidAPI-Key", "99d66173e6mshce123e5a3d0ed35p13b0abjsnfd8275e93f62")
  .end(function (result) {
    console.log(result.status, result.headers, result.body);
  }); */


