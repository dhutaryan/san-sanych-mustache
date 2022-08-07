import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { TuiRootModule } from '@taiga-ui/core';

import { CoreModule } from './core/core.module';
import { AppLayoutModule } from './app-layout/app-layout.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    provideFirebaseApp(() =>
      initializeApp({
        apiKey: process.env['FIRESTORE_API_KEY'],
        authDomain: process.env['FIRESTORE_AUTH_DOMAIN'],
        projectId: process.env['FIRESTORE_PROJECT_ID'],
        storageBucket: process.env['FIRESTORE_STORAGE_BUCKET'],
        messagingSenderId: process.env['FIRESTORE_AMESSAGING_SENDER_ID'],
        appId: process.env['FIRESTORE_APP_ID'],
      }),
    ),
    provideFirestore(() => getFirestore()),
    CoreModule,
    TuiRootModule,
    AppLayoutModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
