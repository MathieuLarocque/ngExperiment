import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { ModelService } from './model.service';
import { StoreModule } from './store/store.module';
import { NgGridModule } from 'angular2-grid';
import { AppComponent } from './app.component';
import { InternalComponent } from './internal/internal.component';
import { OtherComponent } from './other/other.component';
// import { ResponsiveModule } from 'ng2-responsive';
import { DispatchPipe } from './dispatch.pipe';
import { TheBeautifulPeopleComponent } from './the-beautiful-people/the-beautiful-people.component';

const appRoutes: Routes = [
  // { path: '', component: AppComponent },
  { path: 'other',      component: OtherComponent },
  {
    path: 'internal',
    component: InternalComponent,
    data: { title: 'Heroes List' }
  }
];


@NgModule({
  declarations: [
    AppComponent,
    InternalComponent,
    OtherComponent,
    DispatchPipe,
    TheBeautifulPeopleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    StoreModule,
    NgGridModule,
    // ResponsiveModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ModelService],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
