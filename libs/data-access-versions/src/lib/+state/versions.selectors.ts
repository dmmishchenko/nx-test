import { Selector, createPropertySelectors } from '@ngxs/store';
import { VersionsStateModel } from './versions.models';
import { VersionsState } from './versions.state';

export class VersionsSelectors {
  static slices = createPropertySelectors<VersionsStateModel>(VersionsState);

  @Selector([VersionsSelectors.slices.versions])
  static getVersions(state: VersionsStateModel) {
    return state.versions;
  }

  @Selector([VersionsSelectors.slices.versionDetail])
  static getVersionDetail(state: VersionsStateModel) {
    return state.versionDetail;
  }

  @Selector([VersionsSelectors.slices.versionMessages])
  static getVersionMessages(state: VersionsStateModel) {
    return state.versionMessages;
  }
}
