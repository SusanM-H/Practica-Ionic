import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// Importamos los componentes de tarjeta (Card), botones, listas e íconos de Ionic
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonMenuButton, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonIcon, IonItem, IonLabel, IonChip } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
// Íconos visuales de Ionicons usados en el perfil
import { personOutline, schoolOutline, codeSlashOutline } from 'ionicons/icons';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.page.html',
  styleUrls: ['./personal-info.page.scss'],
  standalone: true, // Indica que este componente Angular no necesita un NgModule
  // Todos los componentes de Ionic usados en el HTML DEBEN ser importados aquí
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonMenuButton, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonIcon, IonItem, IonLabel, IonChip, CommonModule, FormsModule]
})
export class PersonalInfoPage implements OnInit {

  constructor() {
    // Es obligatorio registrar los íconos antes de poder usarlos en el HTML
    addIcons({ personOutline, schoolOutline, codeSlashOutline });
  }

  // Hook del ciclo de vida de Angular que se ejecuta al iniciar la pantalla
  ngOnInit() {
  }
}
