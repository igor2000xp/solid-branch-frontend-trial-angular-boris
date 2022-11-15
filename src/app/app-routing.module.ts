import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundPageComponent } from './UI/pages/not-found-page/not-found-page.component';
import { TabsPageComponent } from './UI/pages/tabs-page/tabs-page.component';

const routes: Routes = [
  { path: 'navigator', component: TabsPageComponent },
  { path: 'navigator?tab=0', component: TabsPageComponent },
  { path: 'navigator?tab=1', component: TabsPageComponent },
  { path: 'navigator?tab=2', component: TabsPageComponent },
  { path: 'navigator?tab=3', component: TabsPageComponent },
  { path: '', redirectTo: '/navigator?tab=0', pathMatch: 'full' },
  { path: '**', component: NotFoundPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
