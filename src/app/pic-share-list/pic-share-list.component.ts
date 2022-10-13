import { Component, OnInit } from '@angular/core';
import {PicShare} from "../models/pic-share.model";
import {PicShareService} from "../services/pic-share.service";
import {interval, take, tap} from "rxjs";

@Component({
  selector: 'app-pic-share-list',
  templateUrl: './pic-share-list.component.html',
  styleUrls: ['./pic-share-list.component.scss']
})
export class PicShareListComponent implements OnInit {

  picShares!: PicShare[];

  constructor(private picShareService: PicShareService) { }

  ngOnInit(): void {
    this.picShares = this.picShareService.getAllPicShares();

    interval(1000).pipe(
      take(1),
      tap(console.log)
    ).subscribe();
  }

}
