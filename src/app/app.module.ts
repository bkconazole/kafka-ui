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


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    TopicsComponent,
    TopicDescriptionComponent,
    TopicConfigsComponent,
    TopicAclsComponent,
    CreateTopicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
