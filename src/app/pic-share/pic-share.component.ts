import { Component, OnInit, Input } from '@angular/core';
import {PicShare} from "../models/pic-share.model";

@Component({
  selector: 'app-pic-share',
  templateUrl: './pic-share.component.html',
  styleUrls: ['./pic-share.component.scss']
})
export class PicShareComponent implements OnInit{
  @Input() picShare!: PicShare;

  buttonText!: string;

  ngOnInit() {
    this.buttonText = 'Me Likey!';
  }

  onLike(){

    if (this.buttonText === 'Me Likey!'){
      this.picShare.likes++;
      this.buttonText = 'Oops! Unlike?'
    } else {
      this.picShare.likes--;
      this.buttonText = 'Me Likey!';
    }
  }
}
