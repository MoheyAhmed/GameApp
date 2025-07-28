import { Component } from '@angular/core';
import { DataApis } from '../../Services/data-apis';

@Component({
  selector: 'app-shooter',
  imports: [],
  templateUrl: './shooter.html',
  styleUrl: './shooter.css'
})
export class Shooter {

  shooterData:any = []


  constructor(private shooterDataService : DataApis){}


  getShooterData(){
    this.shooterDataService.getShooterData().subscribe({
      next: (res)=>{
        this.shooterData= res
        console.log(this.shooterData);
        
      }
    })
  }


  ngOnInit():void{
    this.getShooterData()
  }
}
