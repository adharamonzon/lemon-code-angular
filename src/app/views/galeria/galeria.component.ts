import { Component, OnInit } from '@angular/core';
import { Images } from 'src/app/shared/model/images.model';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.scss']
})
export class GaleriaComponent  implements OnInit{
  imgList : Images[] = [
    {
      id: 1,
      url: 'assets/images/image1.jpg',
      title: 'Puerto nublado'
    },
    {
      id: 2,
      url: 'assets/images/image2.jpg',
      title: 'Montaña nevada'
    },
    {
      id: 3,
      url: 'assets/images/image3.jpg',
      title: 'Lago en el bosque'
    },
    {
      id: 4,
      url: 'assets/images/image4.jpg',
      title: 'Desierto'
    },
    {
      id: 5,
      url: 'assets/images/image5.jpg',
      title: 'Bosque mágico'
    },
    {
      id: 6,
      url: 'assets/images/image6.jpg',
      title: 'Embarcadero'
    },
    {
      id: 7,
      url: 'assets/images/image7.jpg',
      title: 'Nubes montañosas'
    },
    {
      id: 8,
      url: 'assets/images/image8.jpg',
      title: 'Carretera'
    }
  ]
  selectedImg! : Images;

  ngOnInit(): void {
    this.selectedImg = {
      id: 1,
      url: 'assets/images/image1.jpg',
      title: 'Puerto nublado',
    }
  }

  selectImage(img: Images) {
    this.selectedImg = img;
  }

  isSelected(img : Images) {
    return this.selectedImg.id === img.id ? 'isSelected' : ''; 
  }
  /* funciones del navegador de la galeria */
  previous() {
    this.selectedImg.id -1
  }
  action(action: string) {
    let newId: number;
    let newImg: Images | undefined;
    if(action === 'next') {
      newId = this.selectedImg.id +1;
      newImg = this.imgList.find((img) => img.id === newId);
    } else if (action === 'previous') {
      newId = this.selectedImg.id -1;
      newImg = this.imgList.find((img) => img.id === newId);
    }
    newImg ? this.selectedImg = newImg : this.selectedImg;
  }
}
