import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../validate.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements OnInit {
  appKey: any;
  isValidated = false;

  constructor(
    private http: HttpClient,
    private validateService: ValidateService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  vliadteAppKey() {
    this.http
      .post<any>(`${environment.url}/validate`, { appKey: this.appKey })
      .subscribe((data) => {
        if (data.isValidate) {
          this.isValidated = data.isValidate;
          this.validateService.validated.next({
            isValid: true,
            appKey: this.appKey,
          });
          this.router.navigateByUrl('/logs/' + this.appKey);
        } else {
          alert(`Invalid key:${this.appKey}`);
          this.validateService.validated.next({
            isValid: false,
            appKey: null,
          });
        }
      });
  }
}
