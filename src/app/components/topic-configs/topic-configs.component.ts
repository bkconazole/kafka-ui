import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-topic-configs',
  templateUrl: './topic-configs.component.html',
  styleUrls: ['./topic-configs.component.scss']
})
export class TopicConfigsComponent implements OnInit {

  configs$: Object;

  constructor( private data: DataService, private route: ActivatedRoute ) { 
    this.route.params.subscribe(
      params => this.configs$ = params.topic
    );
  }

  ngOnInit() {
    let self=this;
    this.data.getDescription(this.configs$).subscribe(
      data => this.configs$ = data
    );
  }

}
