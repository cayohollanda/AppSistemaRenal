import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the PerguntasComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'perguntas',
  templateUrl: 'perguntas.html'
})
export class PerguntasComponent {

  questao: FormGroup;

  numPergunta: number = 0;

  perguntas: any[] = [
    {

    },
    {
      pergunta: 'Pergunta 1?',
      alternativas: [
        { value: 'A', label: 'Letra A' },
        { value: 'B', label: 'Letra B' },
        { value: 'C', label: 'Letra C' },
        { value: 'D', label: 'Letra D' },
        { value: 'E', label: 'Letra E' }
      ],
      resposta: 'A'
    },
    {
      pergunta: 'Pergunta 2?',
      alternativas: [
        { value: 'A', label: 'Letra A' },
        { value: 'B', label: 'Letra B' },
        { value: 'C', label: 'Letra C' },
        { value: 'D', label: 'Letra D' },
        { value: 'E', label: 'Letra E' }
      ],
      resposta: 'B'
    }
  ];

  perguntaAtual: any;

  notReady: boolean = false;

  constructor(
    private fb: FormBuilder,
    public alertCtrl: AlertController
  ) { }

  ngOnInit() {
    this.questao = this.fb.group({
      resposta: ['', Validators.required]
    });
  }

  verificaResposta(pergunta: any) {

  }

  proximaPergunta() {

    if(this.questao.controls.resposta.value) {
      if(this.questao.controls.resposta.value == this.perguntaAtual.resposta) {
        console.log('Resposta correta!');
      } else {
        this.alertaRespostaInvalida();
      }
    }

    if(!this.notReady) {
      this.notReady = true;
    }

    if(!(this.numPergunta >= this.perguntas.length-1)) {
      this.numPergunta++;
      this.perguntaAtual = this.perguntas[this.numPergunta];
      this.questao.controls.resposta.reset();
    }
  }

  alertaRespostaInvalida() {
    let label = '';
    for(let alternativa of this.perguntaAtual.alternativas) {
      if(alternativa.value == this.perguntaAtual.resposta) { 
        label = alternativa.label;
      }
    }

    const alert = this.alertCtrl.create({
      title: 'Resposta incorreta',
      subTitle: 'A resposta correta é' + '\n' + this.perguntaAtual.resposta + ') ' + label,
      buttons: ['OK']
    });

    alert.present();
  }

}
