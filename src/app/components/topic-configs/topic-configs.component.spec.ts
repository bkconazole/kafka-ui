import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicConfigsComponent } from './topic-configs.component';

describe('TopicConfigsComponent', () => {
  let component: TopicConfigsComponent;
  let fixture: ComponentFixture<TopicConfigsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopicConfigsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicConfigsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
