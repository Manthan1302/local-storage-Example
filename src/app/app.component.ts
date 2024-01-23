import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'localStorageExample';
  company:{name:string,gst:string}[]=[]
  details:{name:string,gst:string}[]=[];
  saveData(name:string,gst:string){
    this.company.push({name:name,gst:gst})
    localStorage.setItem('data',JSON.stringify(this.company))
  }

  loadData(){
    let data:any = localStorage.getItem('data')
    console.log(data);
    this.details=JSON.parse(data)
  }
}
