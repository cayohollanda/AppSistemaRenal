import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController, ToastController, ModalController, NavController, Platform } from 'ionic-angular';
import { HomePage } from '../../pages/home/home';

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
      resposta: 'D',
      explicacao: 'Uma alça mais comprida significa um maior ramo descendente fino, local onde ocorre a reabsorção de água.'
    },
    {
      pergunta: 'Na primeira etapa da formação da urina, qual a quantidade de plasma filtrada pelo glomérulo?',
      alternativas: [
        { value: 'A', label: '20%' },
        { value: 'B', label: '50%' },
        { value: 'C', label: '80%' },
        { value: 'D', label: 'Em condições normais, aproximadamente todo o plasma é filtrado pelo glomérulo' },
      ],
      resposta: 'A',
      explicacao: 'As forças hidrostáticas do sangue contra o capilar são responsáveis pela passagem de 20% do plasma.'
    },
    {
      pergunta: 'O que ocorre com o plasma não filtrado assim que sai dos glomérulos?',
      alternativas: [
        { value: 'A', label: 'Circula pelos capilares peritubulares' },
        { value: 'B', label: 'Segue caminho pela arteríola aferente' },
        { value: 'C', label: 'Retorna à circulação sanguínea' },
        { value: 'D', label: 'Todas as afirmativas estão corretas' },
      ],
      resposta: 'A',
      explicacao: 'O plasma que não atravessa os capilares glomerulares continua o caminho pela arteríola eferente, onde circulará por uma rede de capilares que acompanham o trajeto do néfron.'
    },
    {
      pergunta: 'Qual a principal diferença entre o plasma e o filtrado ao sair do glomérulo?',
      alternativas: [
        { value: 'A', label: 'A presença de poucas macromoléculas no filtrado' },
        { value: 'B', label: 'A diferença da concentração de glicose no filtrado' },
        { value: 'C', label: 'A maior quantidade de água no filtrado, que será reabsorvida posteriormente' },
        { value: 'D', label: 'A presença de hormônios secretados pelo rim no filtrado' },
      ],
      resposta: 'A',
      explicacao: 'O filtrado se caracteriza pela ausência de macromoléculas, uma vez que estas não conseguem passar pelas fenestras do capilar glomerular.'
    },
    {
      pergunta: 'Qual processo é definido como o transporte de substâncias do interior tubular para o sangue?',
      alternativas: [
        { value: 'A', label: 'Reabsorção tubular' },
        { value: 'B', label: 'Secreção tubular' },
        { value: 'C', label: 'Excreção tubular' },
        { value: 'D', label: 'Absorção tubular' },
      ],
      resposta: 'A',
      explicacao: 'A secreção refere-se ao transporte do sangue para o interior tubular; a excreção refere-se à eliminação final pela uretra; e a absorção ocorre no sistema digestivo.'
    },
    {
      pergunta: 'Quais os solutos mais abundantes no filtrado glomerular?',
      alternativas: [
        { value: 'A', label: 'Na+ e Cloreto' },
        { value: 'B', label: 'H20 e Sódio' },
        { value: 'C', label: 'Mg2+ e H20' },
        { value: 'D', label: 'Sódio e Magnésio' },
      ],
      resposta: 'A',
      explicacao: 'A água é considerada solvente e, sendo assim, os solutos mais presentes no filtrado glomerular serão o cloreto e o sódio.'
    },
    {
      pergunta: 'Os gradientes osmóticos resultantes da reabsorção de solutos são importantes para:',
      alternativas: [
        { value: 'A', label: 'Reabsorção passiva de água' },
        { value: 'B', label: 'Produção de urina menos concentrada' },
        { value: 'C', label: 'Manter o equilíbrio da osmolaridade' },
        { value: 'D', label: 'Gerar energia para a secreção de glicose e aminoácidos' },
      ],
      resposta: 'A',
      explicacao: 'As forças osmóticas irão induzir a passagem da água do interior tubular para o sangue. Tais forças são consideradas passivas por não requisitarem gasto energético durante a reabsorção da água.'
    },
    {
      pergunta: 'Quais dessas substâncias têm sua quantidade no filtrado inalterada desde a filtração glomerular até a excreção pela uretra?',
      alternativas: [
        { value: 'A', label: 'Inulina' },
        { value: 'B', label: 'Potássio' },
        { value: 'C', label: 'Tiamina' },
        { value: 'D', label: 'Ácido Úrico' },
      ],
      resposta: 'A',
      explicacao: 'Entre as substâncias listadas, a inulina é a única que não será reabsorvida ou secretada durante todo o processo da formação da urina. Todas as outras serão tanto reabsorvidas quanto secretadas, assim tendo sua quantidade bastante variada no filtrado.'
    },
    {
      pergunta: 'Quais estruturas estão localizadas na zona medular do rim?',
      alternativas: [
        { value: 'A', label: 'Todas as afirmativas estão corretas' },
        { value: 'B', label: 'Alças de Henle' },
        { value: 'C', label: 'Ductos Coletores' },
        { value: 'D', label: 'Vasos sanguíneos' },
      ],
      resposta: 'A',
      explicacao: 'Tais estruturas estão localizadas nos chamados raios medulares, que são formações alongadas em formato de leque presentes na zona medular do rim.'
    },
    {
      pergunta: 'Qual o principal local de controle do ritmo de filtração glomerular?',
      alternativas: [
        { value: 'A', label: 'No aparelho justaglomerular' },
        { value: 'B', label: 'Na área cibriforme' },
        { value: 'C', label: 'Na artéria renal' },
        { value: 'D', label: 'No interior da cápsula de bowman' },
      ],
      resposta: 'A',
      explicacao: 'É no aparelho justaglomerular que ocorrerá a regulação enzimática da regulação da pressão arterial, modelando assim o RFG (Ritmo de Filtração Glomerular).'
    },
    {
      pergunta: 'Qual a principal importância da renina no sistema renal?',
      alternativas: [
        { value: 'A', label: 'Regulação da pressão arterial sanguínea' },
        { value: 'B', label: 'Aumentar a reabsorção de água' },
        { value: 'C', label: 'Regulação da pressão osmótica no interior tubular' },
        { value: 'D', label: 'Reabsorção de íons de sódio' },
      ],
      resposta: 'A',
      explicacao: 'A renina é liberada pelas células justaglomerulares e é capaz de causar vasoconstrição, aumentando dessa forma a pressão arterial.'
    },
    {
      pergunta: 'Qual característica não está relacionada com as células mesangiais?',
      alternativas: [
        { value: 'A', label: 'Detecção do nível da pressão arterial' },
        { value: 'B', label: 'Sustentação das alças capilares no glomérulo' },
        { value: 'C', label: 'Capacidade de fagocitar agregados moleculares' },
        { value: 'D', label: 'Possuem importantes receptores hormonais' },
      ],
      resposta: 'A',
      explicacao: 'Tal característica está relacionada com as células da mácula densa no aparelho justaglomerular.'
    },
    {
      pergunta: 'Onde está localizado o filtrado glomerular?',
      alternativas: [
        { value: 'A', label: 'No espaço de bowman' },
        { value: 'B', label: 'Nos capilares glomerulares' },
        { value: 'C', label: 'Nos capilares peritubulares' },
        { value: 'D', label: 'Nas arteríolas aferente e eferente' },
      ],
      resposta: 'A',
      explicacao: 'O filtrado glomerular terá origem do plasma proveniente da arteríola aferente, que será filtrado através dos capilares glomerulares e que então ocupará o espaço de bowman.'
    },

    {
      pergunta: 'Quais estruturas se interpenetram para originar as fendas de filtração?',
      alternativas: [
        { value: 'A', label: 'Pedicelos' },
        { value: 'B', label: 'Podócitos' },
        { value: 'C', label: 'Sialoproteínas' },
        { value: 'D', label: 'Glicoproteínas' },
      ],
      resposta: 'A',
      explicacao: 'As fendas de filtração são formadas pelos pedicelos, que se apoiam sobre a membrana basal e são conectados pela membrana diafragmática.'
    },

    {
      pergunta: 'Qual camada é a principal responsável pelas propriedades de permeabilidade do glomérulo?',
      alternativas: [
        { value: 'A', label: 'Membrana basal' },
        { value: 'B', label: 'Membrana diafragmática' },
        { value: 'C', label: 'Endotélio do capilar' },
        { value: 'D', label: 'Fenda de filtração' },
      ],
      resposta: 'A',
      explicacao: 'Por ser a única camada contínua, é considerada a camada que determina as propriedades de permeabilidade. Possui poros muito pequenos que limitam o tamanho das moléculas que serão filtradas.'
    },
  ];
  // Pergunta 17

  perguntaAtual: any;

  notReady: boolean = false;

  iniciarContador = false;

  constructor(
    private fb: FormBuilder,
    public alertCtrl: AlertController,
    public toastCtrl: ToastController,
    public modalCtrl: ModalController,
    public navCtrl: NavController,
    public platform: Platform
  ) {
    this.platform.registerBackButtonAction(() => {
      this.navCtrl.pop();
    });
  }

  ngOnInit() {
    this.questao = this.fb.group({
      resposta: ['', Validators.required]
    });
    this.shufflePerguntas();
    this.shuffleRespostas();
    this.gerenciaTempoPergunta();
  }

  id: number;
  gerenciaTempoPergunta() {
    if(this.iniciarContador) {
      this.tempoPergunta = 18;
      this.id = setInterval(() => {
        this.contadorTempoPergunta();
      }, 1000);
    }
  }

  shufflePerguntas() {
    this.perguntas.sort(function (a, b){
      return Math.floor(Math.random() * 10);
    });
  }

  shuffleRespostas() {
    for(let pergunta of this.perguntas) {
      pergunta.alternativas.sort(function (a, b){
        return Math.floor(Math.random() * 10);
      });
    }
  }

  tempoPergunta = 18;
  contadorTempoPergunta() {
    if(this.tempoPergunta === 0) {
      this.alertaTempoExpirado();
      const record = Number(localStorage.getItem('record'));
      const tentativas = Number(localStorage.getItem('tentativas'));

      if(record < this.numPergunta || record == undefined) {
        localStorage.setItem('record', this.perguntasAcertadas.toString());
      }

      let novoTentativas = tentativas + 1;
      localStorage.setItem('tentativas', novoTentativas.toString());
      this.navCtrl.push(HomePage);
      this.ngOnDestroy();
    } else {
      this.tempoPergunta--;
    }
  }

  primeiraPergunta = false;
  comecar() {
    this.irParaProxima = true;
    this.iniciarContador = true;
    this.botaoAcionado = true;
    this.gerenciaTempoPergunta();
    this.proximaPergunta(null);
  }

  irParaProxima = false;
  botaoAcionado = false;
  proximaPergunta(resposta) {
    this.botaoAcionado = false;
    if(resposta) {
      if(resposta == this.perguntaAtual.resposta) {
        this.alertaRespostaValida();
        this.perguntasAcertadas++;
      } else {
        this.alertaRespostaInvalida();
        const record = Number(localStorage.getItem('record'));
        const tentativas = Number(localStorage.getItem('tentativas'));

        if(record < this.numPergunta || record == undefined) {
          localStorage.setItem('record', this.perguntasAcertadas.toString());
        }

        let novoTentativas = tentativas + 1;
        localStorage.setItem('tentativas', novoTentativas.toString());
        this.navCtrl.pop();
        this.ngOnDestroy();
      }
    }

    if(this.irParaProxima) {
      if(!this.notReady) {
        this.notReady = true;
      }

        if(!(this.numPergunta >= this.perguntas.length-1)) {
        this.numPergunta++;
        this.perguntaAtual = this.perguntas[this.numPergunta];
        this.questao.controls.resposta.reset();
      } else {
        const record = Number(localStorage.getItem('record'));
        const tentativas = Number(localStorage.getItem('tentativas'));

        if(record < this.numPergunta || record == undefined) {
          localStorage.setItem('record', this.perguntasAcertadas.toString());
        }

        let novoTentativas = tentativas + 1;
        localStorage.setItem('tentativas', novoTentativas.toString());

        const alert = this.alertCtrl.create();
        alert.setTitle('Você venceu!');
        alert.setSubTitle('Parabéns, você conseguiu acertar todas as perguntas sem errar nenhuma! :\')');
        alert.addButton({
          text: 'Obrigado! :)',
          handler: () => {
            this.tempoPergunta = 18;
          }
        });

        alert.present();
      }
    }
  }

  alertaTempoExpirado() {
    const alert = this.alertCtrl.create();
    alert.setTitle('Seu tempo acabou!');
    alert.setSubTitle('Passaram-se os 18 segundos, você perdeu! :(');
    alert.addButton({
      text: 'Voltar ao início',
      handler: () => {
        this.tempoPergunta = 18;
      }
    });

    alert.present();

  }

  alertaRespostaValida() {
    const alert = this.alertCtrl.create();
    alert.setTitle('Resposta correta!');
    alert.setSubTitle('Sua resposta está correta. Parabéns!');
    alert.addButton({
      text: 'Thanks :)',
      handler: () => {
        this.tempoPergunta = 18;
      }
    });

    alert.present();

    this.tempoPergunta = 18;
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
    alert.setSubTitle('Resposta correta: ' + label);
    alert.setMessage('Explicação => ' + this.perguntaAtual.explicacao);
    alert.addButton({
      text: 'Voltar ao início :(',
      handler: () => {
        this.tempoPergunta = 18;
      }
    });

    return alert.present()
      .then(() => {
        return true;
      });
    // const toast = this.toastCtrl.create({
    //   message: 'Resposta Incorreta! A resposta correta é (' + label + '). ' + this.perguntaAtual.explicacao,
    //   showCloseButton: true,
    //   // duration: 4000,
    //   closeButtonText: 'OK'
    // });
    // toast.present();
  }

  ngOnDestroy() {
    if(this.id) {
      clearInterval(this.id);
    }
  }

}
