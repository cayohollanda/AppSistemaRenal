import { Platform, NavController, AlertController } from 'ionic-angular';
import { Component } from '@angular/core';

/**
 * Generated class for the MeuPerfilComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'meu-perfil',
  templateUrl: 'meu-perfil.html'
})
export class MeuPerfilComponent {

  record: string;
  tentativas: string;
  tentativasParaZerar: string;

  constructor(public platform: Platform, public navCtrl: NavController, public alertCtrl: AlertController) {
    this.platform.registerBackButtonAction(() => {
      if (this.navCtrl.canGoBack()) { // CHECK IF THE USER IS IN THE ROOT PAGE.
        this.navCtrl.pop(); // IF IT'S NOT THE ROOT, POP A PAGE.
      } else {
        this.platform.exitApp(); // IF IT'S THE ROOT, EXIT THE APP.
      }
    });
  }

  ngOnInit() {
    this.record = localStorage.getItem('record');
    this.tentativas = localStorage.getItem('tentativas');
    this.tentativasParaZerar = localStorage.getItem('tentativasParaZerar');

    if(this.record == null) {
      this.record = 'Nenhum record ainda';
    }

    if(this.tentativas == null) {
      this.tentativas = 'Nenhuma tentativa ainda';
    }

    if(this.tentativasParaZerar == null) {
      this.tentativasParaZerar = 'Você ainda não zerou o jogo!'
    } else {
      this.tentativasParaZerar += ' tentativas';
    }
  }

  zerarPontuacao() {
    const alert = this.alertCtrl.create({
      title: 'Tem certeza que deseja zerar a sua pontuação?',
      message: 'Seus dados não poderão ser recuperados após isso!',
      buttons: [
        {
          text: 'Sim',
          handler: () => {
            localStorage.removeItem('record');
            localStorage.removeItem('tentativas');
            localStorage.removeItem('tentativasParaZerar');
            this.alertPontuacaoZeradaComSucesso();
          }
        },
        {
          text: 'Não',
          handler: () => {

          }
        }
      ]
    });

    alert.present();
  }

  alertPontuacaoZeradaComSucesso() {
    const alert = this.alertCtrl.create({
      title: 'Pontuação zerada com sucesso!',
      buttons: [
        {
          text: 'Ok! :)'
        }
      ]
    });

    alert.present();
  }

}
