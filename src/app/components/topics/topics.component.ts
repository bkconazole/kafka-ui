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
  public hide: boolean = false;
  constructor( private data: DataService ) { }

  ngOnInit() {
    this.data.getTopics().subscribe(
      data => this.topics$ = data
    )
  }
  getHide() {
    console.log("get hide is called ... ");
    return this.hide;
  }

  toggleHide() {
    console.log("toggle hide is called");
    this.hide = !this.hide;
  }
}
