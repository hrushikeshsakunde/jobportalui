import { Component, OnInit, Inject } from '@angular/core';
import { JobService } from '../shared/job.service';
import { NgForm } from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';


@Component({
  selector: 'app-job-edit',
  templateUrl: './job-edit.component.html',
  styleUrls: ['./job-edit.component.css']
})
export class JobEditComponent implements OnInit {

  job: any = {};
  isEdit: Boolean = false;
  todayDate: Date = new Date();
  constructor(private jobService: JobService,
              @Inject(MAT_DIALOG_DATA) public data: any,
              public dialogRef: MatDialogRef<JobEditComponent>) {}

  ngOnInit() {
      if (this.data.id) {
        this.jobService.get(this.data.id).subscribe((job: any) => {
          if (job) {
            this.job = job;
            this.job.beginning = new Date(job.beginning)
            this.isEdit = true;
          } else {
            console.log(`Job with id '${this.data.id}' not found, returning to list`);
          }
        });
      }
  }

  save(form: NgForm): void {
    console.log('click');
    this.jobService.save(form, this.data.id , this.isEdit).subscribe(result => {
      this.dialogRef.close();
    }, error => console.error(error));
  }

}
