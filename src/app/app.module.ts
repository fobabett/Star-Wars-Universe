import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ItemDetailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
