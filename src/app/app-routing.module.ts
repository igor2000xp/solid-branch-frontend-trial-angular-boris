import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/navigator?tab=0', pathMatch: 'full' },
  // { path: '/navigator?tab=0', component: TabPage },
  // { path: '/navigator?tab=1', component: TabPage },
  // { path: '/navigator?tab=2', component: TabPage },
  // { path: '/navigator?tab=r', component: TabPage },
  // { path: '**', component: Page404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
