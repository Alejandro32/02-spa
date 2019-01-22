import { Injectable } from '@angular/core';

@Injectable()
export class HeroesService {


private heroes: Heroe [] = [
  {
    nombre: 'Aquaman',
    bio:  `El poder más reconocido de Aquaman es la capacidad telepática para
           comunicarse con la vida marina la cual puede convocar a grandes distancias`,
    img: 'assets/img/Aquaman1.jpg',
    img1: 'assets/img/dc.jpg',
    aparicion: '1941-11',
    casa: 'DC',
    poder: 'Controla el 71% del planeta,Telepatía,viajar a otras dimensiones,Natación súper sónica,Resistencia a las balas'
  },
  {
    nombre: 'Batman',
    bio: `Los rasgos principales de Batman se resumen en «destreza física, habilidades deductivas y obsesión». La mayor parte de las características básicas de los
          cómics han variado por las diferentes interpretaciones que le han dado al personaje.`,
    img: 'assets/img/Batman1.jpg',
    img1: 'assets/img/dc.jpg',
    aparicion: '1939-05',
    casa: 'DC',
    poder: 'Conocimientos científicos, habilidades detectivescas y una gran destreza física'
  },
  {
    nombre: 'DR Strange',
    bio: `Stephen carece realmente de verdaderos Superpoderes, en su lugar posee vastos poderes místicos (teletransportación, generación de ilusiones, proyección de energía), cuyo nivel
          puede compararse a las de algunas entidades cósmicas. Su principal fuente es la energía mística ambiental, derivados de la Mente, el Alma y el cuerpo, pero puede obtener poder
          adicional por entidades místicas con quienes haya hecho tratos, además de poder invocar algunos de sus poderes, como las llamas de los Faltine, las bandas carmesies de Cyttorak
           y el escudo de los serafin.También puede practicar el viaje astral, durante el cual en esa forma es invisible e intangible, y sólo puede ser dañado mediante rituales místicos
           más elaborados, sin embargo su cuerpo es vulnerable por estar en un trance similar a la muerte. Si viaja por más de 24 horas, empieza a descomponerse, y en caso de que el cuerpo
          físico muriese durante el viaje, Stephen estaría en forma astral para siempre.Uno de sus hechizos más poderosos son las llamas de Faltine, una poderosa bola de fuego que es capaz
          de destruir ciudades enteras. Aunque solo afecta a los corazones que no son considerados dignos por el Faltine que otorga poder al Dr. Strange, ya que es un Faltine con el único
         deseo de proteger al planeta tierra, con lo que sus hechizos no afectan a los puros o dignos.
         Ojo de Agamotto: ver imágenes del pasado, detectar cosas ocultas (como mentiras y entidades etéreas) y convertirse en un Portal interdimensional.
           Orbe de Agamotto: sus poderes son detectar fuentes de poder místico, clarividencia a nivel universal y viaje interdimensional. Capa de Levitación:
           como su nombre indica, puede levitar (o mejor dicho, volar) a una Velocidad máxima desconocida, pudiendo ser controlada a distancia. También puede
            cambiar de tamaño, camuflarse y crear un escudo capaz de proteger de casi cualquier ataque mágico.Libro de los vishanti: es el mayor tratado sobre
             magia de Magia blanca, siendo la contrapartida del Darkhold (el mayor tratado de Magia negra).`,
    img: 'assets/img/dr.jpg',
    img1: 'assets/img/Mar.png',
    aparicion: '1963-07',
    casa: 'Marvel',
    poder: `Viajes astrales,Clarividencia,viaje interdimensional,cambiar de tamaño,levitar,proyeccion de energia`
  },

  {
    nombre: 'Daredevil',
    bio: `Al haber perdido la vista, los cuatro sentidos restantes de Daredevil fueron
          aumentados por la radiación a niveles superhumanos, en el accidente que tuvo
          cuando era niño. A pesar de su ceguera, puede "ver" a través de un "sexto sentido"
          que le sirve como un radar similar al de los murciélagos.`,
    img: 'assets/img/Daredevil1.jpg',
    img1: 'assets/img/Mar.png',
    aparicion: '1964-01-01',
    casa: 'Marvel',
    poder: 'Sentidos desarrollados,destreza de combate y estrategica.'
  },
   {
    nombre: 'Flash',
    bio: `Todas las encarnaciones del Flash se pueden mover, pensar y reaccionar a velocidad luz,
          además de tener una resistencia sobrehumana que les permite recorrer distancias increíbles.
          Algunas, especialmente las versiones posteriores, pueden vibrar tan rápido que pueden atravesar
          paredes en un proceso llamado túnel cuántico,38​ viajar en el tiempo y también pueden prestar y
          tomar prestado velocidad. Los velocistas también pueden sanar más rápidamente que un humano promedio,
          ya sea heridas, fracturas o quemaduras. Además, la mayoría de las encarnaciones tienen un aura
          invisible alrededor de sus respectivos cuerpos que las protege de la fricción del aire y los
          efectos cinéticos de sus poderes.`,
    img: 'assets/img/flash1.jpg',
    img1: 'assets/img/dc.jpg',
    aparicion: '1940-01-01',
    casa: 'Marvel',
    poder: 'Speed force,Viajes en el tiempo,Hyper velocidad '
},
  {
    nombre: 'Hulk',
    // tslint:disable-next-line:max-line-length
    bio: `Su principal poder es su capacidad de aumentar su fuerza hasta niveles prácticamente
          ilimitados a la vez que aumenta su furia. Dependiendo de qué personalidad de Hulk esté
          al mando en ese momento (el Hulk Banner es el más débil, pero lo compensa con su inteligencia).`,
    img: 'assets/img/hulk1.jpg',
    img1: 'assets/img/Mar.png',
    aparicion: '1962-05-01',
    casa: 'Marvel',
    poder: 'Fuerza incalculable,Hyper velocidad,Autosanamiento'
  },
  {
    nombre: 'Linterna Verde',
    bio: `Poseedor del anillo de poder que posee la capacidad de crear manifestaciones de luz sólida mediante la
          utilización del pensamiento. Es alimentado por la Llama Verde (revisada por escritores posteriores como
          un poder místico llamado Starheart), una llama mágica contenida en dentro de un orbe (el orbe era en
          realidad un meteorito verde de metal que cayó a la Tierra, el cual encontró un fabricante de lámparas
          llamado Chang)`,
    img: 'assets/img/Linter1.jpg',
    img1: 'assets/img/dc.jpg',
    aparicion: '1940-06-01',
    casa: 'DC',
    poder: 'Controla el 71% del planeta,Telepatía,viajar a otras dimensiones,Natación súper sónica,Resistencia a las balas'
  },

  {
    nombre: 'Luke Cage',
    bio: `Luke Cage, también conocido como Power Man (nombre real Carl Lucas), es un superhéroe ficticio que aparece
          en cómics estadounidenses publicados por Marvel Comics Luke Cage posee una fuerza y resistencia sobrehumanas,
          y tiene la piel y el tejido muscular muy densos, lo que lo hace muy resistente al daño físico. Cage posee estas
          apacidades como resultado de una regeneración celular experimental que fortificó los diversos tejidos de su cuerpo.
          Su piel puede resistir balas de alto calibre, heridas punzantes, corrosivos, ataques biológicos y temperaturas y
          presiones extremas sin sufrir daños.​Una segunda exposición a dichos experimentos mejoró aún más su resistencia y durabilidad.
          El mismo experimento que le concedió su gran resistencia y durabilidad también lo ha dotado con una gran rapidez de
          recuperación de una lesión.`,
    img: 'assets/img/luke1.jpg',
    img1: 'assets/img/Mar.png',
    aparicion: '1972-06',
    casa: 'Marvel',
    poder: 'Controla el 71% del planeta,Telepatía,viajar a otras dimensiones,Natación súper sónica,Resistencia a las balas'
  },

  {
    nombre: 'Mujer Maravilla',
    bio: `Posee una gran fuerza que fácil rivaliza la de los Kriptonianos más poderosos (Superman, Supergirl)
          y posee una increíble inteligencia, pues ella tiene conocimiento de magia, ciencias, sabe más de 10
          idiomas y es considerada una de los miembros más sabios e inteligentes de la Liga de la Justicia.
          Puede volar a grandes velocidades. Es vulnerable pero es considerada a un nivel de diosa por el resto
          de los superhéroes ya que no envejece, es inmortal, y posee una belleza extraordinaria. Junto a esto,
          se trata de una excepcional combatiente cuerpo a cuerpo con o sin armas, entrenada en formas de combate
          utilizadas por las amazonas y tiene conocimiento de artes marciales orientales, entrena diariamente
          con miembros de la Liga como Batman o Black Canary, llegando incluso a superarlos en combate mano a mano.
           En varias ocasiones, se le ha visto entrenando con I-Ching, un excelente artista marcial, antiguo maestro de Bruce Wayne.`,
    img: 'assets/img/ww1.jpg',
    img1: 'assets/img/dc.jpg',
    aparicion: '1941-12',
    casa: 'Marvel',
    poder: 'Controla el 71% del planeta,Telepatía,viajar a otras dimensiones,Natación súper sónica,Resistencia a las balas'
  },
  {
    nombre: 'SuperMan',
    bio: `El superhéroe más reconocido en la cultura pop, Superman ha sido elevado al estado mítico folkhero.
     El bebé Kal-El llegó a la Tierra desde el planeta moribundo Krypton y fue encontrado por una pareja de
     granjeros que lo nombró Clark Kent y lo crió como propio. Descubriendo sus enormes poderes, le inculcaron
     fuertes valores morales y lo inspiraron a convertirse en un héroe`,
    img: 'assets/img/Superman.jpg',
    img1: 'assets/img/dc.jpg',
    aparicion: '1938-08-01',
    casa: 'Marvel',
    poder: 'Controla el 71% del planeta,Telepatía,viajar a otras dimensiones,Natación súper sónica,Resistencia a las balas'
  },

  {
    nombre: 'Spider-Man',
    bio: `Tras ser mordido por una araña radiactiva, obtuvo los siguientes poderes sobrehumanos, una gran fuerza,
          agilidad, poder trepar por paredes. La fuerza de Spider-Man le permite levantar 10 toneladas o más.
          Gracias a esta gran fuerza Spider-Man puede realizar saltos íncreibles. Un "sentido arácnido", que
          le permite saber si un peligro se cierne sobre él, antes de que suceda. En ocasiones este puede llevar
          a Spider-Man al origen del peligro.`,
    img: 'assets/img/Spider1.jpg',
    img1: 'assets/img/Mar.png',
    aparicion: '1962-08-01',
    casa: 'Marvel',
    poder: 'Controla el 71% del planeta,Telepatía,viajar a otras dimensiones,Natación súper sónica,Resistencia a las balas'
  },




  {nombre: 'Wolverine',
    bio: `En el universo ficticio de Marvel, Wolverine posee poderes regenerativos que pueden curar cualquier herida
          por mortal que ésta sea, además ese mismo poder hace que sea inmune a cualquier enfermedad existente en la Tierra
           y algunas extraterrestres . Posee también una fuerza sobrehumana, que si bien no se compara con la de otros superhéroes
          como Hulk, sí sobrepasa la de cualquier humano.`,
    img: 'assets/img/wolverine1.jpg',
    img1: 'assets/img/Mar.png',
    aparicion: '1974-11-01',
    casa: 'Marvel',
    poder: 'Controla el 71% del planeta,Telepatía,viajar a otras dimensiones,Natación súper sónica,Resistencia a las balas'
  }
];






constructor() {
console.log(' Service already ');
  }

  // para accesar a un metodo privado
  getHeroes() {
    return this.heroes;
  }

  getHeroe( idx: string ) {
    return this.heroes [idx];
  }

  buscarHeroes ( termino: string): Heroe[] {
    const heroesArr: Heroe[] = [];
    termino = termino.toLowerCase();
   for ( const heroe of this.heroes ) {
 const nombre = heroe.nombre.toLowerCase();
  if ( nombre.indexOf (termino) >= 0 ) {
    heroesArr.push( heroe );
  }
  }
  return heroesArr;
}
}
export interface Heroe {

    nombre: string;
    bio: string;
    poder: string;
    img: string;
    img1: string;
    aparicion: string;
    casa: string;

}
