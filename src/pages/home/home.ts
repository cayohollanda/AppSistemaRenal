import { Component, ViewChild } from '@angular/core';
import { NavController, Nav } from 'ionic-angular';
import { PerguntasComponent } from '../../components/perguntas/perguntas';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
  ) { }

  jogar() {
    this.navCtrl.setRoot(PerguntasComponent);
  }

}
