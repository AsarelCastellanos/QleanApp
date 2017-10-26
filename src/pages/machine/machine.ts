import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TodoServiceProvider } from '../../providers/todo-service/todo-service';
import { AboutPage} from '../about/about';
import { Observable } from "rxjs/Observable";
import { DataServiceProvider } from '../../providers/data-service/data-service';

@Component({
  selector: 'page-machine',
  templateUrl: 'machine.html',
  
})
export class MachinePage {
  title: string;
  machines: Observable<any>;
  day: string;
  cycle: string;
  start: string;
  washer: string;
  dryer: string;
  

  // constructor(public navCtrl: NavController, public navParams: NavParams, public todoService:TodoServiceProvider) {
  //   console.log(navParams.data)
  //   this.title = navParams.data.title;
  // }

  constructor(private dataService: DataServiceProvider,public navCtrl: NavController, public navParams: NavParams, ) {
    console.log(navParams.data)
    this.title = navParams.data.title;
    this.day = navParams.get('day');
    this.cycle = navParams.get('cycle');
    this.start = navParams.get('start');
    console.log(this.cycle, this.day, this.start);
  }

  loadMachines() {
    // this.machines = this.todoService.getMachines();
  }
  addMachine() {
      // let prompt = this.alertCtrl.create({
      //   title: 'Dirty Clothes',
      //   message: "Clothes you have to wash now...",
      //   inputs: [
      //     {
      //       name: 'text',
      //       placeholder: 'Remember to delete clothes that are clean!'
      //     },
      //   ],
      //   buttons: [
      //     {
      //       text: 'Cancel'
      //     },
      //     {Save',
      //       text: '
      //       handler: data => {
      //         this.todoService.addMachine(data.text).subscribe(data => {
      //           this.showToast(data.msg);
      //           this.loadMachines();
      //         });
      //       }
      //     }
      //   ]
      // });
      // prompt.present();
    }
    removeMachine(id) {
      // this.todoService.deleteMachine(id).subscribe(data =>{
      //   this.loadMachines();
      //  duration:3000
      // });
    //  toast.present();
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MachinePage');
    
  }
load(){
    console.log(this.washer);
    console.log(this.dryer);
    this.dataService.addMachine(this.washer,this.dryer);
    
   	this.navCtrl.push(AboutPage, {
       day: this.day,
       start: this.start,
       washers: this.washer,
       dryers: this.dryer
     })

   }
}
