
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

interface estlista {
  name: string;
  redirectTo: string;
  icon: string;
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  imports: [IonicModule, RouterModule],
})
export class InicioPage {
  Elementos: estlista[] = [
    {
      name: 'Alerta',
      redirectTo: '/alert',
      icon: 'notifications-outline'
    },
    {
      name: 'Card',
      redirectTo: '/card',
      icon: 'id-card-outline'
    },
    {
      name: 'DateTime',
      redirectTo: '/datetime',
      icon: 'calendar-outline'
    },
    {
      name: 'CheckBox',
      redirectTo: '/checkbox',
      icon: 'checkbox-outline'
    },
    {
      name: 'Fab',
      redirectTo: '/fab',
      icon: 'add-circle-outline'
    },
    {
      name: 'Grid',
      redirectTo: '/grid',
      icon: 'apps-outline'
    },
    {
      name: 'Infinite',
      redirectTo: '/infinite',
      icon: 'infinite-outline'
    },
    {
      name: 'Input',
      redirectTo: '/input',
      icon: 'pencil-outline'
    },
    {
      name: 'Modal',
      redirectTo: '/modal',
      icon: 'expand-outline'
    },
    {
      name: 'Popover',
      redirectTo: '/popover',
      icon: 'chatbubble-ellipses-outline'
    },
    {
      name: 'List',
      redirectTo: '/list',
      icon: 'list-outline'
    }
  ];
}