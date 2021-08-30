import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableDelvComponent } from './components/table-delv/table-delv.component';
import { UploadXlsxComponent } from './components/upload-xlsx/upload-xlsx.component';
const routes: Routes = [
  {path:"",redirectTo:"delv",pathMatch:'full'},
  {path:"file",component:UploadXlsxComponent},
  {path:"delv",component:TableDelvComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
