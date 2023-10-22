import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VERSION_REPOSITORY_TOKEN } from './versions.repository';
import { VersionsMockRepository } from './versions-mock.repository';
import { VersionsState } from './+state/versions.state';
import { NgxsModule } from '@ngxs/store';

@NgModule({
  imports: [CommonModule, NgxsModule.forFeature([VersionsState])],
  providers: [
    { provide: VERSION_REPOSITORY_TOKEN, useClass: VersionsMockRepository },
  ],
})
export class DataAccessVersionsModule {}
