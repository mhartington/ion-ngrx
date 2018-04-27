import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { todosReducer } from './reducers';
import { IonicModule } from '@ionic/angular';
import { AppComponent } from './app.component';

import env from '../environment';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ todos: todosReducer }),
    env.name === 'development'
      ? StoreDevtoolsModule.instrument({ maxAge: 10 })
      : [],
    IonicModule.forRoot(),
    RouterModule.forRoot([
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', loadChildren: './pages/home/home.module#HomePageModule' }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
