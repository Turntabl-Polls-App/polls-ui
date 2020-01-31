import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { Poll } from '../model/poll'


@Component({
  selector: 'app-poll-management',
  templateUrl: './poll-management.component.html',
  styleUrls: ['./poll-management.component.scss']
})

export class PollManagementComponent implements OnInit {

  constructor( private route: ActivatedRoute,private router: Router,  private dialog: MatDialog,private snackBar: MatSnackBar,) { }

  ngOnInit() {
  }

  navigateToPoll(poll: Poll) {
    this.router.navigate([`/poll/${poll.poll_id}`]);
  }

}
