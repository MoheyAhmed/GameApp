import { Component } from '@angular/core';
import { DataApis } from '../../Services/data-apis';

@Component({
  selector: 'app-superhero',
  imports: [],
  templateUrl: './superhero.html',
  styleUrl: './superhero.css'
})
export class Superhero {
   superheroData : any = []
    
    
      constructor(private superheroDataService : DataApis){}
    
    
      getSailingData(){
        this.superheroDataService.getSuperheroData().subscribe({
          next : (res)=>{
              this.superheroData = res
              console.log(this.superheroData);
          },
        })
      }
    
    
      ngOnInit() : void {
        this.getSailingData()
      }
}
