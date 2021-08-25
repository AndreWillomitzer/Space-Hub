import { Component, OnInit } from '@angular/core';
import { ImageDataService } from '../image-data.service';
@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.css']
})
export class ImageGalleryComponent implements OnInit {
  imagesArray : any;
  constructor(private ImgDataService:ImageDataService) { }

  ngOnInit(): void {
    this.ImgDataService.getImages().subscribe(images=>{
      this.imagesArray = images;
      console.log(this.imagesArray);
    })
  }

}
