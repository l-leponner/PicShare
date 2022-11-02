import {Component, Input, OnInit} from '@angular/core';
import {PicShare} from "../../../core/models/pic-share.model";
import {PicShareService} from "../../../core/services/pic-share.service";
import {ActivatedRoute} from "@angular/router";
import {Observable, tap} from "rxjs";

@Component({
  selector: 'app-single-pic-share',
  templateUrl: './single-pic-share.component.html',
  styleUrls: ['./single-pic-share.component.scss']
})
export class SinglePicShareComponent implements OnInit {

  picShare!: PicShare;
  picShare$!: Observable<PicShare>;

  buttonText!: string;

  constructor(private picShareService: PicShareService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.buttonText = 'Me Likey!';
    const picShareId = +this.route.snapshot.params['id'];
    // this.picShare = this.picShareService.getPicShareById(picShareId);
    this.picShare$ = this.picShareService.getPicShareById(picShareId);
  }

  onLike(picShareId: number){
    if (this.buttonText === 'Me Likey!'){
      this.picShare$ = this.picShareService.likePicShareById(picShareId, 'like').pipe(
        tap(() => this.buttonText = 'Oops! Unlike?')
      );
    } else {
      this.picShare$ = this.picShareService.likePicShareById(picShareId, 'unlike').pipe(
        tap(() => this.buttonText = 'Me Likey!')
      );
    }
  }

}
