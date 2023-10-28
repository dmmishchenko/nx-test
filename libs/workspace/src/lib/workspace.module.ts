import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkspaceComponent } from './components/workspace.component';
import { DataAccessVersionsModule } from '@nx-test/data-access-versions';

@NgModule({
  imports: [CommonModule, DataAccessVersionsModule],
  declarations: [WorkspaceComponent],
  exports: [WorkspaceComponent],
})
export class WorkspaceModule {}
