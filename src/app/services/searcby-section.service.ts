import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { Default, Law, Laws } from '../models/laws.model';
import { ObservableDataLawsService } from 'src/app/services/observable-data.service';

@Injectable({
  providedIn: 'root'
})
export class SearcbySectionService implements OnInit,OnDestroy {
  dataSearch!:Laws[] ;
  subscription:Subscription= new Subscription();
  arrLawFilter:Laws[]| undefined;
  Default=Default;
  getDataOrByIDLaw(id:string,type:string,isSpecific:Boolean) {
  
    var obj:Laws[];
    
    if(!type){
      if(isSpecific){
        obj = this.dataSearch?.filter(function(node) {
          return node.name ==id;

          
      });
     
      }
      else{
        obj = this.dataSearch
      }
  
    }
   
else{
  if(isSpecific){ 
    obj = this.dataSearch?.filter(function(node) {
    return node.name ==id && node.type==type;
});
}else{
  obj = this.dataSearch?.filter(function(node) {
    return  node.type == type
  });
 
}
 
}
    return obj; 

}

getDataOrByIDLawByParagraph(id:string,type:string,isSpecific:Boolean,paragraph:string) {
  debugger
  var obj
  var getDataOrByIDLaw = this.getDataOrByIDLaw(id,type,isSpecific);
  if(paragraph){
     obj = getDataOrByIDLaw?.filter(function(node) {
      return node.paragraph ==paragraph;
  });
  
  }
  else{
    obj=getDataOrByIDLaw;
  }

return obj; 

}
getDataOrByIDLawByIsRefQA(isRefQA:string,id:string,type:string,isSpecific:Boolean,isParagraph:Boolean,paragraph:string) {
  debugger
  var obj
  var getDataOrByIDLaw= isParagraph?this.getDataOrByIDLawByParagraph(id,type,isSpecific,paragraph):this.getDataOrByIDLaw(id,type,isSpecific)
  if(isRefQA){
    obj = getDataOrByIDLaw?.filter(function(node) {
      return node.isRefQK ==isRefQA;
  });
  }
  else{
    obj = getDataOrByIDLaw
  }
 

return obj;
}
getDataByIDLawByIsRefQAByIsSameLawRef(isSameLawRef:string,isRefQA:string,id:string,type:string,isSpecific:Boolean,isParagraph:Boolean,paragraph:string) {
  debugger;
  var obj
  var getDataByIDLawByIsRefQA = this.getDataOrByIDLawByIsRefQA(isRefQA,id,type,isSpecific,isParagraph,paragraph)
  if(isSameLawRef){
    obj = getDataByIDLawByIsRefQA?.filter(function(node) {
      return node.isSameLawRef ==isSameLawRef;
    });
  }
  else{
    obj=getDataByIDLawByIsRefQA
  }
  

return obj;
}
checkReset(law?:Law){

  if(law?.selectTypeLaw==Default.DDLALL){
    law.selectTypeLaw="";
  }
  if(law?.selectIDLaw==Default.DefaultValue){
    law.selectIDLaw="";
  }
  if(law?.selectIDParagraph==Default.DefaultValue){
    law.selectIDParagraph="";
  }
  if(law?.selectLocationRef==Default.DDLALL){
    law.selectLocationRef="";
  }
  else{
    if(law?.selectLocationRef==Default.DDLINLOCATION){
      law.selectLocationRef="1";}
      else{
        if(law?.selectLocationRef==Default.DDLOUTLOCATION){
        law.selectLocationRef="0";}
      }
     
  }
  if(law?.selectTypeRefQA==Default.DDLALL){
    law.selectTypeRefQA="";
  }
  else{
    if(law?.selectTypeRefQA==Default.DDLNRAKUV){
      law.selectTypeRefQA="1";}
      else{
        if(law?.selectTypeRefQA==Default.DDLRAKUV){
        law.selectTypeRefQA="0";}
      }
     
  }
  if(law?.selectTypeLaw==Default.DefaultValue){
    law.selectTypeLaw="";
  }
  if(law?.selectIDLaw==Default.DefaultValue){
    law.selectIDLaw="";
  }
  if(law?.selectTypeRefQA==Default.DefaultValue){
    law.selectTypeRefQA="";
  }
  if(law?.selectLocationRef==Default.DefaultValue){
    law.selectLocationRef="";
  }

}
funFilter(law:Law):Laws[]{
  debugger;
  this.checkReset(law);
  // var objAll = new Array<Laws>();
  // objAll= this.dataSearch
  
            if(!law.selectIDLaw && !law.selectIDParagraph ){ 
               this.arrLawFilter =  this.getDataByIDLawByIsRefQAByIsSameLawRef(
                law.selectLocationRef,law.selectTypeRefQA,"",law.selectTypeLaw,false,false,"")  
                }
                else{
                  if(law.selectIDParagraph && law.selectIDLaw){
                    this.arrLawFilter=this.getDataByIDLawByIsRefQAByIsSameLawRef(
                      law.selectLocationRef,law.selectTypeRefQA,law.selectIDLaw,law.selectTypeLaw,true,true,law.selectIDParagraph)
                    }else{
                      if(!law.selectIDParagraph){
                        this.arrLawFilter=this.getDataByIDLawByIsRefQAByIsSameLawRef(
                          law.selectLocationRef,law.selectTypeRefQA,law.selectIDLaw,law.selectTypeLaw,true,false,"")
                        }
                        else{
                          if(!law.selectIDLaw)  {
                            this.arrLawFilter=this.getDataByIDLawByIsRefQAByIsSameLawRef(
                              law.selectLocationRef,law.selectTypeRefQA,law.selectIDLaw,law.selectTypeLaw,false,true,law.selectIDParagraph)
                          }
                          else{
                          return this.dataSearch
                          // else{
                          //   this.arrLawFilter= this.getDataByIDLawByIsRefQAByIsSameLawRef(
                          //     law.selectLocationRef,law.selectTypeRefQA,law.selectIDLaw,law.selectTypeLaw,true,true,law.selectIDParagraph)
                          // }
                        }
                        }
                           
                    }
                 
                }
               
     return this.arrLawFilter;
}
  constructor(private observableDataLawsService:ObservableDataLawsService) { 
     const sub=  this.observableDataLawsService.getData$.subscribe((newdata:Laws[])=>{
      this.dataSearch=newdata;
     })
   this.subscription.add(sub)
  }
  ngOnInit(): void {
   
    // this.ObservableDataLawsService.

}
ngOnDestroy(){
  this.subscription.unsubscribe();
}

}
