import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GrupinhosPageRoutingModule } from './grupinhos-routing.module';

import { GrupinhosPage } from './grupinhos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GrupinhosPageRoutingModule
  ],
  declarations: [GrupinhosPage]
})
export class GrupinhosPageModule {}
