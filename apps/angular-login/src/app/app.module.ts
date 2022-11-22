import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { DesignSystemAngularModule } from '@gota/design-system-angular';
import { defineCustomElements } from '@gota/design-system/loader';

defineCustomElements();

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    DesignSystemAngularModule,
    RouterModule.forRoot([], { initialNavigation: 'enabledBlocking' }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
