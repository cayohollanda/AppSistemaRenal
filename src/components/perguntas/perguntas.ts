import { Component, ErrorHandler } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController, ToastController } from 'ionic-angular';

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

  perguntasAcertadas: number = 0;

  perguntas: any[] = [
    {

    },
    {
      pergunta: 'Qual destas não é uma função do rim?',
      alternativas: [
        { value: 'A', label: 'Eliminação de proteínas' },
        { value: 'B', label: 'Regulação do volume de água' },
        { value: 'C', label: 'Regulação do balanço eletrolítico' },
        { value: 'D', label: 'Conservação de nutrientes' },
        // { value: 'E', label: 'Letra E' }
      ],
      resposta: 'A',
      explicacao: 'Proteínas são macromoléculas que não são filtradas pelos néfrons devido ao seu tamanho.'
    },
    {
      pergunta: 'Indivíduos com maior número de néfrons de alça longa são capazes de:',
      alternativas: [
        { value: 'A', label: 'Menor reabsorção de água' },
        { value: 'B', label: 'Urina menos concentrada' },
        { value: 'C', label: 'Aumentar a quantidade de urina produzida' },
        { value: 'D', label: 'Maior reabsorção de água' },
      ],
      resposta: 'D'
    }
  ];

  perguntaAtual: any;

  notReady: boolean = false;

  constructor(
    private fb: FormBuilder,
    public alertCtrl: AlertController,
    public toastCtrl: ToastController
  ) { }

  ngOnInit() {
    this.questao = this.fb.group({
      resposta: ['', Validators.required]
    });
  }

  verificaResposta(pergunta: any) {

  }

  proximaPergunta(resposta) {

    if(resposta) {
      if(resposta == this.perguntaAtual.resposta) {
        this.alertaResponsaValida();
        this.perguntasAcertadas++;
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

  alertaResponsaValida() {
    const alert = this.alertCtrl.create();
    alert.setTitle('Resposta correta!');
    alert.setSubTitle('Sua resposta está correta. Parabéns!');
    alert.addButton('Thanks! :))');

    alert.present();
    // const toast = this.toastCtrl.create({
    //   message: 'Resposta correta!!',
    //   duration: 2000
    // });
    // toast.present();
  }

  alertaRespostaInvalida() {
    let label = '';
    for(let alternativa of this.perguntaAtual.alternativas) {
      if(alternativa.value == this.perguntaAtual.resposta) { 
        label = alternativa.label;
      }
    }

    const alert = this.alertCtrl.create();
    alert.setTitle('Resposta incorreta!');
    alert.setSubTitle('Resposta correta => ' + label);
    alert.setMessage('Explicação => ' + this.perguntaAtual.explicacao);
    alert.addButton('Okay :(');

    alert.present();
    // const toast = this.toastCtrl.create({
    //   message: 'Resposta Incorreta! A resposta correta é (' + label + '). ' + this.perguntaAtual.explicacao,
    //   showCloseButton: true,
    //   // duration: 4000,
    //   closeButtonText: 'OK'
    // });
    // toast.present();
  }

}
