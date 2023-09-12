import { animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { timeout } from 'rxjs';
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
      url: 'assets/images/image1.jpeg',
      title: 'Puerto nublado',
      size: 500
    },
    {
      id: 2,
      url: 'assets/images/image2.jpeg',
      title: 'Montaña gran angular',
      size: 1
    },
    {
      id: 3,
      url: 'assets/images/image3.jpeg',
      title: 'Amanecer',
      size: 500
    },
    {
      id: 4,
      url: 'assets/images/image4.jpeg',
      title: 'Atardecer en el lago',
      size: 500
    },
    {
      id: 5,
      url: 'assets/images/image5.jpeg',
      title: 'Lago en otoño',
      size: 500
    },
    {
      id: 6,
      url: 'assets/images/image6.jpeg',
      title: 'Cabaña en los alpes',
      size: 500
    },
    {
      id: 7,
      url: 'assets/images/image7.jpeg',
      title: 'Playa',
      size: 500
    },
    {
      id: 8,
      url: 'assets/images/image8.jpeg',
      title: 'Monta;as',
      size: 500
    }
  ]
  selectedImg! : Images;
  interval: any;
  running =  false;

  ngOnInit(): void {
    this.selectedImg = {
      id: 1,
      url: 'assets/images/image1.jpeg',
      title: 'Puerto nublado',
      size: 500
    }
  }

  selectImage(img: Images) {
    this.selectedImg = img;
  }

  isSelected(img : Images) {
    return this.selectedImg.id === img.id ? 'isSelected' : ''; 
  }
  /* funciones del navegador de la galeria */
  action(action: string) {
    let newId: number;
    let newImg: Images | undefined;
    if(action === 'next') {
      newId = this.selectedImg.id +1;
      newImg = this.imgList.find((img) => img.id === newId);
    } else if (action === 'previous') {
      newId = this.selectedImg.id -1;
      newImg = this.imgList.find((img) => img.id === newId);
    } else if (action === 'grow') {
      this.selectedImg.size = this.selectedImg.size + 20;
      const growSize = this.selectedImg.size.toString();
      document.getElementById('image')!.style.width = `${growSize}px`;
      document.getElementById('selectedImgSection')!.style.height = `${growSize}px`
    } else if (action === 'shrink') {
      this.selectedImg.size = this.selectedImg.size - 20;
      const growSize = this.selectedImg.size.toString();
      document.getElementById('image')!.style.width = `${growSize}px`;
      document.getElementById('selectedImgSection')!.style.height = `${growSize}px`
    } else if (action === 'play' || action === 'stop') {
      if (action === 'play') {
        this.interval = setInterval(() => {
          this.running = true;
          newId = this.selectedImg.id +1;
          if (newId <= 8) {
            newImg = this.imgList.find((img) => img.id === newId);
            newImg ? this.selectedImg = newImg : this.selectedImg;
          } else if (newId >= 9) {
            this.selectedImg = {
              id: 1,
              url: 'assets/images/image1.jpg',
              title: 'Puerto nublado',
              size: 500
            }
          }
        }, 3000)
      } else {
        this.running = false;
        clearInterval(this.interval);
      }
    }
    newImg ? this.selectedImg = newImg : this.selectedImg;
  }
}
