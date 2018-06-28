import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TopicsComponent } from './components/topics/topics.component';
import { TopicAclsComponent } from './components/topic-acls/topic-acls.component';
import { TopicConfigsComponent } from './components/topic-configs/topic-configs.component';
import { TopicDescriptionComponent } from './components/topic-description/topic-description.component';
import { CreateTopicComponent } from './components/create-topic/create-topic.component';
import { CreateTopicFormComponent } from './components/create-topic-form/create-topic-form.component';
const routes: Routes = [
  {
    path : 'topics',
    component : TopicsComponent
  },
  {
    path: 'create',
    component: CreateTopicComponent
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
  {
    path : 'forms',
    component: CreateTopicFormComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
