import { Component, OnInit } from '@angular/core';
import { JobService } from '../shared/job.service';
import { JobEditComponent } from '../job-edit/job-edit.component';
import { JobViewComponent } from '../job-view/job-view.component';
import {MatDialog} from '@angular/material';

/* This is landing page for website showing jobs */
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  jobs: Array<any>;
  searchKey = '';
  constructor(private jobService: JobService,
              private dialog: MatDialog) { }

  ngOnInit() {
    this.fetchData();
  }
  /*Delete job from jobs  */
  remove(id) {
    this.jobService.remove(id).subscribe(result => {
      this.fetchData();
    }, error => console.error(error));
  }

  /*Open popup for editing current job */
  openEditDialog(id) {
    const editDialogRef = this.dialog.open(JobEditComponent,
      {
        width: '50%',
        height: '90%',
       data: {id: id}
      }
      );
    editDialogRef.afterClosed().subscribe(result => {
      this.fetchData();
    });
  }
  /*Open popup show job in details  */
  openViewDialog(id) {
    const viewDialogRef = this.dialog.open(JobViewComponent,
      {
        width: '50%',
        height: '90%',
        data: {id: id}
      }
    );
    viewDialogRef.afterClosed().subscribe(result => {
      this.fetchData();
    });
  }
  /* Get all job from backend  */
  fetchData() {
    this.jobService.getAll().subscribe(data => {
      this.jobs = data;
    });
  }

  /* Search job and update job list  */
  searchJob() {
    if (this.searchKey !== '') {
      this.jobService.search(this.searchKey).subscribe(data => {
        this.jobs = data;
      });
    } else {
      this.fetchData();
    }
  }
  /* Get company logo  */
  imagePath(id) {
    return this.jobService.getImage(id);
  }
}
