import { Component } from '@angular/core';
import { NavController, ToastController, Platform } from 'ionic-angular';
import { PerguntasComponent } from '../../components/perguntas/perguntas';
import { AulaRapidaPage } from '../aula-rapida/aula-rapida';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
    public toastCtrl: ToastController,
    public platform: Platform
  ) {
    this.platform.registerBackButtonAction(() => {
      if (this.navCtrl.canGoBack()) { // CHECK IF THE USER IS IN THE ROOT PAGE.
        this.navCtrl.pop(); // IF IT'S NOT THE ROOT, POP A PAGE.
      } else {
        this.platform.exitApp(); // IF IT'S THE ROOT, EXIT THE APP.
      }
    })
  }

  ionViewDidLoad() {
    this.credito();
  }

  comecarJogo() {
    this.navCtrl.push(PerguntasComponent);
  }

  aulaRapida() {
    this.navCtrl.push(AulaRapidaPage);
  }

  credito() {
    const toast = this.toastCtrl.create({
      message: 'Desenvolvido por: Cayo Hollanda',
      duration: 3000,
      position: 'bottom'
    });

    toast.present();
  }

}
