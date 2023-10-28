import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { NgxsModule } from '@ngxs/store';
import { VersionsListModule } from '@nx-test/versions-list';
import { WorkspaceModule } from '@nx-test/workspace';
import { VersionMessagesModule } from '@nx-test/version-messages';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
    NgxsModule.forRoot([], {
      developmentMode: isDevMode(),
    }),
    VersionsListModule,
    WorkspaceModule,
    VersionMessagesModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
