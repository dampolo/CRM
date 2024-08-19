import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimationsAsync(),
    importProvidersFrom(
      provideFirebaseApp(() =>
        initializeApp({
          projectId: 'dp-crm-25fdd',
          appId: '1:1070906193719:web:74c80c9524ab89a6f88cb2',
          storageBucket: 'dp-crm-25fdd.appspot.com',
          apiKey: 'AIzaSyCm17JBbY3MbiucvBtqO-APXzvGiP4kd4E',
          authDomain: 'dp-crm-25fdd.firebaseapp.com',
          messagingSenderId: '1070906193719',
        })
      )
    ),
    importProvidersFrom(provideFirestore(() => getFirestore())),
  ],
};
