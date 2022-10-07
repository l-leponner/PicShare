import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {PicShareListComponent} from "./pic-share-list/pic-share-list.component";
import {LandingPageComponent} from "./landing-page/landing-page.component";

const routes: Routes = [
  { path: 'picshares', component: PicShareListComponent},
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
