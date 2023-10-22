import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataAccessVersionsModule } from '@nx-test/data-access-versions';

@NgModule({
  imports: [CommonModule, DataAccessVersionsModule],
})
export class VersionsListModule {}
