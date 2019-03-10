
class UI {
  constructor() {
    this.wLocation = document.querySelector('#w-location');
    this.wDesc = document.querySelector('#w-desc');
    this.wHumidity = document.querySelector('#w-humidity');
    this.wPressure = document.querySelector('#w-pressure');
    this.wTemp = document.querySelector('#w-temp');
    this.wWind = document.querySelector('#w-wind');
    this.wIcon = document.querySelector('#w-icon'); 

  }

  paint(data) {
    this.wLocation.innerHTML =  `${data.name} ${data.sys.country}`;
    this.wDesc.innerHTML = data.weather[0].description;
    this.wHumidity.innerHTML = `Humidity: ${data.main.humidity}%`;
    this.wPressure.innerHTML = `Pressure: ${Math.trunc(data.main.pressure)}MB`;
    this.wTemp.innerHTML = `Temperature: ${parseInt(data.main.temp - 273.15)}°C`;
    this.wWind.innerHTML = `Wind: ${data.wind.speed}MPH`;
    this.wIcon.setAttribute('src', `http://openweathermap.org/img/w/${data.weather[0].icon}.png`);
    console.log(data)
  }
}
/* console.log(, , ,,,, )  */