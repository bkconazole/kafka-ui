import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TopicsComponent } from './components/topics/topics.component';
import { TopicAclsComponent } from './components/topic-acls/topic-acls.component';
import { TopicConfigsComponent } from './components/topic-configs/topic-configs.component';
import { TopicDescriptionComponent } from './components/topic-description/topic-description.component';

const routes: Routes = [
  {
    path : 'topics',
    component : TopicsComponent
  },
  {
    path : 'topics/description/:topic',
    component : TopicDescriptionComponent
  },
  {
    path : 'topics/configs/:topic',
    component : TopicConfigsComponent
  },
  {
    path : 'topics/acls/:topic',
    component : TopicAclsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
