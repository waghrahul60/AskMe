
import { Component, OnInit } from '@angular/core';
import { SubqueryModel } from 'src/app/service/subquery-model';
import { SubqueryService } from 'src/app/service/subquery.service';

@Component({
  selector: 'app-subquery-side-bar',
  templateUrl: './subquery-side-bar.component.html',
  styleUrls: ['./subquery-side-bar.component.scss']
})
export class SubquerySideBarComponent implements OnInit {

  subquery: Array<SubqueryModel> | any;
  displayAll:boolean|any;

  constructor(private subqueryService:SubqueryService) {
    this.subqueryService.getAllSubqueries().subscribe(data =>{
      if(data.length > 4){
        this.subquery = data.splice(0,4);
        this.displayAll = true;
      }else{
        this.subquery = data;
      }
    });
   }

  ngOnInit(): void {
  }

}
