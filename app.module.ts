import { DefaultUploaderComponent } from './default.component';



import { HttpModule, JsonpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import 'rxjs/add/operator/map';
import { NgModule, ModuleWithProviders, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { UploaderModule } from '@syncfusion/ej2-angular-inputs';
import { DialogModule } from '@syncfusion/ej2-angular-popups';
import { CheckBoxModule  } from '@syncfusion/ej2-angular-buttons';
import { GridAllModule } from '@syncfusion/ej2-angular-grids';









import { SharedModule } from './common/shared.module';





@NgModule({
    imports: [SharedModule, CheckBoxModule,GridAllModule, UploaderModule, DialogModule, FormsModule, CommonModule, ReactiveFormsModule, HttpModule, JsonpModule, BrowserModule],
declarations: [DefaultUploaderComponent],
bootstrap: [DefaultUploaderComponent]
})
export class AppModule { }