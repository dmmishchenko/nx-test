import { Selector, createPropertySelectors, createSelector } from '@ngxs/store';
import { VersionsStateModel } from './versions.models';
import { VersionsState } from './versions.state';

export class VersionsSelectors {
  static slices = createPropertySelectors<VersionsStateModel>(VersionsState);

  static getVersionDetailId = createSelector(
    [VersionsState],
    (state: VersionsStateModel) => state.versionDetail?.id
  );

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
