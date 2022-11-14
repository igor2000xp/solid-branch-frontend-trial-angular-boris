import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundPageComponent } from './UI/pages/not-found-page/not-found-page.component';
import { TabsPageComponent } from './UI/pages/tabs-page/tabs-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DataFilterPipe } from './pipes/data-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundPageComponent,
    TabsPageComponent,
    DataFilterPipe,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
