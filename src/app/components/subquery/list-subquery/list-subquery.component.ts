
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { SubqueryModel } from 'src/app/service/subquery-model';
import { SubqueryService } from 'src/app/service/subquery.service';

@Component({
  selector: 'app-list-subquery',
  templateUrl: './list-subquery.component.html',
  styleUrls: ['./list-subquery.component.scss']
})
export class ListSubqueryComponent implements OnInit {

  subquery: Array<SubqueryModel> | any;

  constructor(private subqueryService:SubqueryService, private router: Router) { }

  ngOnInit(): void {
    this.subqueryService.getAllSubqueries().subscribe(data => {
      this.subquery = data;
      console.log("This is data "+ data);
    }, error => {
      throwError(error);
    })
  }

  goToSubquery(id: number): void {
    console.log("Rahul")
    this.router.navigateByUrl('/view-subquery/' + id);
  }
}
