import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from  'angular-bootstrap-md';

// MODULO NECESARIO
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
// MODULOS DEL TRADUCTOR
import { HttpModule, Http } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
// MODULOS
import { SharedModule } from '../shared/shared.module';
// RUTAS
import { PAGES_ROUTES } from './pages.routes';
// COMPONENTES
import { PagesComponent } from './pages.component';
    
import { HomeComponent } from './home/home.component';



@NgModule({
   declarations: [
        PagesComponent,
        HomeComponent
        
 ],
    exports: [
         HomeComponent,
     ],
     imports: [
        MDBBootstrapModule.forRoot(),
        BrowserModule,
         SharedModule,
         CommonModule,
         PAGES_ROUTES,
         FormsModule,
         HttpModule
     ],
     providers:[
    ],
    schemas: [NO_ERRORS_SCHEMA]
})

export class PagesModule { }
