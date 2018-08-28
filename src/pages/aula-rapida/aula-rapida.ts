import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { PerguntasComponent } from '../../components/perguntas/perguntas';

/**
 * Generated class for the AulaRapidaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-aula-rapida',
  templateUrl: 'aula-rapida.html',
})
export class AulaRapidaPage {

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
  }

  comecarJogo() {
    this.navCtrl.push(PerguntasComponent)
  }

  lerLivro() {

  }

}
