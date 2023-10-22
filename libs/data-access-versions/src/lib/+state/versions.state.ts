import { Inject, Injectable } from '@angular/core';
import { Action, State, StateContext, StateToken } from '@ngxs/store';
import { VersionsStateModel } from './versions.models';
import { VersionsActions } from './versions.actions';
import {
  VERSION_REPOSITORY_TOKEN,
  VersionsRepository,
} from '../versions.repository';
import { patch } from '@ngxs/store/operators';
import { tap } from 'rxjs';

const VERSIONS_STATE_TOKEN = new StateToken<VersionsStateModel>('zoo');

@State<VersionsStateModel>({
  name: VERSIONS_STATE_TOKEN,
  defaults: {
    versions: [],
    versionDetail: null,
    versionMessages: [],
  },
})
@Injectable()
export class VersionsState {
  constructor(
    @Inject(VERSION_REPOSITORY_TOKEN)
    private readonly versionsRepositoryToken: VersionsRepository
  ) {}

  @Action(VersionsActions.LoadList)
  loadList(ctx: StateContext<VersionsStateModel>) {
    return this.versionsRepositoryToken
      .getVersionsList()
      .pipe(tap((response) => ctx.setState(patch({ versions: response }))));
  }

  @Action(VersionsActions.GetDetail)
  getDetail(
    ctx: StateContext<VersionsStateModel>,
    { versionId }: VersionsActions.GetDetail
  ) {
    return this.versionsRepositoryToken.getVersionDetail(versionId).pipe(
      tap((response) => ctx.setState(patch({ versionDetail: response })))
    );
  }

  @Action(VersionsActions.GetVersionMessages)
  getVersionMessages(
    ctx: StateContext<VersionsStateModel>,
    { versionId }: VersionsActions.GetVersionMessages
  ) {
    return this.versionsRepositoryToken
      .getVersionMessages(versionId)
      .pipe(
        tap((response) => ctx.setState(patch({ versionMessages: response })))
      );
  }
}
