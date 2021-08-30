import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Laws } from '../models/laws.model';

@Injectable({
  providedIn: 'root'
})
export class ObservableDataLawsService {
 //צינור מידע
   private dataSource= new BehaviorSubject<Laws[]>(new Array<Laws>());

    get getData$():Observable<Laws[]>{
      return this.dataSource.asObservable()
    }

     setData(arryLaws:Laws[]){
       this.dataSource.next(arryLaws)
      }
  
  constructor() { }
}
