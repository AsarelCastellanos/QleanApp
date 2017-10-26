import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {InfoPage} from '../info/info';
import {DataServiceProvider } from '../../providers/data-service/data-service';
import {DomSanitizer} from '@angular/platform-browser';
import { ModalController } from 'ionic-angular';
import { CodePage } from '../code/code';
import { PaymentPage } from '../payment/payment';

@Component({
  selector: 'page-reserve',
  templateUrl: 'reserve.html',
})
export class ReservePage {
  data;
  costs = {
    washer: 0,
    dryer: 0,
    total: 0
  }
  constructor(public modalCtrl: ModalController,private dataService:DataServiceProvider,public _DomSanitizationService: DomSanitizer,public navCtrl: NavController, public navParams: NavParams) {
    this.data = this.dataService.returnData();
    this.costs.washer = parseInt(this.data.washer) * 2.75;
    this.costs.dryer = parseInt(this.data.dryer) * .5; 
    this.costs.total = this.costs.washer + this.costs.dryer;
  }

  ionViewDidLoad() {
    
    console.log('ionViewDidLoad ReservePage');
  }

  payout(){
    this.navCtrl.push(CodePage)
  }

  goToPayment(){
    this.navCtrl.push(PaymentPage)
  }

}
