"use strict"

class Worker {
  constructor(id = 0, pib = '', position = 5, gelb = 1, pvnr = false, mngrless1000 = false, mngrmore1000 = false, allowance = false, supervisor = false, sw = false, member = false, testing = false, onhate = false, sling = false, load = false) {
    this.id = id;
    this.pib = pib;
    this.position = position;
    this.gelb = gelb;
    this.pvnr = pvnr;
    this.mngrless1000 = mngrless1000;
    this.mngrmore1000 = mngrmore1000;
    this.allowance = allowance;
    this.supervisor = supervisor;
    this.switch = sw;
    this.member = member;
    this.testing = testing;
    this.onhate = onhate;
    this.sling = sling;
    this.load = load
  }
};

const gelb = [
  'I',
  'II',
  'III',
  'IV',
  'V'
]

const position = [
  'Начальник',
  'ст. електромеханік',
  'ел. механік',
  'ел. монтер VI розряду',
  'ел. монтер V розряду',
  'ел. монтер IV розряду',
  'ел. монтер III розряду',
  'ел. монтер II розряду',
  'ел. монтер I розряду',
  'водій',
  'машиніст'
]

const prizv = [
  'МЕЛЬНИК',
  'ШЕВЧЕНКО',
  'БОЙКО',
  'КОВАЛЕНКО',
  'БОНДАРЕНКО',
  'ТКАЧЕНКО',
  'КОВАЛЬЧУК',
  'КРАВЧЕНКО',
  'ОЛІЙНИК',
  'ШЕВЧУК',
  'КОВАЛЬ',
  'ПОЛІЩУК',
  'БОНДАР',
  'ТКАЧУК',
  'МОРОЗ',
  'МАРЧЕНКО',
  'ЛИСЕНКО',
  'РУДЕНКО',
  'САВЧЕНКО',
  'ПЕТРЕНКО',
  'КРАВЧУК',
  'КЛИМЕНКО',
  'ПАВЛЕНКО',
  'САВЧУК',
  'КУЗЬМЕНКО',
  'ШВЕЦЬ',
  'ГАВРИЛЮК',
  'ІВАНОВА',
  'ХАРЧЕНКО',
  'ПОНОМАРЕНКО',
  'МЕЛЬНИЧУК',
  'ВАСИЛЕНКО',
  'МАЗУР',
  'ХОМЕНКО',
  'ЛЕВЧЕНКО',
  'КАРПЕНКО',
  'КУШНІР',
  'СИДОРЕНКО',
  'РОМАНЮК',
  'МАРТИНЮК',
  'КОЛОМІЄЦЬ',
  'ПАВЛЮК',
  'ТКАЧ',
  'ЛИТВИНЕНКО',
  'ПАНЧЕНКО',
  'КОСТЕНКО',
  'КУЛИК',
  'КРАВЕЦЬ',
  'ЮРЧЕНКО',
  'БІЛОУС',
  'ДЯЧЕНКО',
  'СЕМЕНЮК',
  'КОСТЮК',
  'ІВАНОВ',
  'ГУМЕНЮК',
  'ВОВК',
  'ГОНЧАРЕНКО',
  'ЯКОВЕНКО',
  'РОМАНЕНКО',
  'ПРИХОДЬКО',
  'КОЗАК',
  'КОВТУН',
  'НАЗАРЕНКО',
  'ПИЛИПЕНКО',
  'ГОНЧАР',
  'ІЩЕНКО',
  'ФЕДОРЕНКО',
  'ГОНЧАРУК',
  'НЕСТЕРЕНКО',
  'КОЛІСНИК',
  'ДЕМЧЕНКО',
  'ТЕРЕЩЕНКО',
  'ТИЩЕНКО',
  'БАБЕНКО',
  'ПОПОВИЧ',
  'ТАРАСЕНКО',
  'МАКАРЕНКО',
  'МАРЧУК',
  'МОСКАЛЕНКО',
  'ЗІНЧЕНКО',
  'ЯЦЕНКО',
  'ЖУК',
  'ЛИТВИН',
  'ГЕРАСИМЕНКО',
  'КИРИЧЕНКО',
  'КОЛЕСНИК',
  'МІЩЕНКО',
  'ТИМОШЕНКО',
  'ПОПОВА',
  'ПАЛАМАРЧУК',
  'ВЛАСЕНКО',
  'ШАПОВАЛ',
  'БОНДАРЧУК',
  'ЛУЦЕНКО',
  'КОНДРАТЮК',
  'ЧОРНА',
  'ЩЕРБИНА',
  'АНТОНЮК',
  'СОРОКА',
  'КОРНІЄНКО',
  'ДАНИЛЮК',
  'ГОРДІЄНКО',
  'МАРТИНЕНКО',
  'ШУЛЬГА',
  'РАДЧЕНКО',
  'КОРОЛЬ',
  'ОСТАПЕНКО',
  'СТЕПАНЕНКО',
  'ВОЛОШИН',
  'ГОЛУБ',
  'НАУМЕНКО',
  'БІЛИК',
  'ТАРАН',
  'ДМИТРЕНКО',
  'БАБИЧ',
  'БАБІЙ',
  'МАКСИМЕНКО',
  'ПАНАСЮК',
  'ВЕЛИЧКО',
  'ПРОКОПЕНКО',
  'ДЕНИСЕНКО',
  'ДІДЕНКО',
  'МЕЛЬНИЧЕНКО',
  'ОНИЩЕНКО',
  'ІВАЩЕНКО',
  'КУЧЕРЕНКО',
  'БОЙЧУК',
  'ДОРОШЕНКО',
  'ДЕРКАЧ',
  'КУЧЕР',
  'СЕРГІЄНКО',
  'ЗАЄЦЬ',
  'СЕРДЮК',
  'ГРИЩЕНКО',
  'МИХАЙЛЕНКО',
  'БОДНАР',
  'ПОПОВ',
  'КОНОНЕНКО',
  'ГОЛОВКО',
  'ГРИЦЕНКО',
  'ДАВИДЕНКО',
  'ПАСІЧНИК',
  'ЧУМАК',
  'БОРИСЕНКО',
  'ЛЯШЕНКО',
  'ОМЕЛЬЧЕНКО',
  'СКРИПНИК',
  'САМОЙЛЕНКО',
  'ЧЕРНЕНКО',
  'ПАРХОМЕНКО',
  'ПРОЦЕНКО',
  'ГОРОБЕЦЬ',
  'ІВАНЧЕНКО',
  'КОВАЛЬОВА',
  'МАТВІЄНКО',
  'ЧОРНИЙ',
  'ІЛЬЧЕНКО',
  'ШПАК',
  'ДЗЮБА',
  'КИРИЛЮК',
  'РИБАК',
  'ОВЧАРЕНКО',
  'СЕРЕДА',
  'ОСТАПЧУК',
  'ГРИГОРЕНКО',
  'ЯРЕМЕНКО',
  'ДЕМЧУК',
  'СУБЄКТ',
  'ВОЗНЮК',
  'СПД',
  'ВЛАСЮК',
  'ЗАХАРЧЕНКО',
  'МИРОНЕНКО',
  'ГНАТЮК',
  'АВРАМЕНКО',
  'МОВЧАН',
  'СТЕЦЕНКО',
  'ГАВРИЛЕНКО',
  'ЧАЙКА',
  'МАТВІЙЧУК',
  'ГЛУЩЕНКО',
  'ЯКИМЕНКО',
  'ПЕТРОВА',
  'ЯРОШЕНКО',
  'МУЗИКА',
  'КУЛІШ',
  'ТАРАСЮК',
  'ВОЛКОВА',
  'ЛИСАК',
  'БАРАН',
  'АНТОНЕНКО',
  'СТЕПАНЮК',
  'ПИЛИПЧУК',
  'СТАСЮК',
  'ЛЕЩЕНКО',
  'ВОЛОШИНА',
  'ФЕСЕНКО',
  'ІВАНЕНКО',
  'ЩЕРБАК',
  'ЗАХАРЧУК',
  'ЖУРАВЕЛЬ',
  'СЛОБОДЯНЮК',
  'СЛОБОДЯН',
  'ПАЩЕНКО',
  'КОРНІЙЧУК',
  'ПІДПРИЄМЕЦЬ',
  'ДУДНИК',
  'СОЛОВЕЙ',
  'ГЕРАСИМЧУК',
  'ЯРЕМЧУК',
  'ТИМЧЕНКО',
  'ЧЕРНИШ',
  'ГОНЧАРОВА',
  'МИХАЙЛЮК',
  'БОГДАН',
  'КИРИЛЕНКО',
  'КОВАЛЬОВ',
  'РУБАН',
  'СТЕЦЮК',
  'ІГНАТЕНКО',
  'ЗОЗУЛЯ',
  'ТРЕТЯК',
  'ПРОКОПЧУК',
  'КОГУТ',
  'ДАЦЕНКО',
  'КУЦЕНКО',
  'НОВАК',
  'КОНДРАТЕНКО',
  'КОСЕНКО',
  'АРТЕМЕНКО',
  'ДЕРЕВЯНКО',
  'КАЛІНІЧЕНКО',
  'ЛЕВЧУК',
  'ТИМОЩУК',
  'ПІНЧУК',
  'ВАЩЕНКО',
  'ДЕНИСЮК',
  'ДМИТРУК',
  'СУПРУН',
  'СИТНИК',
  'ПЕТРУК',
  'МУСІЄНКО',
  'ВОЙТЕНКО',
  'БУРЯК',
  'ДУДКА',
  'ВОЛОЩУК',
  'МИХАЙЛОВА',
  'ЧАБАН',
  'ОЛЕКСІЄНКО',
  'ФЕДОРЧУК',
  'ІЩУК',
  'ЄВТУШЕНКО',
  'ДУБИНА',
  'ВОРОНА',
  'ГРЕБЕНЮК',
  'РОМАНЧУК',
  'ЦИМБАЛЮК',
  'КРИВОРУЧКО',
  'РУДЬ',
  'ПРИСЯЖНЮК',
  'ОНИЩУК',
  'ПРИЙМАК',
  'ТАРАНЕНКО',
  'БУРЛАКА',
  'ФЕДОРОВА',
  'АНДРІЙЧУК',
  'САЄНКО',
  'НІКОЛАЄНКО',
  'ГЛУШКО',
  'ГОРБАТЮК',
  'ДАНИЛЕНКО',
  'ГУСАК',
  'ВОЛКОВ',
  'МАКСИМЧУК',
  'БУТЕНКО',
  'БАРАБАШ',
  'ІВАНЮК',
  'КОЗЛОВА',
  'ПЕТРОВ',
  'КРИВЕНКО',
  'НОВІКОВА',
  'ВАСИЛЬЄВА',
  'ТОКАР',
  'ПАНЧУК',
  'БІЛА',
  'ВАСИЛЬЧЕНКО',
  'САВЕНКО',
  'ЛЕБІДЬ',
  'МІРОШНИЧЕНКО',
  'ЦИМБАЛ',
  'ЗАЙЦЕВА',
  'ЯКИМЧУК',
];

const in_latters = [
  'А',
  'Б',
  'В',
  'Г',
  'Д',
  'Є',
  'Е',
  'І',
  'К',
  'Л',
  'М',
  'Н',
  'О',
  'П',
  'Р',
  'С',
  'Т',
  'Я'
];
const katvolt = [
  'до 1000В',
  'вище 1000В'
];

const katelbez = [
  'зі зняттям напруги',
  'без зняття напруги на струмопровідних частинах та поблизу них',
  'без зняття напруги на відстані від струмопровідних частин, які знаходяться під напругою'
];

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const fillWorker = (kilk)=> {
  const arrWorker = [];
  const gr5 = Math.floor(kilk*33/100);
  const gr4 = Math.floor(kilk*20/100);
  const gr3 = Math.floor(kilk*37/100);
  for (let i = 0; i < kilk; i++) {
    let pib = '';
    pib += prizv[getRandomInt(prizv.length)];
    pib += ' ';
    pib += in_latters[getRandomInt(in_latters.length)];
    pib += '.';
    pib += in_latters[getRandomInt(in_latters.length)];
    pib += '.';
    let w = new Worker(i+1, pib);
    w.member = true;
    arrWorker.push(w);
  }
  // for gr 5
  for(let i=0; i < gr5; i++) {
    let rpos = getRandomInt(arrWorker.length);
    arrWorker[rpos].gelb = 4;
    arrWorker[rpos].pvnr = true;
    arrWorker[rpos].allowance = true;
    arrWorker[rpos].mngrmore1000 = true;
    arrWorker[rpos].switch = true;
    arrWorker[rpos].supervisor = true;
    if(i===0) arrWorker[rpos].position = 0
    else if(i < 4) arrWorker[rpos].position = 2
    else arrWorker[rpos].position = 3
  }

  // for gr 4
  let arrW4 = arrWorker.filter(e => e.gelb != 4);
  for(let i=0; i < gr4; i++) {
    let rpos = getRandomInt(arrW4.length);
    arrWorker[arrW4[rpos].id-1].gelb = 3;
    arrWorker[arrW4[rpos].id-1].mngrless1000 = true;
    arrWorker[arrW4[rpos].id-1].allowance = true;
    arrWorker[arrW4[rpos].id-1].switch = true;
    arrWorker[arrW4[rpos].id-1].position = 4
  }

  // for gr 3
  let arrW3 = arrWorker.filter(e => ((e.gelb != 4)&&(e.gelb != 3)));
  for(let i=0; i < gr3; i++) {
    let rpos = getRandomInt(arrW3.length);
    arrWorker[arrW3[rpos].id-1].gelb = 2;
    arrWorker[arrW3[rpos].id-1].switch = true;
    arrWorker[arrW3[rpos].id-1].position = 5
  }

  console.log(arrWorker.filter(e => e.gelb===2));
  return arrWorker;
}

const app = Vue.createApp({
  data() {
    return {
      main_w: false,
      katelbez_w: false,
      login_w: false,
      about_w: false,
      zayavka_w: true,
      katelbez: [],
      katvolt: [],
      ker: [],
      dop: [],
      brig: [],

      user: [
        'admin'
      ],
      workers: []
    }
  },
  created() {
    this.position = position;
    this.gelb = gelb;
    this.katelbez = katelbez;
    this.katvolt = katvolt;
    this.workers = fillWorker(20);
    this.dop = this.workers.filter(w => w.allowance);
  },
  methods: {
    showKatelbez() {
      this.katelbez_w = true;
    }
  }
}).mount('#app');