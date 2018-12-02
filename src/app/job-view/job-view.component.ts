import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import { JobService } from '../shared/job.service';

@Component({
  selector: 'app-job-view',
  templateUrl: './job-view.component.html',
  styleUrls: ['./job-view.component.css']
})
export class JobViewComponent implements OnInit {

  job: any = {};
  constructor(private jobService: JobService,
              @Inject(MAT_DIALOG_DATA) public data: any,
              public dialogRef: MatDialogRef<JobViewComponent>) { }

  ngOnInit() {
      if (this.data.id) {
        this.jobService.get(this.data.id).subscribe((job: any) => {
          if (job) {
            this.job = job;
            this.job.beginning = new Date(job.beginning);
          } else {
            console.log(`Job with id '${this.data.id}' not found, returning to list`);
          }
        });
      }
  }


}
