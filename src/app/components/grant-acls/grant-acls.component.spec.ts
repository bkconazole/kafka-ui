import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrantAclsComponent } from './grant-acls.component';

describe('GrantAclsComponent', () => {
  let component: GrantAclsComponent;
  let fixture: ComponentFixture<GrantAclsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrantAclsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrantAclsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
