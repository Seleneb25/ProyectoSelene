
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-chip',
  templateUrl: './chip.page.html',
  styleUrls: ['./chip.page.scss'],
  imports: [IonicModule, RouterModule]
})
export class ChipPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
