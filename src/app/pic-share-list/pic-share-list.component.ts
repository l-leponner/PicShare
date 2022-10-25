import {Component, OnDestroy, OnInit} from '@angular/core';
import {PicShare} from "../models/pic-share.model";
import {PicShareService} from "../services/pic-share.service";
import {interval, Observable, Subject, takeUntil, tap} from "rxjs";

@Component({
  selector: 'app-pic-share-list',
  templateUrl: './pic-share-list.component.html',
  styleUrls: ['./pic-share-list.component.scss']
})
export class PicShareListComponent implements OnInit, OnDestroy {

  picShares!: PicShare[];
  picShares$!: Observable<PicShare[]>;
  private destroy$!: Subject<boolean>;

  constructor(private picShareService: PicShareService) { }

  ngOnInit(): void {
    // this.picShares = this.picShareService.getAllPicShares();
    this.destroy$ = new Subject<boolean>();

    this.picShares$ = this.picShareService.getAllPicShares();

    // interval(1000).pipe(
    //   takeUntil(this.destroy$),
    //   tap(console.log)
    // ).subscribe();
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
  }

}
