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
import { GrantAclsComponent } from './components/grant-acls/grant-acls.component';
import { RevokeAclsComponent } from './components/revoke-acls/revoke-acls.component';
import { DeleteTopicNoFileComponent } from './components/delete-topic-no-file/delete-topic-no-file.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: LandingComponent,
    children: [ 
      { path: '', component: TopicsComponent },
      { path: 'topic/create', component: CreateTopicComponent },
      { path: 'file', component: FileUploadComponent },
      { path: 'topic/update', component: UpdateTopicComponent },
      { path: 'topic/delete', component: DeleteTopicComponent },
      { path: 'topics/description/:topic', component: TopicDescriptionComponent },
      { path: 'topics/configs/:topic', component: TopicConfigsComponent },
      { path: 'topics/acls/:topic', component: TopicAclsComponent },
      { path: 'topics/delete/:topic', component: DeleteTopicNoFileComponent },
      { path: 'forms', component: CreateTopicFormComponent },
      { path: 'login', component: LoginComponent },
      { path: 'acls/grant', component: GrantAclsComponent },
      { path: 'acls/revoke', component: RevokeAclsComponent }
      
    ]
  },
  //{ path: 'topics', component: TopicsComponent },
  //{ path: 'topic/create', component: CreateTopicComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
