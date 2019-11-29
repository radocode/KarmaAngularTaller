import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestCompoComponent } from './features/test-compo/test-compo.component';


const routes: Routes = [
  { path: 'testCompo', component: TestCompoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
