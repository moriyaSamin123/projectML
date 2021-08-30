import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { LabelModule } from '@progress/kendo-angular-label';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { TableDelvComponent } from './components/table-delv/table-delv.component';
import { UploadXlsxComponent } from './components/upload-xlsx/upload-xlsx.component';
import { UploadModule } from '@progress/kendo-angular-upload';
import { ExcelExportModule } from '@progress/kendo-angular-excel-export';
import { ExcelModule, GridModule, PDFModule } from '@progress/kendo-angular-grid';
import { RouterModule } from '@angular/router';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { PDFExportModule } from '@progress/kendo-angular-pdf-export';
import { ChartsModule } from '@progress/kendo-angular-charts';
import 'hammerjs';
import {DropdownModule} from 'primeng/dropdown';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// The browser platform with a compiler
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab



@NgModule({
  declarations: [
    TableDelvComponent,
    AppComponent,
    UploadXlsxComponent,
  ],
  imports: [
    ReactiveFormsModule,
    AccordionModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    UploadModule,
    DropDownsModule,
    GridModule,
    AccordionModule,
    ExcelExportModule,
    ExcelModule,
    PDFExportModule ,
    PDFModule,
    LabelModule,
    InputsModule,
    ChartsModule,
    DropdownModule,
    AutoCompleteModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
