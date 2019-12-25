import { NgModule } from '@angular/core';

import { DefaultDataServiceConfig, NgrxDataModule } from 'ngrx-data';

import { entityConfig } from './entity.metadata';

const defaultDataServiceConfig: DefaultDataServiceConfig = {
  root: 'api',
  timeout: 3000,

  getDelay: 500,
  saveDelay: 800
};

@NgModule({
  imports: [
    NgrxDataModule.forRoot({
      entityMetadata: entityConfig.entityMetadata,
      pluralNames: entityConfig.pluralNames
    })
  ],
  providers: [
    {
      provide: DefaultDataServiceConfig,
      useValue: defaultDataServiceConfig
    }
  ]
})
export class EntityStoreModule {}
