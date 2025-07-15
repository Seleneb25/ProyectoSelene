
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ComponentesModule } from 'src/app/componentes/componentes.module';
@Component({
  selector: 'app-input',
  templateUrl: './input.page.html',
  styleUrls: ['./input.page.scss'],
  imports: [IonicModule, RouterModule, ComponentesModule, FormsModule],
})
export class InputPage implements OnInit {
  alumno = {
    nombre: 'Selene',
    apellidos: 'Gamez',
    nacimiento: new Date('2004-09-24').toISOString(),
    email: 'selene@gmail.com',
    telefono: '897123456'
  };
  constructor() { }
  ngOnInit() {
    const nacimiento = new Date(this.alumno.nacimiento);
    console.log(nacimiento.getFullYear()); 
    console.log(nacimiento.getMonth());    
    console.log(nacimiento.getDate());     
  }
  get edad() { 
    if (!this.alumno.nacimiento) return 0;
    const fechaNac = new Date(this.alumno.nacimiento);
    const hoy = new Date();
    let edad = hoy.getFullYear() - fechaNac.getFullYear();
    if (hoy.getMonth() < fechaNac.getMonth() || 
        (hoy.getMonth() === fechaNac.getMonth() && hoy.getDate() < fechaNac.getDate())) {
      edad--;
    }
    return edad;
  }
}

