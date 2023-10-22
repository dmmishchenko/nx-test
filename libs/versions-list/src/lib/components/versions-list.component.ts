import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import {
  AssetVersion,
  VersionsActions,
  VersionsSelectors,
} from '@nx-test/data-access-versions';
import { Observable } from 'rxjs';

@Component({
  selector: 'nx-test-versions-list',
  templateUrl: './versions-list.component.html',
  styleUrls: ['./versions-list.component.scss'],
})
export class VersionsListComponent implements OnInit {
  @Select(VersionsSelectors.slices.versions) versions$!: Observable<
    AssetVersion[]
  >;

  @Select(VersionsSelectors.getVersionDetailId)
  activeVersionId$!: Observable<number>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(new VersionsActions.LoadList());
  }

  public trackByFunc(_: number, item: AssetVersion) {
    return item.id;
  }

  public changeVersion(id: number): void {
    this.store.dispatch(new VersionsActions.GetDetail(id));
  }
}
