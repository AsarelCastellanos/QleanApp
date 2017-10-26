import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
//Pages
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { MachinePage } from '../pages/machine/machine';
import { ReservePage } from '../pages/reserve/reserve';
import { TimePage } from '../pages/time/time';
import { InfoPage } from '../pages/info/info';
import { TabsPage } from '../pages/tabs/tabs';
import { SettingsPage } from '../pages/settings/settings';
import { CodePage } from '../pages/code/code';
import { PaymentPage } from '../pages/payment/payment';
//Other
import { CreditCardDirectivesModule } from 'angular-cc-library';
import { TodoServiceProvider } from '../providers/todo-service/todo-service';
import {AppSettingsProvider } from '../providers/app-settings/app-settings';
import { DataServiceProvider } from '../providers/data-service/data-service';
import { HttpModule } from '@angular/http';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Geolocation } from '@ionic-native/geolocation'
import{ NumericModule} from 'ionic2-numericpicker';
import { Stripe } from '@ionic-native/stripe';
// import { ConnectivityProvider } from '../provders/connectivity/connectivity';
// import { GoogleMapsProvider } from '../providers/google-maps/google-maps';
// import { LocationsProvider } from '../providers/locations/locations';
// import { MapPage } from '../pages/map/map';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    MachinePage,
    ReservePage,
    TimePage,
    InfoPage,
    TabsPage,
    SettingsPage,
    TimePage,
    CodePage,
    PaymentPage

  ],
  imports: [
    BrowserModule,
    HttpModule,
    NumericModule,
    IonicModule.forRoot(MyApp)
  ],

  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    MachinePage,
    ReservePage,
    TimePage,
    InfoPage,
    TabsPage,
    SettingsPage,
    TimePage,
    CodePage,
    PaymentPage
    
  ],
  providers: [
    CreditCardDirectivesModule,
    Stripe,
    StatusBar,
    SplashScreen,
    Geolocation,
    TodoServiceProvider,
    AppSettingsProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataServiceProvider]
  
})
export class AppModule {}
