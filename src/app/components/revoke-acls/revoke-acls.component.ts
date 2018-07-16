import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-revoke-acls',
  templateUrl: './revoke-acls.component.html',
  styleUrls: ['./revoke-acls.component.scss']
})
export class RevokeAclsComponent implements OnInit {
  private fileText;
  constructor( private dataService: DataService ) { }

  ngOnInit() {
  }

  revokeAcls() {
    console.log("create topic is called");
    this.dataService.revokeAcls(this.fileText).subscribe(
      res => {
        console.log("http response starts here...");
        console.log(res);
        console.log("http response ends here...");
      },
      ( err: HttpErrorResponse ) => {
        console.log("error message starts here....");
        console.log(err.error);
        console.log(err.name);
        console.log(err.message);
        console.log(err.status);
        console.log("error message ends here....");
      }
    );
  }

  fileUpload(event) {
    let reader = new FileReader();
    reader.readAsText(event.srcElement.files[0]);
    let me = this;
    reader.onload = function () {
      me.fileText = reader.result;
      console.log(me.fileText);
    }
  }


}
