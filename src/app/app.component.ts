import { Component, OnChanges, OnInit } from '@angular/core';
import { StorageService } from './core/services/storage.service';
import { User } from './shared/model/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  publicHeader = true;
  user? : User;
  constructor( private storageService : StorageService) {
  }

  ngOnInit(): void {
      this.getUser()
  }
  getUser () {
    this.user = this.storageService.get('user')
    if (this.user) {
      this.publicHeader = false;
    } else {
      this.publicHeader = true;

    }
  }
  
}
