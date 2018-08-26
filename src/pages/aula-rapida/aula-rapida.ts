import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
  }

  comecarJogo() {
    this.navCtrl.setRoot(PerguntasComponent)
  }

  lerLivro() {

  }

}
