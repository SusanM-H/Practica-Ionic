import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// Importamos todos los componentes del formulario e interfaz
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonMenuButton, IonButton, IonIcon, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonItem, IonInput, IonTextarea } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
// Íconos de redes sociales y de enviar
import { logoInstagram, logoGithub, sendOutline } from 'ionicons/icons';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
  standalone: true, // Funciona sin NgModule
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonMenuButton, IonButton, IonIcon, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonItem, IonInput, IonTextarea, CommonModule, FormsModule]
})
export class ContactPage implements OnInit {

  constructor() {
    // Registramos los íconos de redes sociales
    addIcons({ logoInstagram, logoGithub, sendOutline });
  }

  ngOnInit() {
  }
}
