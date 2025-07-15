
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ComponentesModule } from 'src/app/componentes/componentes.module';

interface Alumno{
  name: string;
  beca: string;
}

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.page.html',
  styleUrls: ['./checkbox.page.scss'],
  imports: [IonicModule, RouterModule, ComponentesModule],
})


export class CheckboxPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

infoNombres: Alumno[] = [
  {
  name: 'Emanuel Gamez',
  beca: 'true'
},
  {
  name: 'Camila Guzman',
  beca: 'false'
},
  {
  name: 'Valentina Torres',
  beca: 'true'
},
  {
  name: 'Berenice Leon',
  beca: 'false'
},
  {
  name: 'Elizabeth Martinez ',
  beca: 'false'
},
  {
  name: 'Juan Madrid',
  beca: 'false'
}
]
}