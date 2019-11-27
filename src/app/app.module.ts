import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestCompoComponent } from './features/test-compo/test-compo.component';
import { RemoveAPipe } from './core/pipes/remove-a.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TestCompoComponent,
    RemoveAPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
