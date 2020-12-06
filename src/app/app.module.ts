import { BrowserModule } from '@angular/platform-browser';
import { Injector, NgModule } from '@angular/core';
import { Location } from '@angular/common';
import { createCustomElement } from '@angular/elements';
import { Router } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  entryComponents: [AppComponent],
})
export class AppModule {
  constructor(
    private injector: Injector,
    private router: Router,
    private location: Location
  ) {
    const appElement = createCustomElement(AppComponent, {
      injector: this.injector,
    });

    customElements.define('app-element', appElement);

    this.router.navigateByUrl(this.location.path(true));
    this.location.subscribe((data) => {
      this.router.navigateByUrl(data.url!);
    });
  }

  ngDoBootstrap() {}
}
