import { NgModule } from '@angular/core';
// MODULO NECESARIO
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
// RUTAS
import { RouterModule } from '@angular/router';
// MODULOS DE HTTP
import { HttpModule, Http } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { BrowserModule } from '@angular/platform-browser';

// SERVICIOS
import { VistaService } from './services/vista.service';

// COMPONENTES
import { HeaderComponent } from './header/header.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
   declarations: [
        HeaderComponent,
        NopagefoundComponent,
        FooterComponent,
 ],
    exports: [
        NopagefoundComponent,
        HeaderComponent,
        FooterComponent
     ],
    imports: [
        BrowserModule,
    //HTTP
        HttpModule, 
        CommonModule,
        RouterModule,
        FormsModule,
        HttpClientModule
     ],
     providers:[
        VistaService
     ]
})

export class SharedModule { }
