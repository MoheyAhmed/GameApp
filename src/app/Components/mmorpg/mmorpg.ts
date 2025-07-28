import { Component } from '@angular/core';
import { DataApis } from '../../Services/data-apis';

@Component({
  selector: 'app-mmorpg',
  imports: [],
  templateUrl: './mmorpg.html',
  styleUrl: './mmorpg.css'
})
export class Mmorpg {


  mmorpgData:any = []

  constructor(private mmorpgDataService : DataApis){}

  getMmorpgData(){
    this.mmorpgDataService.getMmorpgData().subscribe({
      next: (res)=>{
        this.mmorpgData = res
        console.log(this.mmorpgData);
      }
    })
  }



  ngOnInit() : void{
    this.getMmorpgData()
  }

}
