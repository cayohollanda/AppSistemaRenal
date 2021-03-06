import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController, ToastController, ModalController, NavController, Platform } from 'ionic-angular';

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

  numPergunta: number = -1;

  perguntasAcertadas: number = 0;

  showTime = true;

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

    {
      pergunta: 'Qual porção do néfron fica em contato com o glomérulo formando o aparelho justaglomerular?',
      alternativas: [
        { value: 'A', label: 'Túbulo distal convoluto' },
        { value: 'B', label: 'Túbulo distal reto' },
        { value: 'C', label: 'Túbulo proximal convoluto' },
        { value: 'D', label: 'Túbulo proximal reto' },
      ],
      resposta: 'A',
      explicacao: 'O túbulo distal convoluto nessa região possui as chamadas células da mácula densa, que ficam em contato com as células justaglomerulares.'
    },

    {
      pergunta: 'O papel da angiotensina II nos rins está relacionado com:',
      alternativas: [
        { value: 'A', label: 'Regulação do fluxo sanguíneo renal e do ritmo de filtração glomerular' },
        { value: 'B', label: 'Vasodilatação das arteríolas aferente e eferente' },
        { value: 'C', label: 'Vasoconstrição das arteríolas, tendo seu maior efeito na aferente' },
        { value: 'D', label: 'Regulação do fluxo sanguíneo renal sem efeito sobre o RFG' },
      ],
      resposta: 'A',
      explicacao: 'Em condições normais, a angiotensina modela o fluxo sanguíneo renal e aumenta o ritmo de filtração glomerular através da vasoconstrição das arteríolas, com maior ênfase na eferente.'
    },

    {
      pergunta: 'As resistências das arteríolas aferente e eferente são um importante fator de filtração por regularem:',
      alternativas: [
        { value: 'A', label: 'Todas as alternativas estão corretas' },
        { value: 'B', label: 'A pressão hidrostática nos capilares glomerulares' },
        { value: 'C', label: 'O ritmo de filtração glomerular' },
        { value: 'D', label: 'O fluxo sanguíneo renal' },
      ],
      resposta: 'A',
      explicacao: 'A resistência das arteríolas provém da presença de musculatura lisa ao seu redor que permite a alteração do diâmetro do vaso que, por sua vez, tem como consequência todos os processos citados.'
    },

    {
      pergunta: 'Quais são as membranas que revestem o túbulo proximal?',
      alternativas: [
        { value: 'A', label: 'Membrana apical e membrana peritubular' },
        { value: 'B', label: 'Membrana luminal e membrana apical' },
        { value: 'C', label: 'Membrana basolateral e membrana peritubular' },
        { value: 'D', label: 'Membrana peritubular e membrana basal' },
      ],
      resposta: 'A',
      explicacao: 'O túbulo proximal é revestido por células epiteliais que formam duas membranas: a membrana apical ou luminal e a membrana peritubular ou basolateral.'
    },

    {
      pergunta: 'As células epiteliais que revestem o túbulo proximal não têm como característica:',
      alternativas: [
        { value: 'A', label: 'Regiões denominadas tight junctions, que não permitem a passagem de íons entre as células' },
        { value: 'B', label: 'A presença de muitas mitocôndrias, para fornecer ATP aos canais de transporte ativo secundário' },
        { value: 'C', label: 'O núcleo arredondado e a presença de mitocôndrias em disposição paliçádica' },
        { value: 'D', label: 'Membrana possui a chamada borda-escova, para aumentar a área de superfície da célula' },
      ],
      resposta: 'A',
      explicacao: 'As tight junctions do túbulo proximal são permeáveis e permitem a passagem de solutos a favor do seu gradiente de concentração.'
    },

    {
      pergunta: 'O que não podemos afirmar a respeito dos segmentos do túbulo proximal?',
      alternativas: [
        { value: 'A', label: 'O segmento S2 possui a maior quantidade de dobras na membrana basolateral' },
        { value: 'B', label: 'Em condições normais, o segmento S1 absorve 100% da glicose e dos aminoácidos filtrados.' },
        { value: 'C', label: 'O segmento S3 refere-se somente à região reta do túbulo proximal' },
        { value: 'D', label: 'Todos os segmentos possuem células que apresentam borda-escova' },
      ],
      resposta: 'A',
      explicacao: 'A reabsorção ocorre com maior intensidade no segmento S1, uma vez que é esse segmento que possui maior quantidade de dobras na membrana basolateral, além de uma borda-escova maior em relação aos demais segmentos.'
    },

    {
      pergunta: 'O túbulo proximal é responsável pela reabsorção de que quantidade de fluido tubular?',
      alternativas: [
        { value: 'A', label: 'Aproximadamente 90%' },
        { value: 'B', label: '75%' },
        { value: 'C', label: '95%' },
        { value: 'D', label: '0%' },
      ],
      resposta: 'A',
      explicacao: 'Mais precisamente falando, a quantidade reabsorvida é de 88%. Isso é resultado dos inúmeros mecanismos presentes no túbulo proximal que permitem a reabsorção de grande parte do plasma filtrado.'
    },

    {
      pergunta: 'Sobre a alça de henle:',
      alternativas: [
        { value: 'A', label: 'Os néfrons corticais têm alças relativamente curtas' },
        { value: 'B', label: 'Todas as alternativas estão corretas' },
        { value: 'C', label: 'Os néfrons corticais não necessariamente possuem o ramo ascendente grosso' },
        { value: 'D', label: 'A porção cortical nos néfrons justaglomerulares inicia-se medula externa e vai até a mácula densa' },
      ],
      resposta: 'A',
      explicacao: 'Alguns néfrons corticais não possuem os ramos finos, porém necessariamente possuem o ramo grosso ascendente. Já a porção cortical nos néfrons justaglomerulares inicia-se na junção corticomedular.'
    },

    {
      pergunta: 'Qual característica não corresponde aos ramos ascendentes?',
      alternativas: [
        { value: 'A', label: 'Nenhuma das alternativas' },
        { value: 'B', label: 'Elevada reabsorção de magnésio' },
        { value: 'C', label: 'Baixa permeabilidade à água' },
        { value: 'D', label: 'Elevada reabsorção de sais, que por consequência tornará o fluido tubular mais concentrado' },
      ],
      resposta: 'A',
      explicacao: 'Todas essas características estão relacionadas aos ramos ascendentes.'
    },

    {
      pergunta: 'A absorção de água nos ramos finos descendentes ocorre principalmente:',
      alternativas: [
        { value: 'A', label: 'Pela existência de um gradiente osmótico entre o fluido tubular e o interstício' },
        { value: 'B', label: 'Pelo transporte ativo secundário de H2O através das aquoporinas' },
        { value: 'C', label: 'Devido à hipertonicidade do fluido tubular ' },
        { value: 'D', label: 'Pelo transporte passivo de água e de solutos do interior tubular para o interstício' },
      ],
      resposta: 'A',
      explicacao: 'O ramo fino descendente do néfron está envolto por um interstício hipertônico, que permite a passagem passiva da água.'
    },

    {
      pergunta: 'Sobre as células do túbulo distal convoluto é incorreto afirmar:',
      alternativas: [
        { value: 'A', label: 'Apresentam muitos microvilos na região apical' },
        { value: 'B', label: 'Possuem formato cúbico' },
        { value: 'C', label: 'Suas regiões basolaterais formam vias paracelulares' },
        { value: 'D', label: 'Citoplasma rico em mitocôndrias' },
      ],
      resposta: 'A',
      explicacao: 'Ao contrário do túbulo proximal, o túbulo distal convoluto possui um número bastante reduzido de microvilos na região apical, embora estes ainda estejam presentes.'
    },

    {
      pergunta: 'Qual dessas substâncias não é reabsorvida pelo túbulo distal convoluto?',
      alternativas: [
        { value: 'A', label: 'Magnésio' },
        { value: 'B', label: 'Cálcio' },
        { value: 'C', label: 'Bicabornato' },
        { value: 'D', label: 'NaCl' },
      ],
      resposta: 'A',
      explicacao: 'O magnésio será reabsorvido no ramo ascendente da alça de Henle.'
    },

    {
      pergunta: 'Quais substâncias são secretadas pelo túbulo distal convoluto?',
      alternativas: [
        { value: 'A', label: 'Potássio, hidrogênio e amônia' },
        { value: 'B', label: 'Íons H+, bicarbonato e amônia' },
        { value: 'C', label: 'Ureia, amônia e bicarbonato' },
        { value: 'D', label: 'Potássio, magnésio e cálcio ' },
      ],
      resposta: 'A',
      explicacao: 'O túbulo distal convoluto é responsável pela presença de amônia na urina, pela participação na regulação do pH do organismo através da eliminação de hidrogênio e tanto secreta quanto absorve potássio.'
    },

    {
      pergunta: 'O túbulo distal convoluto possui um grande número de receptores para a aldosterona, que é responsável por:',
      alternativas: [
        { value: 'A', label: 'Reabsorção de sódio e secreção de potássio e hidrogênio' },
        { value: 'B', label: 'Reabsorção de bicarbonato e secreção de amônia ' },
        { value: 'C', label: 'Reabsorção de bicarbonato e secreção de sódio' },
        { value: 'D', label: 'Reabsorção de sódio e bicarbonato e secreção de hidrogênio e potássio' },
      ],
      resposta: 'A',
      explicacao: 'A aldosterona estimula a reabsorção de sódio e a secreção de potássio e hidrogênio, além da reabsorção de água e de cloro. Entretanto, não possui efeito sobre a reabsorção de bicarbonato ou sobre a secreção de amônia.'
    },

    {
      pergunta: 'No ducto coletor ocorrem todos os eventos abaixo, exceto:',
      alternativas: [
        { value: 'A', label: 'Reabsorção de amônia' },
        { value: 'B', label: 'Reabsorção de potássio' },
        { value: 'C', label: 'Secreção de potássio' },
        { value: 'D', label: 'Secreção de hidrogênio com gasto de ATP' },
      ],
      resposta: 'A',
      explicacao: 'A amônia será secretada no ducto coletor, o hidrogênio será secretado através de transporte ativo e o potássio será tanto reabsorvido quanto secretado.'
    },

    {
      pergunta: 'Onde age o hormônio antidiurético? ',
      alternativas: [
        { value: 'A', label: 'No ducto coletor' },
        { value: 'B', label: 'No túbulo distal reto' },
        { value: 'C', label: 'No túbulo distal convoluto' },
        { value: 'D', label: 'No ramo descendente fino' },
      ],
      resposta: 'A',
      explicacao: 'O hormônio antidiurético (ADH) age no ducto coletor, modificando o volume e a concentração da urina.'
    },

    {
      pergunta: 'O hormônio antidiurético promove:',
      alternativas: [
        { value: 'A', label: 'Maior reabsorção de água' },
        { value: 'B', label: 'Menor reabsorção de água' },
        { value: 'C', label: 'Hipotonicidade do fluido intratubular' },
        { value: 'D', label: 'Secreção de água no ducto coletor' },
      ],
      resposta: 'A',
      explicacao: 'Na ausência do ADH (hormônio antidiurético) não ocorre reabsorção de água no ducto coletor. Já na presença do ADH, a reabsorção da água promove o equilíbrio osmótico entre o fluido intratubular e o interstício hipertônico.'
    },

    {
      pergunta: 'Um defeito no gene da proteína nefrina, localizada na está relacionado com a síndrome nefrótica congênita, onde ocorre:',
      alternativas: [
        { value: 'A', label: 'A presença de proteínas na urina' },
        { value: 'B', label: 'O aumento da pressão osmótica no glomérulo' },
        { value: 'C', label: 'O aumento do volume de plasma no aparelho glomerular' },
        { value: 'D', label: 'Todas as alternativas estão corretas.' },
      ],
      resposta: 'A',
      explicacao: 'Uma falha na produção de nefrina resultará na passagem de proteínas para o filtrado glomerular que, ao final do processo, estarão presentes na urina. A parir disto, haverá uma queda na pressão oncótica do interior do capilar, porém o volume de plasma não irá aumentar.'
    },

    {
      pergunta: 'Qual a principal função das sialoproteínas?',
      alternativas: [
        { value: 'A', label: 'Repelir substâncias de carga negativa' },
        { value: 'B', label: 'Barrar a passagem de proteínas para o interior do capilar' },
        { value: 'C', label: 'Evitar a passagem de íons positivos' },
        { value: 'D', label: 'Sustentar as fibras da membrana diafragmática' },
      ],
      resposta: 'A',
      explicacao: 'Por possuírem carga negativa, as sialoproteínas irão repelir os íons e moléculas de carga negativa que estiverem passando pelas fenestras do endotélio capilar.'
    },
  ];
  // Pergunta 35

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
      if (this.navCtrl.canGoBack()) { // CHECK IF THE USER IS IN THE ROOT PAGE.
        this.navCtrl.pop(); // IF IT'S NOT THE ROOT, POP A PAGE.
      } else {
        this.platform.exitApp(); // IF IT'S THE ROOT, EXIT THE APP.
      }
    });
  }

  ngOnInit() {
  }

  ionViewDidLoad() {
    this.questao = this.fb.group({
      resposta: ['', Validators.required]
    });
    this.shufflePerguntas();
    this.shuffleRespostas();
    this.gerenciaTempoPergunta();
  }

  id: number;
  gerenciaTempoPergunta() {
    if (this.iniciarContador) {
      this.tempoPergunta = 20;
      this.id = setInterval(() => {
        this.contadorTempoPergunta();
      }, 1000);
    }
  }

  shufflePerguntas() {
    // Peguei de: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array

    var currentIndex = this.perguntas.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = this.perguntas[currentIndex];
      this.perguntas[currentIndex] = this.perguntas[randomIndex];
      this.perguntas[randomIndex] = temporaryValue;
    }
  }

  shuffleRespostas() {
    // Peguei de: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array

    for (let pergunta of this.perguntas) {
      var currentIndex = pergunta.alternativas.length, temporaryValue, randomIndex;

      // While there remain elements to shuffle...
      while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = pergunta.alternativas[currentIndex];
        pergunta.alternativas[currentIndex] = pergunta.alternativas[randomIndex];
        pergunta.alternativas[randomIndex] = temporaryValue;
      }
    }
  }

  tempoPergunta = 20;
  contadorTempoPergunta() {
    if (this.tempoPergunta === 0) {
      this.alertaTempoExpirado();
      const record = Number(localStorage.getItem('record'));
      const tentativas = Number(localStorage.getItem('tentativas'));

      if (record < this.numPergunta || record == undefined) {
        localStorage.setItem('record', this.perguntasAcertadas.toString());
      }

      let novoTentativas = tentativas + 1;
      localStorage.setItem('tentativas', novoTentativas.toString());
      this.navCtrl.pop()
      this.navCtrl.push(PerguntasComponent);
      this.ngOnDestroy();
    } else {
      this.tempoPergunta--;
    }
  }

  primeiraPergunta = false;
  errouPergunta = false;
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
    if (resposta) {
      if (resposta == this.perguntaAtual.resposta) {
        if (this.numPergunta !== this.perguntas.length - 1) {
          this.alertaRespostaValida();
        }
        this.perguntasAcertadas++;
      } else {
        this.errouPergunta = true;
        const record = Number(localStorage.getItem('record'));
        const tentativas = Number(localStorage.getItem('tentativas'));

        if (record < this.numPergunta || record == undefined) {
          localStorage.setItem('record', this.perguntasAcertadas.toString());
        }

        let novoTentativas = tentativas + 1;
        localStorage.setItem('tentativas', novoTentativas.toString());
        this.alertaRespostaInvalida();
      }
    }

    if (this.irParaProxima) {
      if (!this.notReady) {
        this.notReady = true;
      }

      if (!(this.numPergunta >= this.perguntas.length - 1)) {
        this.numPergunta++;
        this.perguntaAtual = this.perguntas[this.numPergunta];
        this.questao.controls.resposta.reset();
      } else {
        if (!this.errouPergunta) {
          const record = localStorage.getItem('record');
          const tentativas = Number(localStorage.getItem('tentativas'));
          const tentativasParaZerar = localStorage.getItem('tentativasParaZerar');

          if (Number(record) < this.perguntasAcertadas || record == null) {
            const novoRecord = this.perguntasAcertadas;
            localStorage.setItem('record', novoRecord.toString());
          }

          let novoTentativas = tentativas + 1;
          localStorage.setItem('tentativas', novoTentativas.toString());

          if (novoTentativas < Number(tentativasParaZerar) || tentativasParaZerar == null || tentativasParaZerar === '0') {
            localStorage.setItem('tentativasParaZerar', novoTentativas.toString());
          }

          const alert = this.alertCtrl.create();
          alert.setTitle('Você venceu!');
          alert.setSubTitle('Parabéns, você conseguiu acertar todas as perguntas sem errar nenhuma! :\')');
          alert.addButton({
            text: 'Obrigado! :)',
            handler: () => {
              this.navCtrl.pop();
            }
          });

          alert.present();
        }
      }
    }
    this.errouPergunta = false;
  }

  alertaTempoExpirado() {
    const alert = this.alertCtrl.create();
    alert.setTitle('Seu tempo acabou!');
    alert.setSubTitle('Passaram-se os 20 segundos, você perdeu! :(');
    alert.addButton({
      text: 'Voltar ao início',
      handler: () => {
        this.tempoPergunta = 20;
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
        // this.tempoPergunta = 18;
      }
    });

    alert.present();

    this.tempoPergunta = 20;
    // const toast = this.toastCtrl.create({
    //   message: 'Resposta correta!!',
    //   duration: 2000
    // });
    // toast.present();
  }

  alertaRespostaInvalida() {
    let label = '';
    for (let alternativa of this.perguntaAtual.alternativas) {
      if (alternativa.value == this.perguntaAtual.resposta) {
        label = alternativa.label;
      }
    }

    this.showTime = false;
    this.tempoPergunta = 9999;
    const alert = this.alertCtrl.create();
    alert.setTitle('Resposta incorreta!');
    alert.setSubTitle('Resposta correta: ' + label);
    alert.setMessage('Explicação: ' + this.perguntaAtual.explicacao);
    alert.addButton({
      text: 'Voltar ao início :(',
      handler: () => {
        this.navCtrl.pop();
        this.navCtrl.push(PerguntasComponent);
        this.ngOnDestroy();
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
    if (this.id) {
      clearInterval(this.id);
    }
  }

}
