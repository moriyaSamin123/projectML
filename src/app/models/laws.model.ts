export interface Laws{
techID: string;
ID?:string;
type:string;
name:string;
paragraph:string;
title:any;
ref:string;
isSameLawRef: string;
isRefQK?:string
IsTitleRelevant?:string;
isTitleRefRelevant?:string;
}

export class Law {
    selectTypeLaw!:string;
    selectIDLaw!: string;
    selectIDParagraph!:string;
    selectTypeRefQA!: string;
    selectLocationRef!: string;
    
} 
   
 export enum Default {
    DefaultValue ="נא לבחור" ,
    DDLRAKUV="רקובות",
    DDLNRAKUV="לא רקובות",
    DDLINLOCATION="פנימית",
    DDLOUTLOCATION ="חיצונית",
    DDLALL="הכל",
    DDLRASHI="ראשי",
    DDLMISHNI="משני"
  }
 export interface  Dropdown{
    name: string,
    code: string
}