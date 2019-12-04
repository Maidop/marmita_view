import {BrowserModule} from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {
    ButtonModule,
    CardModule,
    CheckboxModule,
    ConfirmationService,
    ConfirmDialogModule,
    DialogModule,
    InputTextModule,
    MenuModule,
    MultiSelectModule,
    MessageService,
    PanelMenuModule,
    SidebarModule,
    TableModule,
    ToastModule,
    DropdownModule
} from 'primeng';
import {SidebarService} from './service/sidebar.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {IngredienteListComponent} from './ingrediente/ingrediente-list.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {HttpRequestInterceptor} from './config/http-request.interceptor';
import {IngredienteFormComponent} from './ingrediente/ingrediente-form.component';
import {FormsModule} from '@angular/forms';
import {ComidaFormComponent} from './comida/comida-form.component';
import {ComidaListComponent} from './comida/comida-list.component';
import { CardapioFormComponent } from './cardapio/cardapio-form.component';

import { ClienteFormComponent } from './cliente/cliente-form.component';
import {ClienteListComponent} from './cliente/cliente-list.component';
import {CardapioListComponent} from './cardapio/cardapio-list.component';
import {LoginComponent} from './login/login.component';
import { TipoComidaListComponent } from './tipo-comida/tipo-comida-list.component';
import {TipoComidaFormComponent} from "./tipo-comida/tipo-comida-form.component";

import {TamanhoListComponent} from "./tamanho/tamanho-list.component";
import {TamanhoFormComponent} from "./tamanho/tamanho-form.component";

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
    CardapioListComponent,
    CardapioFormComponent,
    ClienteListComponent,
    CardapioListComponent,
    CardapioFormComponent,
    LoginComponent,
    TipoComidaListComponent,
    TipoComidaFormComponent,
    LoginComponent,
    TamanhoListComponent,
    TamanhoFormComponent
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
        CheckboxModule,
        DialogModule,
        MultiSelectModule,
        DropdownModule,
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
    CheckboxModule,
    DialogModule,
    MultiSelectModule,
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
export class AppModule {
}
