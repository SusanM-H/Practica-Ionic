import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
// Importamos los componentes Standalone de Ionic necesarios para el menú lateral (Sidemenu)
import { IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonListHeader, IonNote, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterOutlet } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
// Importamos los íconos específicos que usaremos en el menú
import { homeOutline, homeSharp, personOutline, personSharp, mailOutline, mailSharp } from 'ionicons/icons';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  // Al usar Standalone Components, debemos declarar explícitamente qué dependencias usa este componente
  imports: [CommonModule, RouterLink, RouterLinkActive, IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonListHeader, IonNote, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterOutlet],
})
export class AppComponent {
  // Arreglo que define las páginas de nuestra app para mostrarlas dinámicamente en el HTML
  public appPages = [
    { title: 'Inicio', url: '/home', icon: 'home' },
    { title: 'Información Personal', url: '/personal-info', icon: 'person' },
    { title: 'Contacto', url: '/contact', icon: 'mail' },
  ];
  
  constructor() {
    // Registramos los íconos globalmente para que `<ion-icon>` pueda renderizarlos
    addIcons({ homeOutline, homeSharp, personOutline, personSharp, mailOutline, mailSharp });
  }
}
