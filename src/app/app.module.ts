import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Prime ng modules
import { NgPrimeModule } from 'src/app/app.ngprime.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './shared/layout/footer/footer.component';
import { HeaderComponent } from './shared/layout/header/header.component';
import { MainContentComponent } from './shared/layout/main-content/main-content.component';
import { SideNavComponent } from './shared/layout/side-nav/side-nav.component';
import { HelpComponent } from './page/help/help.component';
import { AboutUsComponent } from './page/about-us/about-us.component';
import { HomeComponent } from './page/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    MainContentComponent,
    SideNavComponent,
    HomeComponent,
    AboutUsComponent,
    HelpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgPrimeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
