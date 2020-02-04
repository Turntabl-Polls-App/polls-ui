import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.scss']
})
export class ModelComponent implements OnInit {

  constructor(private router: Router,private meta: Meta,) { }

  ngOnInit() {
  }

  createPoll() {
    this.router.navigate(['/matpollform']);
  }

}
