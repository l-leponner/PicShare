import {Injectable} from "@angular/core";
import {PicShare} from "../models/pic-share.model";
import {HttpClient} from "@angular/common/http";
import {map, Observable, switchMap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PicShareService{

  constructor(private http: HttpClient) {
  }


  getAllPicShares() : Observable<PicShare[]>{
    return this.http.get<PicShare[]>('http://localhost:3000/picshares');
  }

  getPicShareById(picShareId: number): Observable<PicShare>{
    return this.http.get<PicShare>(`http://localhost:3000/picshares/${picShareId}`)
  }

  likePicShareById(picShareId: number, likeType: 'like' | 'unlike'): Observable<PicShare>{
    return this.getPicShareById(picShareId).pipe(
      map(picShare => ({
        ...picShare,
        likes: picShare.likes + (likeType === 'like' ? 1 : -1)
        })),
      switchMap(updatedPicShare => this.http.put<PicShare>(
        `http://localhost:3000/picshares/${picShareId}`, updatedPicShare))
    );
  }

  addNewPicShare(picShareFormValues: { title: string, description: string, imageUrl: string, location?: string }): Observable<PicShare> {

    return this.getAllPicShares().pipe(
      map(picShares => [...picShares].sort((a,b) => a.id - b.id)),
      map(sortedPicShares => sortedPicShares[sortedPicShares.length -1]),
      map(previousPicShare => ({
        ...picShareFormValues,
        likes: 0,
        createdDate: new Date(),
        id: previousPicShare.id +1
      })),
      switchMap(newPicShare => this.http.post<PicShare>(
        'http://localhost:3000/picshares', newPicShare))
    );
  }
}
