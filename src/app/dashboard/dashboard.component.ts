import { Component, OnInit } from '@angular/core';
import { JobService } from '../shared/job.service';
import { JobEditComponent } from '../job-edit/job-edit.component';
import { JobViewComponent } from '../job-view/job-view.component';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  jobs: Array<any>;

  constructor(private jobService: JobService,
              private dialog: MatDialog) { }

  ngOnInit() {
      this.jobService.getAll().subscribe(data => {
        this.jobs = data;
        console.log('here');
        });
  }
  remove(id) {
    this.jobService.remove(id).subscribe(result => {
      location.reload();
    }, error => console.error(error));
  }
  openEditDialog(id) {
    const dialogRef = this.dialog.open(JobEditComponent,
      {
        width: '50%',
        height: '90%',
       data: {id: id}
      }
      );
  }
  openViewDialog(id) {
    const dialogRef = this.dialog.open(JobViewComponent,
      {
        width: '50%',
        height: '90%',
        data: {id: id}
      }
    );
  }
}
