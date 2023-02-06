import { Component, OnInit,} from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Blog, DataService } from '../../services/data.service';


@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit {

  blogsData: Observable<any>;
  blogData;
  id;
  blogArray: Blog;
  
  pageSize: number;
  cardImage:string;
  blogType: string;
  dataScreen: string;
  

  constructor(private dataService: DataService, private route: ActivatedRoute, private router: Router) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => {
      return false;
    };
   }

  ngOnInit(): void {
    this.router.navigate(["ingredients"], { relativeTo: this.route });
    this.blogsData = this.dataService.getAllBlogs();
    window.scroll(0,0);
    this.route.params.subscribe((params: Params) => {
      this.id = +params.id;
      this.blogData = this.dataService.getSingleBlog(params.id);
    });
    this.blogData.subscribe(data => {
      this.blogArray = data;
    })
  }
  
  someFunction(){
    this.router.navigateByUrl('/route');
  }
}
