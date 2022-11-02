import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {PicShareListComponent} from "./pic-shares/components/pic-share-list/pic-share-list.component";
import {LandingPageComponent} from "./landing-page/components/landing-page/landing-page.component";
import {SinglePicShareComponent} from "./pic-shares/components/single-pic-share/single-pic-share.component";
import {NewPicShareComponent} from "./pic-shares/components/new-pic-share/new-pic-share.component";

const routes: Routes = [
  { path: 'picshares/:id', component: SinglePicShareComponent},
  { path: 'picshares', component: PicShareListComponent},
  { path: 'create', component: NewPicShareComponent},
  { path: '', component: LandingPageComponent}
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
