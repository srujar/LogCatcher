import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ValidateService {
  public validated: BehaviorSubject<{ isValid: boolean; appKey: any }> =
    new BehaviorSubject<{ isValid: boolean; appKey: any }>({
      isValid: false,
      appKey: null,
    });

  constructor() {}
}
