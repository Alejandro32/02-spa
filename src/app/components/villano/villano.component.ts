import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { VillanosService } from '../../servicios/villanos.services';


@Component({
  selector: 'app-villano',
  templateUrl: './villano.component.html'
})
export class VillanoComponent  {

  villano: any = { };
  constructor( private ativatedRoute: ActivatedRoute , private villanosService: VillanosService ) {
    this.ativatedRoute.params.subscribe( params => {
      console.log( params ['id']);
      this.villano = this.villanosService.getVillano( params ['id']);
    });
  }

}
