import { CommonModule } from '@angular/common';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { throwIfAlreadyLoaded } from './module-import-check';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule // because we use <router-outlet> and routerLink
  ],
  declarations: [],
  exports: [],
  entryComponents: []
})
export class CoreModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: CoreModule
  ) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
