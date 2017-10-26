import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MachinePage } from '../machine/machine';

import { TodoServiceProvider } from '../../providers/todo-service/todo-service';
import { AppSettingsProvider } from '../../providers/app-settings/app-settings';
import {DataServiceProvider } from '../../providers/data-service/data-service';
/**
 * Generated class for the TimePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-time',
  templateUrl: 'time.html',

})

export class TimePage {
  splash = true;
  slides = [
    {
      image: "../../assets/img/bluewasher.png"
    },
    {
      image: "../../assets/img/bluewasher.png",
    },
    {
      image: "../../assets/img/bluewasher.png",
    }
  ];
  myDay;
  myStart: string;
  myCycle: string;


  constructor(private dataService: DataServiceProvider,public navCtrl: NavController, public navParams: NavParams, public service: TodoServiceProvider) {

  }

  ionViewDidLoad() {
    setTimeout(() => {
      this.splash = false;
    }, 2000);
    console.log('ionViewDidLoad TimePage');
    // var myStart: String = new Date().toISOString();
    // console.log(myStart);
  }
  load() {
    this.dataService.addTime(this.myDay,this.myStart,this.myCycle);
    this.navCtrl.push(MachinePage, {
      day: this.myDay,
      start: this.myStart,
      cycle: this.myCycle
    })
    console.log(this.myDay);
    console.log(this.myStart);
    console.log(this.myCycle);
    // this.service.addMachine();
  }
}
