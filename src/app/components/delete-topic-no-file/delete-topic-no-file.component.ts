import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-delete-topic-no-file',
  templateUrl: './delete-topic-no-file.component.html',
  styleUrls: ['./delete-topic-no-file.component.scss']
})
export class DeleteTopicNoFileComponent implements OnInit {
  topic$: Object;
  constructor( private dataService: DataService, private route: ActivatedRoute ) {
    this.route.params.subscribe(
      params => this.topic$ = params.topic
    )
  }

  ngOnInit() {
    this.dataService.delete(this.topic$).subscribe(
      
    )
  }

}
