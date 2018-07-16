import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TopicsComponent } from './components/topics/topics.component';
import { TopicDescriptionComponent } from './components/topic-description/topic-description.component';
import { TopicConfigsComponent } from './components/topic-configs/topic-configs.component';
import { TopicAclsComponent } from './components/topic-acls/topic-acls.component';
import { CreateTopicComponent } from './components/create-topic/create-topic.component';
import { ReactiveFormsModule, FormGroup, FormBuilder, FormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CreateTopicFormComponent } from './components/create-topic-form/create-topic-form.component';
import { FileSelectDirective, FileDropDirective } from 'ng2-file-upload';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { LoginComponent } from './components/login/login.component';
import { LandingComponent } from './components/landing/landing.component';
import { FilterPipe } from './filter.pipe';
import { UpdateTopicComponent } from './components/update-topic/update-topic.component';
import { DeleteTopicComponent } from './components/delete-topic/delete-topic.component';
import { GrantAclsComponent } from './components/grant-acls/grant-acls.component';
import { RevokeAclsComponent } from './components/revoke-acls/revoke-acls.component';
import { KeyValuesPipe } from './key-values.pipe';



@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    TopicsComponent,
    TopicDescriptionComponent,
    TopicConfigsComponent,
    TopicAclsComponent,
    CreateTopicComponent,
    CreateTopicFormComponent,
    FileSelectDirective,
    FileUploadComponent,
    LoginComponent,
    LandingComponent,
    FilterPipe,
    UpdateTopicComponent,
    DeleteTopicComponent,
    GrantAclsComponent,
    RevokeAclsComponent,
    KeyValuesPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
