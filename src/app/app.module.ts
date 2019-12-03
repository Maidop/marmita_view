import { BrowserModule } from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {
  ButtonModule,
  CardModule,
  ConfirmationService,
  ConfirmDialogModule,
  MenuModule,
  MessageService,
  SidebarModule,
  TableModule,
  ToastModule
} from 'primeng';
import {SidebarService} from './service/sidebar.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { IngredienteListComponent } from './ingrediente/ingrediente-list.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {HttpRequestInterceptor} from './congif/http-request.interceptor';
import { IngredienteFormComponent } from './ingrediente/ingrediente-form.component';
import {MenuItem} from "primeng/api/menuitem";
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IngredienteListComponent,
    IngredienteFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    ToastModule,
    SidebarModule,
    MenuModule,
    BrowserAnimationsModule,
    CardModule,
    TableModule,
    ConfirmDialogModule,
    HttpClientModule,
    PanelMenuModule,
    FormsModule,
    InputTextModule,
  ],
  providers: [
    SidebarService,
    MessageService,
    ConfirmationService,
    {
      provide: LOCALE_ID,
      useValue: 'pt'
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpRequestInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
