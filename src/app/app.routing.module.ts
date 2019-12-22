import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import {UiModule} from './ui.module';

import { TopBarComponent } from './top-bar/top-bar.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [{ path: "", component: HomeComponent }];

@NgModule({
  imports: [UiModule, RouterModule.forRoot(routes)],
  declarations: [TopBarComponent, HomeComponent],
  exports: [RouterModule, TopBarComponent]
})
export class AppRoutingModule {}
