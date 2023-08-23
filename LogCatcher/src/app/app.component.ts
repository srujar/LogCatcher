import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit {
  title = 'LogCatcher';
  logData = [];
  type:string = 'info';

  constructor(
    private http: HttpClient,
  ){}

  ngOnInit(): void {
    this.getData('info');
  }

  getData(type:string){
    this.type = type;
    this.http.get<any>(`http://localhost:4400/data?type=${type}`).subscribe(data=>{
      this.logData = data?.log;
    })
  }
}
