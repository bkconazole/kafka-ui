import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RevokeAclsComponent } from './revoke-acls.component';

describe('RevokeAclsComponent', () => {
  let component: RevokeAclsComponent;
  let fixture: ComponentFixture<RevokeAclsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RevokeAclsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RevokeAclsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
