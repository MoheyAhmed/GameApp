import { Component } from '@angular/core';
import { DataApis } from '../../Services/data-apis';

@Component({
  selector: 'app-permadeath',
  imports: [],
  templateUrl: './permadeath.html',
  styleUrl: './permadeath.css'
})
export class Permadeath {
    permadeathData : any = []
  
  
    constructor(private permadeathDataService : DataApis){}
  
  
    getSailingData(){
      this.permadeathDataService.getPermadeathData().subscribe({
        next : (res)=>{
            this.permadeathData = res
            console.log(this.permadeathData);
        },
      })
    }
  
  
    ngOnInit() : void {
      this.getSailingData()
    }
}
