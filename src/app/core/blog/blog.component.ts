import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Observable, Subject } from 'rxjs';
import { Card } from '../chef/chef.component';
import {  Blog, DataService } from '../services/data.service';
import { of } from 'rxjs';
import { filter } from 'rxjs/operators';
import { get } from 'http';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  dataSource: MatTableDataSource<Card>;
  
  
  
  allBlogs: Observable<any>;
  // filterBlogs: Observable<any>;
  allBlogsArr;
  lifeFilter;
  newsFilter;


  constructor(public dialog: MatDialog, private dataService: DataService) { }

  ngOnInit(): void {
    this.allBlogs = this.dataService.getAllBlogs();
    
    this.allBlogs.subscribe(blog => {
      this.allBlogsArr = blog;

       this.lifeFilter = blog.filter(function (el){
        return el.blogType === "lifehacks";
      });
       this.newsFilter = blog.filter(function (el){
        return el.blogType === "news";
      });
        
      // getlifeHacks(): Observable<lifeFilter[]> {
      //   return Observable.of(this.listLifeFilter)
      // };
      
      
      
      console.log("sssssssssssssssssssssss",this.lifeFilter);
    
    });
    
    
  }
    // Observable.of(this.filter);
    // window.scroll(0, 0);


  
  
}


function convert() {
  throw new Error('Function not implemented.');
}

function lifeHacks() {
  throw new Error('Function not implemented.');
}

function getlifeHacks() {
  throw new Error('Function not implemented.');
}

