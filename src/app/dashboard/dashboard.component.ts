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
  searchKey = '';
  constructor(private jobService: JobService,
              private dialog: MatDialog) { }

  ngOnInit() {
    this.fetchData();
  }
  remove(id) {
    this.jobService.remove(id).subscribe(result => {
      this.fetchData();
    }, error => console.error(error));
  }
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
  fetchData() {
    this.jobService.getAll().subscribe(data => {
      this.jobs = data;
    });
  }
  searchJob() {
    if (this.searchKey !== '') {
      this.jobService.search(this.searchKey).subscribe(data => {
        this.jobs = data;
      });
    } else {
      this.fetchData();
    }
  }
  imagePath(id) {
    return this.jobService.getImage(id);
  }
}
