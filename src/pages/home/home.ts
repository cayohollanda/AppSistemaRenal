import { Component, ViewChild } from '@angular/core';
import { NavController, Nav } from 'ionic-angular';
import { PerguntasComponent } from '../../components/perguntas/perguntas';
import { MeuPerfilComponent } from '../../components/meu-perfil/meu-perfil';

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

  meuPerfil() {
    this.navCtrl.setRoot(MeuPerfilComponent);
  }

}
