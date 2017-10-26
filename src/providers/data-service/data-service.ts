import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the DataServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class DataServiceProvider {
  data = {
    day: '',
    start: '',
    load: '',
    washer: '',
    dryer: '',
    place: '',
    location: '',
    img: ''
  };
  constructor(public http: Http) {
    console.log('Hello DataServiceProvider Provider');
  }

  addTime(day,start,load){
    this.data.day = day;
    this.data.start =start;
    this.data.load = load;
    

    console.log(this.data);
  }

  addMachine(washer,dryer){
    this.data.washer = washer;
    this.data.dryer = dryer;

    console.log(this.data);
  }

  addLocation(place,location,img){
    this.data.place = place;
    this.data.location = location;
    this.data.img = img;

    console.log(this.data);
  }

  returnData(){
    return this.data;
  }

}
