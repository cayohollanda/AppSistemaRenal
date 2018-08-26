import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { PerguntasComponent } from '../components/perguntas/perguntas';
import { MeuPerfilComponent } from '../components/meu-perfil/meu-perfil';
import { AulaRapidaPage } from '../pages/aula-rapida/aula-rapida';
import { CreditosPage } from '../pages/creditos/creditos';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    PerguntasComponent,
    MeuPerfilComponent,
    AulaRapidaPage,
    CreditosPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    PerguntasComponent,
    MeuPerfilComponent,
    AulaRapidaPage,
    CreditosPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
