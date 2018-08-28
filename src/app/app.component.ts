import { AgradecimentosPage } from './../pages/agradecimentos/agradecimentos';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { PerguntasComponent } from '../components/perguntas/perguntas';
import { MeuPerfilComponent } from '../components/meu-perfil/meu-perfil';
import { CreditosPage } from '../pages/creditos/creditos';
import { AulaRapidaPage } from '../pages/aula-rapida/aula-rapida';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Início', component: HomePage },
      { title: 'Jogar', component: PerguntasComponent },
      { title: 'Aula rápida', component: AulaRapidaPage },
      { title: 'Meu perfil', component: MeuPerfilComponent },
      { title: 'Créditos', component: CreditosPage },
      { title: 'Agradecimentos', component: AgradecimentosPage }
    ];

    this.platform.registerBackButtonAction(() => {
      this.platform.exitApp()
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.push(page.component);
  }
}
