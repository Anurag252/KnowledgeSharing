import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { firebaseConfig } from '../environments/environment'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MaincontainerComponent } from './maincontainer/maincontainer.component';
import { SearchboxComponent } from './searchbox/searchbox.component';
import { ContentboxComponent } from './contentbox/contentbox.component';
import { ProfileboxComponent } from './profilebox/profilebox.component';
import { ContentheadingComponent } from './contentheading/contentheading.component';
import { ContentdataComponent } from './contentdata/contentdata.component';
import { LoginComponent } from './login/login.component';
import { AuthenticationServiceService } from './authentication-service.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SidebarComponent,
    MaincontainerComponent,
    SearchboxComponent,
    ContentboxComponent,
    ProfileboxComponent,
    ContentheadingComponent,
    ContentdataComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule,
  ],
  providers: [AuthenticationServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
