import { Component } from '@angular/core';
import { Images } from 'src/app/shared/model/images.model';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.scss']
})
export class GaleriaComponent {
  imgList : Images[] = [
    {
      id: 1,
      url: 'assets/images/image1.jpg'
    },
    {
      id: 2,
      url: 'assets/images/image2.jpg'
    },
    {
      id: 3,
      url: 'assets/images/image3.jpg'
    },
    {
      id: 4,
      url: 'assets/images/image4.jpg'
    },
    {
      id: 5,
      url: 'assets/images/image5.jpg'
    },
    {
      id: 6,
      url: 'assets/images/image6.jpg'
    },
    {
      id: 7,
      url: 'assets/images/image2.jpg'
    },
    {
      id: 8,
      url: 'assets/images/image8.jpg'
    }
  ]
}
