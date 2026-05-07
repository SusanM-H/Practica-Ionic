import { Routes } from '@angular/router';

// Este archivo define cómo navegamos entre las distintas páginas de la aplicación
export const routes: Routes = [
  {
    // Ruta principal (Home). Cuando el usuario vaya a /home, cargará este componente
    path: 'home',
    // Usamos lazy loading (carga diferida) para que la página solo se descargue si el usuario navega hacia ella
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    // Ruta por defecto: Si el usuario entra a la raíz de la app ('/'), será redirigido a '/home'
    path: '',
    redirectTo: 'home',
    pathMatch: 'full', // Exige que la ruta esté completamente vacía para redirigir
  },
  {
    // Ruta para la página de Información Personal
    path: 'personal-info',
    loadComponent: () => import('./personal-info/personal-info.page').then( m => m.PersonalInfoPage)
  },
  {
    // Ruta para la página de Contacto
    path: 'contact',
    loadComponent: () => import('./contact/contact.page').then( m => m.ContactPage)
  },
];
