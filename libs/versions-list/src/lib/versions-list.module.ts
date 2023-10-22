import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataAccessVersionsModule } from '@nx-test/data-access-versions';
import { VersionsListComponent } from './components/versions-list.component';

@NgModule({
  imports: [CommonModule, DataAccessVersionsModule],
  declarations: [VersionsListComponent],
  exports: [VersionsListComponent],
})
export class VersionsListModule {}
