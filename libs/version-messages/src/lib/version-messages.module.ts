import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VersionMessagesComponent } from './components/version-messages.component';
import { DataAccessVersionsModule } from '@nx-test/data-access-versions';

@NgModule({
  imports: [CommonModule, DataAccessVersionsModule],
  declarations: [VersionMessagesComponent],
  exports: [VersionMessagesComponent],
})
export class VersionMessagesModule {}
