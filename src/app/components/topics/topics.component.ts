import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.scss']
})
export class TopicsComponent implements OnInit {

  topics$: Object;
  constructor( private data: DataService ) { }

  ngOnInit() {
    this.data.getTopics().subscribe(
      data => this.topics$ = data
    )
  }

}
