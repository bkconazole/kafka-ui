import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-topic-acls',
  templateUrl: './topic-acls.component.html',
  styleUrls: ['./topic-acls.component.scss']
})
export class TopicAclsComponent implements OnInit {

  acls$ : Object;
  constructor( private data: DataService, private route: ActivatedRoute ) {
      this.route.params.subscribe(
        parmas => this.acls$ = parmas.topic
      )
    
   }

  ngOnInit() {
    this.data.getAcls(this.acls$).subscribe(
      data => this.acls$ = data
    )
    console.log(this.acls$);
  }

}
