import {ViewEncapsulation, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections'
;import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { SearchKey } from 'src/app/models/SearchKey.model';
import { Default, Law, Laws } from 'src/app/models/laws.model';
import { ZMANIOBJECTONLYQAService } from 'src/app/services/zmaniobjectonlyqa.service';
import { DataBindingDirective } from '@progress/kendo-angular-grid';
import { ObservableDataLawsService } from 'src/app/services/observable-data.service';
import { SearcbySectionService } from 'src/app/services/searcby-section.service';
import { ExcelModule, GridModule, PDFModule } from '@progress/kendo-angular-grid';

@Component({
  selector: 'app-table-delv',
  templateUrl: './table-delv.component.html',
  styleUrls: ['./table-delv.component.scss']
})

export class TableDelvComponent implements OnInit,OnDestroy {
  @ViewChild(DataBindingDirective) dataBinding!: DataBindingDirective;
  // public gridData: any[] = employees;
  public gridView!:Laws[];
  law!:Law;
  Default = Default;
   arrLawFilter :Laws[] | undefined;
  arrayLaw:Array<string>=[];
  arrayLawID:Array<string>=[];
  arrayParagraph:Array<string>=[]
  subscription:Subscription= new Subscription();
  public mySelection: string[] = [];

      arrayLaws:Array<Laws> | undefined
      ArrayZ:Array<Laws> | undefined;
      searchKeyForm!: FormGroup 

  public onFilter(inputValue: string): void {
   
    this.dataBinding.skip = 0;
  }

  

 
  searchKey1:string[];
  searchKey2:string[];
  searchKey3:string[];
    public listItems: Array<string> = []

  submitted = false;
  
    public selectedValue = 'Medium';
    toggleEdit() {
      debugger;
      this.submitted = true;
  
      if (this.searchKeyForm?.status === 'DISABLED') {
        this.searchKeyForm.enable()
      } else {
        this.searchKeyForm?.disable()
      }
     
    }
    buildForm(fb: FormBuilder): FormGroup {
    return  fb.group({
   
      // selectTypeLaw: [ { value: "נא לבחור", disabled: true },, [Validators.required]],
      selectTypeLaw: [null, [Validators.required]],

      selectIDLaw: [ null, []],
      selectIDParagraph: [null, []],
      selectTypeRefQA: [ Default.DefaultValue, []],
      selectLocationRef: [Default.DefaultValue, []]
    });
    this.searchKeyForm.get('selectTypeLaw')?.setValue("")
  }
 

   constructor  (  public fb: FormBuilder,
    private zMANIMODELONLYQAService:ZMANIOBJECTONLYQAService,
    private observableDataService :ObservableDataLawsService,
    private SearcbySectionService:SearcbySectionService,
    ) {
      this.searchKeyForm = new FormGroup({});

    this.searchKey2 = [
      Default.DDLALL,
      Default.DDLRAKUV, 
      Default.DDLNRAKUV
      ];
     
      this.searchKey3 = [
        Default.DDLALL,
        Default.DDLINLOCATION,
        Default.DDLOUTLOCATION
    
      ];
    
      this.searchKey1 = [
         'הכל',
         'ראשי',
        'משני',
       
    ];
    }
  public columns: any[][] = [
   ["ID","מספר חוק"] ,
   ["type", "סוג חקיקה" ],
   ["name","שם חוק"],
   ["paragraph","סעיף בחוק בו מופיעה ההפניה"],
   ["title", "כותרת הפניה"],
   ["ref","קישור הפניה"],
   [ "isRefQK", "בדיקת ההפניה"],
   ["isSameLawRef", "מיקום ההפניה"]
  

  ];
  
  // public gridData: any = products;
  

  onSubmit() {
  console.log(this.searchKeyForm)
    this.submitted = true;
    if (this.searchKeyForm?.valid) {
      
      // alert('Please fill all the required fields!');
      this.law= this.searchKeyForm.value;
      this.arrLawFilter=this.SearcbySectionService.funFilter(this.law);
      this.gridView=this.arrLawFilter;
      // this.funFilter(law);
      return true;
    } else {
      alert("חובה לבחור סוג חוק")

      return false

      //fun
    }
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
  onCleanData() {
  //this.searchKeyForm.controls.rest()
  }
 ngOnInit(): void {
  var i =0;
  var j =0
//  this.arrayLaw= new Array<string>();
//  this.arrayParagraph= new Array<string>();
  this.searchKeyForm = this.buildForm(this.fb);
  const sub=  this.observableDataService.getData$.subscribe((newdata:Laws[])=>{
    this.gridView=newdata;
   })
 this.subscription.add(sub)
 this.ArrayZ=this.zMANIMODELONLYQAService.loadModelZMANI();
    this.observableDataService.setData(this.ArrayZ);
    
    this.gridView?.forEach(element => {
      debugger;
     if(this.arrayLaw.findIndex(x => x ==  element.name)==-1){
      this.arrayLaw[i++] = element.name;
     }
     if(this.arrayParagraph.findIndex(x => x ==  element.paragraph)==-1){
      this.arrayParagraph[j++]= element.paragraph
     }
   
      console.log( this.arrayLaw);
    });
  }
  
  
}

