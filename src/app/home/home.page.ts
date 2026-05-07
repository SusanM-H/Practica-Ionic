import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
// Importamos los componentes visuales básicos de Ionic
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonButtons, IonMenuButton } from '@ionic/angular/standalone';

// El decorador @Component le dice a Angular que esta clase es un Componente Visual
@Component({
  selector: 'app-home', // Etiqueta HTML personalizada para este componente
  templateUrl: 'home.page.html', // Archivo donde vive el diseño (HTML)
  styleUrls: ['home.page.scss'], // Archivo donde viven los estilos (CSS/SCSS)
  // Declaramos los componentes de Ionic y Router de Angular que usaremos en el HTML
  imports: [RouterLink, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonButtons, IonMenuButton],
})
export class HomePage {
  constructor() {}
}
