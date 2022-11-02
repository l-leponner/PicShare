import { Component, OnInit, Input } from '@angular/core';
import {PicShare} from "../../../core/models/pic-share.model";
import {PicShareService} from "../../../core/services/pic-share.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-pic-share',
  templateUrl: './pic-share.component.html',
  styleUrls: ['./pic-share.component.scss']
})
export class PicShareComponent implements OnInit{
  @Input() picShare!: PicShare;

  buttonText!: string;

  constructor(private picShareService: PicShareService,
              private router: Router) {
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

  onViewPicShare() {
    this.router.navigateByUrl(`picshares/${this.picShare.id}`)
  }
}
