import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicAclsComponent } from './topic-acls.component';

describe('TopicAclsComponent', () => {
  let component: TopicAclsComponent;
  let fixture: ComponentFixture<TopicAclsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopicAclsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicAclsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
