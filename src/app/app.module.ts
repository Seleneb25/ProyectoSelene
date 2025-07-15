import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment'; // Asegúrate de importar environment

// Configuración separada del Service Worker para evitar errores estáticos
const serviceWorkerConfig = ServiceWorkerModule.register('ngsw-worker.js', {
  enabled: environment.production, // Usamos environment.production en lugar de !isDevMode()
  registrationStrategy: 'registerWhenStable:30000'
});

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot({
      mode: 'md' // Configuración explícita del modo (md para Material Design, ios para iOS)
    }),
    AppRoutingModule,
    serviceWorkerConfig // Usamos la configuración separada
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}