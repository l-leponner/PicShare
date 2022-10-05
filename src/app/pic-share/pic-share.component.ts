import { Component, OnInit, Input } from '@angular/core';
import {PicShare} from "../models/pic-share.model";
import {PicShareService} from "../services/pic-share.service";

@Component({
  selector: 'app-pic-share',
  templateUrl: './pic-share.component.html',
  styleUrls: ['./pic-share.component.scss']
})
export class PicShareComponent implements OnInit{
  @Input() picShare!: PicShare;

  buttonText!: string;

  constructor(private picShareService: PicShareService) {
  }

  ngOnInit() {
    this.buttonText = 'Me Likey!';
  }

  onLike(){

    if (this.buttonText === 'Me Likey!'){
      this.picShareService.likePicShareById(this.picShare.id, 'like');
      this.buttonText = 'Oops! Unlike?'
    } else {
      this.picShareService.likePicShareById(this.picShare.id, 'unlike');
      this.buttonText = 'Me Likey!';
    }
  }
}
