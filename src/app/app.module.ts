import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestCompoComponent } from './features/test-compo/test-compo.component';
import { RemoveAPipe } from './core/pipes/remove-a.pipe';
import { HttpClientModule } from '@angular/common/http';
import { TestService } from './core/services/test.service';

@NgModule({
  declarations: [
    AppComponent,
    TestCompoComponent,
    RemoveAPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [TestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
