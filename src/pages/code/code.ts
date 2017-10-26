import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TimePage } from '../time/time';

@Component({
  selector: 'page-code',
  templateUrl: 'code.html',
})
export class CodePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CodePage');
  }

  goToHome(){
    this.navCtrl.setRoot(TimePage);
    this.navCtrl.popToRoot();
  }

}
