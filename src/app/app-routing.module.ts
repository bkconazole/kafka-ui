import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TopicsComponent } from './components/topics/topics.component';
import { TopicAclsComponent } from './components/topic-acls/topic-acls.component';
import { TopicConfigsComponent } from './components/topic-configs/topic-configs.component';
import { TopicDescriptionComponent } from './components/topic-description/topic-description.component';
import { CreateTopicComponent } from './components/create-topic/create-topic.component';
import { CreateTopicFormComponent } from './components/create-topic-form/create-topic-form.component';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { LoginComponent } from './components/login/login.component';
import { LandingComponent } from './components/landing/landing.component';
import { UpdateTopicComponent } from './components/update-topic/update-topic.component';
import { DeleteTopicComponent } from './components/delete-topic/delete-topic.component';
const routes: Routes = [
  {
    path :'',
    component: TopicsComponent
  },
  {
    path : 'topics',
    component : TopicsComponent
  },
  {
    path: 'topic/create',
    component: CreateTopicComponent
  },
  {
    path: 'file',
    component: FileUploadComponent
  },
  {
    path: 'topic/update',
    component: UpdateTopicComponent
  },
  {
    path: 'topic/delete',
    component: DeleteTopicComponent
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
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
