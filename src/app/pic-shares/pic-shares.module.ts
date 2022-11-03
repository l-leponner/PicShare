import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from "@angular/forms";
import {PicShareComponent} from "./components/pic-share/pic-share.component";
import {PicShareListComponent} from "./components/pic-share-list/pic-share-list.component";
import {SinglePicShareComponent} from "./components/single-pic-share/single-pic-share.component";
import {NewPicShareComponent} from "./components/new-pic-share/new-pic-share.component";
import {PicSharesRoutingModule} from "./pic-shares-routing.module";



@NgModule({
  declarations: [
    PicShareComponent,
    PicShareListComponent,
    SinglePicShareComponent,
    NewPicShareComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PicSharesRoutingModule,
  ],
  exports: [
    PicShareComponent,
    PicShareListComponent,
    SinglePicShareComponent,
    NewPicShareComponent
  ]
})
export class PicSharesModule { }
