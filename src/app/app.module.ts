import { BrowserModule } from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {
  ButtonModule,
  CardModule,
  ConfirmationService,
  ConfirmDialogModule, DialogModule, InputTextModule,
  MenuModule,
  MessageService, PanelMenuModule,
  SidebarModule, SplitButtonModule,
  TableModule,
  ToastModule
} from 'primeng';
import {SidebarService} from './service/sidebar.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { IngredienteListComponent } from './ingrediente/ingrediente-list.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {HttpRequestInterceptor} from './config/http-request.interceptor';
import {FormsModule} from '@angular/forms';

import { ClienteFormComponent } from './cliente/cliente-form.component';
import {ClienteListComponent} from './cliente/cliente-list.component';
import {ComidaFormComponent} from './comida/comida-form.component';
import {ComidaListComponent} from './comida/comida-list.component';
import {IngredienteFormComponent} from "./ingrediente/ingrediente-form.component";
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IngredienteListComponent,
    IngredienteFormComponent,
    ComidaFormComponent,
    ComidaListComponent,
    ClienteFormComponent,
    ClienteListComponent,
    LoginComponent
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
    DialogModule,
    SplitButtonModule,
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
