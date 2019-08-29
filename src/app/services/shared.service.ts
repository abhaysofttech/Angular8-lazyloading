import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
export class commonService {
    private data = new BehaviorSubject('');
    currentData = this.data.asObservable()

    constructor() { }

    updateMessage(item: any) {
        this.data.next(item);
    }

}