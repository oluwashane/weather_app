class Weather {
  constructor(city) {
    //Key = e08dd1fdeb666e16a55128bcc6b9d982
    this.apiKey = 'e08dd1fdeb666e16a55128bcc6b9d982';
    this.city = city;
  }

  //fetch weather from api
  async getWeather() {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}`)
    const resData = await response.json();
    return resData
  } 

  //Change Weather Location
  changeLocation(city) {
    this.city = city;
  }
}