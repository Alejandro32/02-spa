
import { Component, OnInit } from '@angular/core';
import { VillanosService, Villano } from '../../servicios/villanos.services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-villanos',
  templateUrl: './villanos.component.html',
  styleUrls: ['./villanos.component.css']
})
export class VillanosComponent implements OnInit {

  villanos: Villano[] = [];

  constructor(private _villanosServices: VillanosService, private router: Router) {
   }

  ngOnInit() {
    this.villanos = this._villanosServices.getVillanos();
    console.log(this.villanos);
 }
verVillano ( idx: number) {
  this.router.navigate( ['/villano', idx]);
}
}
