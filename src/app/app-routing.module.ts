import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {PicShareListComponent} from "./pic-share-list/pic-share-list.component";

const routes: Routes = [
  { path: 'picshares', component: PicShareListComponent}
];

@NgModule(
  {
    imports: [
      RouterModule.forRoot(routes)
    ],
    exports: [
      RouterModule
    ]
  }
)
export class AppRoutingModule{}
