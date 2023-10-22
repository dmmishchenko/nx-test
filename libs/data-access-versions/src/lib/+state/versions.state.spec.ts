import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { NgxsModule, Store } from '@ngxs/store';
import { of } from 'rxjs';
import { VERSION_REPOSITORY_TOKEN } from '../versions.repository';
import { VersionsActions } from './versions.actions';
import { VersionsSelectors } from './versions.selectors';
import { VERSIONS_STATE_TOKEN, VersionsState } from './versions.state';

// Mock VersionsRepository for testing
class MockVersionsRepository {
  getVersionsList() {
    return of([
      { id: 1, name: 'Version 1' },
      { id: 2, name: 'Version 2' },
    ]);
  }

  getVersionDetail(versionId: number) {
    return of({ id: versionId, name: `Version ${versionId}` });
  }

  getVersionMessages(versionId: number) {
    return of([
      { id: 1, message: 'Message 1' },
      { id: 2, message: 'Message 2' },
    ]);
  }
}

describe('VersionsState', () => {
  let store: Store;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NgxsModule.forRoot([VersionsState])],
      providers: [
        { provide: VERSION_REPOSITORY_TOKEN, useClass: MockVersionsRepository },
      ],
    });

    store = TestBed.inject(Store);
  });

  it('should load versions list', () => {
    store.dispatch(new VersionsActions.LoadList());

    const versions = store.selectSnapshot(VersionsSelectors.slices.versions)
    expect(versions).toEqual([
      { id: 1, name: 'Version 1' },
      { id: 2, name: 'Version 2' },
    ]);
  });

  it('should get version detail', () => {
    store.dispatch(new VersionsActions.GetDetail(1));

    const versionDetail = store.selectSnapshot(
      VersionsSelectors.slices.versionDetail
    );
    expect(versionDetail).toEqual({ id: 1, name: 'Version 1' });
  });

  it('should get version messages', () => {
    store.dispatch(new VersionsActions.GetVersionMessages(1));

    const versionMessages = store.selectSnapshot(
      VersionsSelectors.slices.versionMessages
    );
    expect(versionMessages).toEqual([
      { id: 1, message: 'Message 1' },
      { id: 2, message: 'Message 2' },
    ]);
  });
});
