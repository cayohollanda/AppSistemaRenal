import { Component, ViewChild } from '@angular/core';
import { NavController, Nav } from 'ionic-angular';
import { PerguntasComponent } from '../../components/perguntas/perguntas';
import { MeuPerfilComponent } from '../../components/meu-perfil/meu-perfil';
import { AulaRapidaPage } from '../aula-rapida/aula-rapida';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
  ) { }

  comecarJogo() {
    this.navCtrl.setRoot(PerguntasComponent);
  }

  aulaRapida() {
    this.navCtrl.setRoot(AulaRapidaPage);
  }

}
