import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule, AngularFireAuth } from '@angular/fire/auth';
import { environment } from '../environments/environment'
// for AngularFireDatabase
//import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireDatabaseModule } from '@angular/fire/database';
// for AngularFireAuth



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
import { AuthService } from './service/authentication-service.service';
import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './app.router';
import { NavtabComponent } from './navtab/navtab.component';
import { HeadertabComponent } from './headertab/headertab.component';
import { FirebaseService } from './service/firebase.service';


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
    LoginComponent,
    NavtabComponent,
    HeadertabComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(rootRouterConfig, { useHash: false }),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule,  
    AngularFireDatabaseModule  
  ],
  providers: [AuthService,FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
