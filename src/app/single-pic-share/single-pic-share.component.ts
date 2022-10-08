import {Component, Input, OnInit} from '@angular/core';
import {PicShare} from "../models/pic-share.model";
import {PicShareService} from "../services/pic-share.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-single-pic-share',
  templateUrl: './single-pic-share.component.html',
  styleUrls: ['./single-pic-share.component.scss']
})
export class SinglePicShareComponent implements OnInit {

  picShare!: PicShare;

  buttonText!: string;

  constructor(private picShareService: PicShareService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.buttonText = 'Me Likey!';
    const picShareId = +this.route.snapshot.params['id'];
    this.picShare = this.picShareService.getPicShareById(picShareId);
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
