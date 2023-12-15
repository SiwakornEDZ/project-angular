import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {FormBuilder, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';
import {MatButtonModule} from '@angular/material/button';
import { CardComponent } from './card/card.component';
import {MatCardModule} from '@angular/material/card';
import { StepperComponent } from './stepper/stepper.component';
import {MatTableModule} from '@angular/material/table';
import { TableComponent } from './table/table.component';
import { NewpageComponent } from './newpage/newpage.component';
import { StatebuttonComponent } from './statebutton/statebutton.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { ItemOutputComponent } from './item-output/item-output.component';
import { ItemDetailsMetadataComponent } from './item-details-metadata/item-details-metadata.component';
import { AliasingComponentComponent } from './aliasing.component/aliasing.component.component';
import { InputOutputComponent } from './input-output/input-output.component';


@NgModule({
    declarations: [AppComponent, NewpageComponent, StatebuttonComponent, ItemDetailComponent, ItemOutputComponent, ItemDetailsMetadataComponent, AliasingComponentComponent, InputOutputComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatSlideToggleModule,
        MatButtonModule,
        MatStepperModule,
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatCardModule,
        MatTableModule,
        NavbarComponent,
        FooterComponent,
        CardComponent,
        StepperComponent,
        TableComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
 }

