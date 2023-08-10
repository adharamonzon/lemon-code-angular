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
      url: 'assets/images/image1.jpg',
      title: 'Puerto nublado',
      size: 500
    },
    {
      id: 2,
      url: 'assets/images/image2.jpg',
      title: 'Montaña nevada',
      size: 1
    },
    {
      id: 3,
      url: 'assets/images/image3.jpg',
      title: 'Lago en el bosque',
      size: 500
    },
    {
      id: 4,
      url: 'assets/images/image4.jpg',
      title: 'Desierto',
      size: 500
    },
    {
      id: 5,
      url: 'assets/images/image5.jpg',
      title: 'Bosque mágico',
      size: 500
    },
    {
      id: 6,
      url: 'assets/images/image6.jpg',
      title: 'Embarcadero',
      size: 500
    },
    {
      id: 7,
      url: 'assets/images/image7.jpg',
      title: 'Nubes montañosas',
      size: 500
    },
    {
      id: 8,
      url: 'assets/images/image8.jpg',
      title: 'Carretera',
      size: 500
    }
  ]
  selectedImg! : Images;
  interval: any;
  running =  false;

  ngOnInit(): void {
    this.selectedImg = {
      id: 1,
      url: 'assets/images/image1.jpg',
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
      const stopAction = action === 'stop' ? true : false;
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
        if (stopAction) {
          console.log('hay click seores')
          clearInterval(this.interval);

        }
      }, 3000)
    } else {
      clearInterval(this.interval)
    }
    newImg ? this.selectedImg = newImg : this.selectedImg;
  }
}
