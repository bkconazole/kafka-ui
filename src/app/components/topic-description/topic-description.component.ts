import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

declare var $: any;


@Component({
  selector: 'app-topic-description',
  templateUrl: './topic-description.component.html',
  styleUrls: ['./topic-description.component.scss']
})
export class TopicDescriptionComponent implements OnInit {
  description$: Object;
  
  constructor( private data : DataService, private route: ActivatedRoute) {
    this.route.params.subscribe( params => this.description$ = params.topic )
   }

  ngOnInit() {
    this.data.getDescription(this.description$).subscribe(
      data => this.description$ = data 
    );

    $('#myModal').modal('show');
  }

}
