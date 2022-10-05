import {Component, OnInit} from '@angular/core';
import {PicShare} from "./models/pic-share.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  picShares!: PicShare[];


  ngOnInit() {
    this.picShares = [
      {
        title: 'Chat Pleine Lune',
        description: 'Un chat sur une branche devant une pleine Lune',
        createdDate: new Date(),
        imageUrl: 'https://cdn.pixabay.com/photo/2015/04/23/21/59/tree-736877_1280.jpg',
        likes: 5,
        location: 'dans mon jardin'
      },
      {
        title: 'Yeux Chat Bleu',
        description: 'Les beaux yeux bleus d\'un chat',
        createdDate: new Date(),
        imageUrl: 'https://cdn.pixabay.com/photo/2016/03/28/12/35/cat-1285634_1280.png',
        likes: 0,
        location: 'chez moi'
      },
      {
        title: 'Chaton Joue Fleur',
        description: 'Un chaton joue avec une fleur',
        createdDate: new Date(),
        imageUrl: 'https://cdn.pixabay.com/photo/2017/07/25/01/22/cat-2536662_1280.jpg',
        likes: 3
      }
    ];

  }
}
