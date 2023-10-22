import { ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';
import { VersionsListComponent } from './versions-list.component';
import { Observable, of } from 'rxjs';
import {
  AssetVersion,
  VersionsActions,
  VersionsSelectors,
} from '@nx-test/data-access-versions';
import { NgxsModule, Store } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { CommonModule } from '@angular/common';

@Injectable()
class MockStore {
  dispatch(_: any) {
    return;
  }
  select(selector: any): Observable<any> {
    if (selector === VersionsSelectors.slices.versions) {
      return of([
        { id: 1, name: 'Version 1' },
        { id: 2, name: 'Version 2' },
      ]);
    } else if (selector === VersionsSelectors.getVersionDetailId) {
      return of(1);
    } else {
      return of(null);
    }
  }
}

describe('VersionsListComponent', () => {
  let component: VersionsListComponent;
  let fixture: ComponentFixture<VersionsListComponent>;
  let mockStore: MockStore;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CommonModule, NgxsModule.forRoot([])],
      declarations: [VersionsListComponent],
      providers: [{ provide: Store, useClass: MockStore }],
    });

    fixture = TestBed.createComponent(VersionsListComponent);
    component = fixture.componentInstance;
    mockStore = TestBed.inject(Store);
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch LoadList action on initialization', () => {
    const loadListSpy = jest.spyOn(mockStore, 'dispatch');
    fixture.detectChanges(); // Trigger component initialization
    expect(loadListSpy).toHaveBeenCalledWith(new VersionsActions.LoadList());
  });

  it('should track items by id', () => {
    const version = { id: 1, name: 'Version 1' } as AssetVersion;
    expect(component.trackByFunc(0, version)).toEqual(1);
  });

  it('should dispatch GetDetail action on changeVersion', () => {
    const getDetailSpy = jest.spyOn(mockStore, 'dispatch');
    component.changeVersion(1);
    expect(getDetailSpy).toHaveBeenCalledWith(new VersionsActions.GetDetail(1));
  });

  it('should select versions and activeVersionId', async () => {
    fixture.detectChanges();

    const result = await component.versions$.toPromise();
    expect(result).toEqual([
      { id: 1, name: 'Version 1' },
      { id: 2, name: 'Version 2' },
    ]);
  });
});
