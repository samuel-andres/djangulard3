import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { AutosFormComponent } from './components/autos-form/autos-form.component';
import { AutosListComponent } from './components/autos-list/autos-list.component';
import { AutoModalComponent } from './components/auto-modal/auto-modal.component';

import { AutosService } from './services/autos.service';
import { AutoEditModalComponent } from './components/auto-edit-modal/auto-edit-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    AutosFormComponent,
    AutosListComponent,
    AutoModalComponent,
    AutoEditModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    NgbModule,
    ReactiveFormsModule,
  ],
  providers: [AutosService],
  bootstrap: [AppComponent],
})
export class AppModule {}
