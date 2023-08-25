import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ValidateService } from '../validate.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-report',
  templateUrl: './log-report.component.html',
  styleUrls: ['./log-report.component.scss'],
})
export class LogReportComponent implements OnInit {
  title = 'LogCatcher';
  logData = [];
  type: string = 'info';
  searchData: string = '';
  appKey = 'XYZ-123';

  constructor(
    private http: HttpClient,
    private validateService: ValidateService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (this.validateService.validated.value?.isValid) {
      this.appKey = this.validateService.validated.value?.appKey;
      this.getData('info');
    }
    else{
      this.router.navigateByUrl('');
    }
  }

  getData(type: string) {
    this.type = type;
    let url = `${environment.url}/data?type=${type}&appKey=${this.appKey}`;
    if (this.searchData) {
      url = url + `&searchData=${this.searchData}`;
    }
    this.http.get<any>(url).subscribe((data) => {
      this.logData = data?.log;
    });
  }

  searchInput() {
    this.getData(this.type);
  }
}
