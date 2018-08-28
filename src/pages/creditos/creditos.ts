import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';

/**
 * Generated class for the CreditosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-creditos',
  templateUrl: 'creditos.html',
})
export class CreditosPage {

  easterEgg: number;
  admin: number;

  passAdmin: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public platform: Platform) {
    this.platform.registerBackButtonAction(() => {
      if (this.navCtrl.canGoBack()) { // CHECK IF THE USER IS IN THE ROOT PAGE.
        this.navCtrl.pop(); // IF IT'S NOT THE ROOT, POP A PAGE.
      } else {
        this.platform.exitApp(); // IF IT'S THE ROOT, EXIT THE APP.
      }
    });
  }

  ionViewDidLoad() {
    this.easterEgg = 0;
    this.admin = 0;
  }

  acaoAdmin() {
    if(this.passAdmin != null) {
      if(this.passAdmin === 'reseta-scores') {
        localStorage.setItem('record', '0');
        localStorage.setItem('tentativas', '0');
        localStorage.setItem('tentativasParaZerar', '0');
      }
    }
  }

  counterEasterEgg() {
    this.easterEgg++;
  }

  counterAdmin() {
    this.admin++;
  }

}
