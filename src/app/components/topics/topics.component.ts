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
  public hide: boolean;
  constructor( private data: DataService ) { }

  ngOnInit() {
    this.data.getTopics().subscribe(
      data => this.topics$ = data
    )
  }
  getHide() {
    console.log("get hide is called ... ")
    //this.hide = true;
    return this.hide = false;
  }
}
