import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent  {

  constructor( private ativatedRoute: ActivatedRoute ) {
    this.ativatedRoute.params.subscribe(params => {console.log ( params );
    })
  }

}
