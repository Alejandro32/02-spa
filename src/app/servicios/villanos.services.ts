import { Injectable } from '@angular/core';

@Injectable()
export class VillanosService {


private villanos: Villano [] = [

  {
    nombre: 'Jocker',
    bio:  `A diferencia de otros enemigos de Batman, él no posee ningún superpoder, sin embargo es descrito
           en muchos medios como un genio,llegando a crear diversidad de artefactos que lo ayudan a cumplir
           sus objetivos.Una herramienta suya, que resulta ser bastante popular, es el «Gas de la risa», que
           a pesar de que su nombre da a entender que hacer reír a la gente, en realidad le provoca un choque
           anafiláctico debido al bloqueo de los canales de calcio y potasio;Dependiendo de la dosis, la piel
          puede cambiar de color y el cabello puede volverse verde.Un «símbolo» suyo es dejarle a sus víctimas una
          sonrisa,en la mayoría de los cómics es provocada por el gas de la risa y en raras ocasiones por un
          veneno letal que tiene en la flor de su traje.Hay ocasiones donde se quiere presentar una versión
          más realista del personaje y la sonrisa es una cicatriz hecha con un cuchillo.`,
    img: 'assets/img/Villanos/jocker.jpg',
    img1: 'assets/img/dc.jpg',
    poder: 'Manipulacion,destreza de combate y estrategica.',
    aparicion: '1940',
    casa: 'DC'
  },
  {
    nombre: 'Darkseid',
    bio:  `Darkseid es uno de los seres más poderosos del Universo DC de la raza conocida como Nuevos Dioses. Su poder principal, los haces omega, es una forma de energía que dispara desde sus ojos o manos como una fuerza
           de conmoción o una energía desintegradora que es capaz de borrar objetos y organismos vivos de la existencia. Algunos súper seres, como Superman y Doomsday , han demostrado ser resistentes a los rayos, aunque en
           el caso de Superman, con mucho dolor. Además, Orión pudo desviarlos, y en una historia cruzada, Galactusno se vio afectado por ellos. Estos rayos provienen de una fuente de energía cósmica llamada "Efecto Omega".
           Los Omega Beams también pueden resucitar seres caídos previamente matados por ellos, dependiendo de la voluntad del Señor Oscuro. A veces usará esto como un castigo para aquellos que le fallan, pero son demasiado
           valiosos para matar directamente. Darkseid tiene un control preciso de esta energía, y su objetivo infalible permite que el rayo se desplace en líneas rectas, se doble o se curva en las esquinas e incluso pase a
           través de la materia u otras formas de energía. También puede teletransportarse a sí mismo oa otros a través del tiempo y el espacio.Su Omega Sanction atrapa a los organismos en una serie de realidades alternativas,
           cada una peor que la anterior. Durante la crisis final, Darkseid usó sus Omega Beams para otorgarle el poder a Mary Marvel, y luego sus poderes se basaron en la Antivida en lugar de la magia.
           La fuerza de Darkseid se describe como inmensamente alta, rompiendo sin esfuerzo un anillo de linterna con sus propias manos. Fácilmente ha vencido a dos kryptonianos a la vez, y a toda la Liga de la Justicia. También puede moverse
           a gran velocidad, ya que ha podido atrapar a Superman con la guardia baja, y se sabe que puede reaccionar en nanosegundos.Incluso sin su poder y fuerza completos, Darkseid ha demostrado ser capaz de resistir a un Dios
           olímpico como Zeus. También puede aumentar su tamaño físico.Darkseid también tiene poderes adicionales de telepatía y telequinesia , y puede crear avatares psiónicos. Dado que Darkseid es una deidad, también es inmortal,
           ya que ha vivido durante varios cientos de miles de años.Puede regenerarse de la desintegración completa al instante, haciéndolo imposible de matar.`,
    img: 'assets/img/Villanos/Dark.jpg',
    img1: 'assets/img/dc.jpg',
    poder: 'Posee un intelecto superhumano, gran fuerza física, resistencia y durabilidad que se comparan con los de Superman, e igual que él goza de un factor de curación regenerativo. Su principal poder son los Rayos Omega',
    aparicion: '1970-12',
    casa: 'DC'
  },


  {

  nombre: 'Dormammu',
  bio:  `Dormammu nació en una dimensión altamente violenta y con guerras constantes, y así, él se especializó en una forma de combate de esta dimensión, y ya que él es una entidad hecha de pura energía mística, Dormammu tiene grandes
         poderes mágicos (que ultrapasan los del demonio Mephisto y rivalizan con el poder cósmico de Eternity).`,
  img: 'assets/img/Villanos/dormamu.jpg',
  img1: 'assets/img/Mar.png',
  poder: 'Poderes de energía mística con gran fuerza,Poderes elementales,La capacidad de crear formas de vidas artificiales,Viajes temporales,Trasmutación de la materia,Teletransportación interdimensional.Es inmortal.',
  aparicion: '1964-11',
  casa: 'Marvel'
},

  {
    nombre: 'Thanos',
    bio:  `Thanos es un miembro mutante de la raza de superhumanos conocidos como los Eternos de Titán.El personaje posee habilidades comunes a los Eternos, pero se amplifica en mayor grado
           a través de una combinación de su patrimonio mutante-Eterno, amplificación biónica, misticismo y poder otorgado por la entidad abstracta, la Muerte. Demostrando una enorme fuerza
           sobrehumana, resistencia y durabilidad, Thanos puede absorber y proyectar grandes cantidades de energía cósmica y es capaz de usar telequinesis, telepatía y manipulación de la materia.
           Thanos es un consumado combatiente mano amano, que ha sido entrenado en el arte de la guerra en Titán.`,
    img: 'assets/img/Villanos/thanos.jpg',
    img1: 'assets/img/Mar.png',
    poder: `Amplificación biónica, misticismo y poder otorgado por la entidad abstracta,fuerza sobrehumana, resistencia y durabilidad, Thanos puede absorber y proyectar grandes cantidades de energía
            cósmica y es capaz de usar telequinesis, telepatía y manipulación de la materia`,
    aparicion: '1973-02',
    casa: 'Marvel'
  },

  {
    nombre: 'Ultron',
    bio:  `La apariencia visual y los poderes de Ultron han variado, pero sus poderes comunes incluyen niveles sobrehumanos de fuerza, velocidad, resistencia, durabilidad y reflejos;
           vuelo a velocidades subsónicas; varias armas ofensivas como rayos concusivos de energía (encéfalo-rayo), disparados de sus manos y sus sensores ópticos, además de un "rayo
           encefalopático", el cual sitúa a sus víctimas en un estado de coma semejante a la muerte. Este último rayo también permite a Ultron hipnotizar y controlar mentalmente a sus
           víctimas, o implantar órdenes hipnóticas subliminales dentro de sus mentes para ser realizados en un momento posterior. Ultron también tiene la habilidad de convertir la
           radiación electromagnética en energía eléctrica para su uso o almacenamiento. Ultron tiene una increíble habilidad para la creación y la auto-reparación, habilidades sobrehumanas
           de análisis cibernético, y la habilidad de procesar información y realizar cálculos con rapidez y precisión sobrehumanas. Es un experto en robótica y estrategia.`,
    img: 'assets/img/Villanos/ultron.jpg',
    img1: 'assets/img/Mar.png',
    poder: 'Armadura de Adamantium,Dominio de Tecnologia Avanzada,duplicar cuerpos roboticos,rayo encefalopático',
    aparicion: '1963-07',
    casa: 'Marvel'
  },


  {
    nombre: 'Venom',
    bio:  `El simbionte Venom no siempre fue el enemigo del Spider-Man o un elemento de su fondo de armario. Su origen está asociado a un lejano planeta en la galaxia de Andrómeda, llamado Klyntar. Venom es miembro de una raza alienígena
           de simbiontes que reciben el mismo nombre que su planeta natal.El planeta Klyntar era un mundo frío y salvaje, donde imperaba la ley del más fuerte. En ese ambiente vivían los Klyntar, una especie de extraterrestres inorgánicos,
           amorfos y simbióticos. En su estado natural originario, eran benevolentes y se unían mediante simbiosis a especies menores, transformando a anfitriones dignos en nobles guerreros. De esa forma, las criaturas que servían como
           anfitriones gozaban de una oportunidad mayor de supervivencia en ese planeta tan cruel, al mismo tiempo que ellos quedaban más protegidos como raza y se garantizaba una sociedad intergaláctica pacífica.`,
    img: 'assets/img/Villanos/venom.jpg',
    poder: 'Fuerza sobrehumana,Resistencia,Vigor,Colmillos venenosos,Factor de curación,Camuflaje,Memoria Genética,Detección de descendientes,Creación de telarañas,Reconstitución de su biomasa,Percepción extrasensorial.',
    img1: 'assets/img/Mar.png',
    aparicion: '1984-12',
    casa: 'DC'
  },


 ];






constructor() {
console.log(' Service already ');
  }

  // para accesar a un metodo privado
  getVillanos() {
    return this.villanos;
  }

  getVillano( idx: string ) {
    return this.villanos [idx];
  }


  buscarVillanos ( termino: string): Villano[] {
    const villanosArr: Villano[] = [];
    termino = termino.toLowerCase();
   for ( const villano of this.villanos ) {
 const nombre = villano.nombre.toLowerCase();
  if ( nombre.indexOf (termino) >= 0 ) {
    villanosArr.push( villano );
  }
  }
  return villanosArr;
}
}


export interface Villano {

    nombre: string;
    bio: string;
    poder: string;
    img: string;
    img1: string;
    aparicion: string;
    casa: string;

}
