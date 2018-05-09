import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { StoreModule } from '@ngrx/store';
import { FormsModule } from '@angular/forms';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { PipesModule } from '../../pipes/pipes.module';
import env from '../../../environment';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    StoreModule,
    StoreDevtoolsModule.instrument({ maxAge: 10 }),
    PipesModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
