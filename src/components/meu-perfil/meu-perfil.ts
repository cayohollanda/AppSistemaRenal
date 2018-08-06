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

  constructor() { }

  ngOnInit() {
    this.record = localStorage.getItem('record');
    this.tentativas = localStorage.getItem('tentativas');

    if(this.record == null) {
      this.record = 'Nenhum record ainda';
    }

    if(this.tentativas == null) {
      this.tentativas = 'Nenhuma tentativa ainda';
    }

    console.log(this.record);
    console.log(this.tentativas);
  }

}
