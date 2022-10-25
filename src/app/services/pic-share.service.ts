import {Injectable} from "@angular/core";
import {PicShare} from "../models/pic-share.model";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PicShareService{

  constructor(private http: HttpClient) {
  }
  picShares: PicShare[] = [
    // {
    //   id: 1,
    //   title: 'Chat Pleine Lune',
    //   description: 'Un chat sur une branche devant une pleine Lune',
    //   createdDate: new Date(),
    //   imageUrl: 'https://cdn.pixabay.com/photo/2015/04/23/21/59/tree-736877_1280.jpg',
    //   likes: 5,
    //   location: 'dans mon jardin'
    // },
    // {
    //   id: 2,
    //   title: 'Yeux Chat Bleu',
    //   description: 'Les beaux yeux bleus d\'un chat',
    //   createdDate: new Date(),
    //   imageUrl: 'https://cdn.pixabay.com/photo/2016/03/28/12/35/cat-1285634_1280.png',
    //   likes: 0,
    //   location: 'chez moi'
    // },
    // {
    //   id: 3,
    //   title: 'Chaton Joue Fleur',
    //   description: 'Un chaton joue avec une fleur',
    //   createdDate: new Date(),
    //   imageUrl: 'https://cdn.pixabay.com/photo/2017/07/25/01/22/cat-2536662_1280.jpg',
    //   likes: 3
    // }
  ];

  getAllPicShares() : Observable<PicShare[]>{
    return this.http.get<PicShare[]>('http://localhost:3000/picshares');
  }

  getPicShareById(picShareId: number): Observable<PicShare>{
    // const picShare = this.picShares.find(picShare => picShare.id === picShareId);
    // if (!picShare){
    //   throw new Error('PicShare not found!');
    // } else {
    //   return picShare;
    // }
    return this.http.get<PicShare>(`http://localhost:3000/picshares/${picShareId}`)
  }

  likePicShareById(picShareid: number, likeType: 'like' | 'unlike'): void{
    // const picShare = this.getPicShareById(picShareid);
    // likeType === 'like' ? picShare.likes++ : picShare.likes--;
  }

  addNewPicShare(picShareFormValues: { title: string, description: string, imageUrl: string, location?: string }): void {
    const picShare: PicShare = {
      ...picShareFormValues,
      createdDate: new Date(),
      likes: 0,
      id: this.picShares[this.picShares.length-1].id +1
    };
    this.picShares.push(picShare);
  }
}
