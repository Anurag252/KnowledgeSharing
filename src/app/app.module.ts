import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
    ContentdataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
