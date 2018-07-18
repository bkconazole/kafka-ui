import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { KeyValuesPipe } from '../../key-values.pipe';

declare var $: any;


@Component({
  selector: 'app-topic-description',
  templateUrl: './topic-description.component.html',
  styleUrls: ['./topic-description.component.scss']
})
export class TopicDescriptionComponent implements OnInit {
  topic$: Object;
  description$: Object;
 

  
  constructor( private data : DataService, private route: ActivatedRoute) {
    this.route.params.subscribe( params => this.topic$ = params.topic )
   }

  ngOnInit() {
    this.data. getParitionInfo(this.topic$).subscribe(
      data => this.description$ = data 
    );
  }
}
