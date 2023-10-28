import { Component, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Select, Store } from '@ngxs/store';
import {
  VersionMessage,
  VersionsActions,
  VersionsSelectors,
} from '@nx-test/data-access-versions';
import { Observable } from 'rxjs';

@Component({
  selector: 'nx-test-version-messages',
  templateUrl: './version-messages.component.html',
  styleUrls: ['./version-messages.component.scss'],
})
export class VersionMessagesComponent implements OnInit {
  @Select(VersionsSelectors.slices.versionMessages)
  public messages$!: Observable<VersionMessage[]>;

  private readonly versionId$ = this.store
    .select(VersionsSelectors.getVersionDetailId)
    .pipe(takeUntilDestroyed());

  constructor(private readonly store: Store) {}

  ngOnInit(): void {
    this.versionId$.subscribe((versionId) => {
      if (versionId) {
        this.store.dispatch(new VersionsActions.GetVersionMessages(versionId));
      }
    });
  }
}
