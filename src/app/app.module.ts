import { BrowserModule } from '@angular/platform-browser';
import { Injector, NgModule } from '@angular/core';
import { Location } from '@angular/common';
import { createCustomElement } from '@angular/elements';
import { Router } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { GaugesModule } from '@progress/kendo-angular-gauges';

import { AppRoutingModule } from './app-routing.module';
import { LazyModule } from './lazy/lazy.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GaugeComponent } from './gauge/gauge.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, GaugeComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    LazyModule,
    GaugesModule,
  ],
  providers: [],
  entryComponents: [AppComponent, GaugeComponent],
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
    const gaugeElement = createCustomElement(GaugeComponent, {
      injector: this.injector,
    });

    customElements.define('app-element', appElement);
    customElements.define('linear-gauge-element', gaugeElement);

    this.router.navigateByUrl(this.location.path(true));
    this.location.subscribe((data) => {
      this.router.navigateByUrl(data.url!);
    });
  }

  ngDoBootstrap() {}
}
