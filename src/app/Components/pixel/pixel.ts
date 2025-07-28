import { Component } from '@angular/core';
import { DataApis } from '../../Services/data-apis';

@Component({
  selector: 'app-pixel',
  imports: [],
  templateUrl: './pixel.html',
  styleUrl: './pixel.css'
})
export class Pixel {
  pixelData : any = []


  constructor(private pixelDataService : DataApis){}

  getPixelData(){
    this.pixelDataService.getPixelData().subscribe({
      next : (res) => {
        this.pixelData = res;
        console.log(this.pixelData);
      }
    })
  }

  ngOnInit(): void {
    this.getPixelData()
  }


}
