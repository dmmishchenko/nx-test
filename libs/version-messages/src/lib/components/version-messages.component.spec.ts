import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VersionMessagesComponent } from './version-messages.component';

describe('VersionMessagesComponent', () => {
  let component: VersionMessagesComponent;
  let fixture: ComponentFixture<VersionMessagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VersionMessagesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(VersionMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
