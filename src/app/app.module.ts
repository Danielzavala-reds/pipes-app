import { AppRouterModule } from './app-router.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LOCALE_ID ,NgModule } from '@angular/core';



import { AppComponent } from './app.component';
// import { PrimeNgModule } from './prime-ng/prime-ng.module';
import { SharedModule } from './shared/shared.module';
import { VentasModule } from './ventas/ventas.module';

// Cambiar el locale de la app
import  localeEsMx  from "@angular/common/locales/es-MX";
import  localeEsFr  from "@angular/common/locales/fr";
import { registerLocaleData } from "@angular/common";
registerLocaleData(localeEsMx);
registerLocaleData(localeEsFr);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRouterModule,
    SharedModule,
    VentasModule
    // PrimeNgModule,
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'es-MX'},
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
