import { Component } from '@angular/core';
import { Select } from '@ngxs/store';
import {
  ASSET_VERSION_TYPE,
  AssetVersion,
  VersionsSelectors,
} from '@nx-test/data-access-versions';
import { Observable } from 'rxjs';

@Component({
  selector: 'nx-test-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.scss'],
})
export class WorkspaceComponent {
  public readonly versionTypes = ASSET_VERSION_TYPE;

  @Select(VersionsSelectors.slices.versionDetail)
  public version$!: Observable<AssetVersion>;
}
