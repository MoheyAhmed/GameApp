import { Component } from '@angular/core';
import { DataApis } from '../../Services/data-apis';

@Component({
  selector: 'app-sailing',
  imports: [],
  templateUrl: './sailing.html',
  styleUrl: './sailing.css'
})
export class Sailing {


  sailingData : any = []


  constructor(private sailingDataService : DataApis){}


  getSailingData(){
    this.sailingDataService.getSailingData().subscribe({
      next : (res)=>{
          this.sailingData = res
          console.log(this.sailingData);
      },
    })
  }


  ngOnInit() : void {
    this.getSailingData()
  }
}
