class Storage {
  constructor() {
    this.city;
    this.defaulthCity = 'New York';
  }

  getLocationData() {
    if(localStorage.getItem('city') === null) {
      this.city = this.defaulthCity;
    } else {
      this.city = localStorage.getItem('city');
    }
    return {
      city: this.city
    }
  }

  setLocationData(city) {
    localStorage.setItem('city', city);
  }
}