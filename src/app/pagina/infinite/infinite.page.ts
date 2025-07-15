
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ComponentesModule } from 'src/app/componentes/componentes.module';

@Component({
  selector: 'app-infinite',
  templateUrl: './infinite.page.html',
  styleUrls: ['./infinite.page.scss'],
   imports: [IonicModule, RouterModule, ComponentesModule],
})
export class InfinitePage implements OnInit {
datos=Array(140);
  constructor() { }

  ngOnInit() {
    for (let i = 1; i < 51; i++) {
      this.datos.push(`Datos ${i}`);
    }
  }

}
