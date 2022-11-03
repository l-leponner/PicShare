import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {SinglePicShareComponent} from "./components/single-pic-share/single-pic-share.component";
import {PicShareListComponent} from "./components/pic-share-list/pic-share-list.component";
import {NewPicShareComponent} from "./components/new-pic-share/new-pic-share.component";
import {AuthGuard} from "../core/guards/auth.guard";

const routes: Routes = [
  { path: 'create', component: NewPicShareComponent, canActivate: [AuthGuard]},
  { path: ':id', component: SinglePicShareComponent, canActivate: [AuthGuard]},
  { path: '', component: PicShareListComponent, canActivate: [AuthGuard]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PicSharesRoutingModule {}
