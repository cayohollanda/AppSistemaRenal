import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { PerguntasComponent } from '../../components/perguntas/perguntas';
import { AulaRapidaPage } from '../aula-rapida/aula-rapida';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
    public toastCtrl: ToastController
  ) { }

  ionViewDidLoad() {
    this.credito();
  }

  comecarJogo() {
    this.navCtrl.setRoot(PerguntasComponent);
  }

  aulaRapida() {
    this.navCtrl.setRoot(AulaRapidaPage);
  }

  credito() {
    const toast = this.toastCtrl.create({
      message: 'Desenvolvido por: Cayo Hollanda',
      duration: 5000,
      position: 'bottom'
    });

    toast.present();
  }

}
