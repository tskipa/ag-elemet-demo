import { BrowserModule } from '@angular/platform-browser';
import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  entryComponents: [AppComponent],
})
export class AppModule {
  constructor(private injector: Injector) {
    const appElement = createCustomElement(AppComponent, {
      injector: this.injector,
    });

    customElements.define('app-element', appElement);
  }

  ngDoBootstrap() {}
}
