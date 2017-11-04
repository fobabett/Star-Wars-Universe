import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { SWAPIService } from './swapi.service';
import { appRoutingProviders, routing } from './app.routes';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { SearchPipe } from './search.pipe';
import { ModalComponent } from './modal/modal.component';
import { DropdownFilterComponent } from './dropdown-filter/dropdown-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    SearchBarComponent,
    SearchPipe,
    ModalComponent,
    DropdownFilterComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpModule,
    FormsModule
  ],
  providers: [appRoutingProviders, SWAPIService],
  bootstrap: [AppComponent]
})
export class AppModule { }
