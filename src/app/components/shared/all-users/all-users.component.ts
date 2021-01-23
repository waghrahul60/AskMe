import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { throwError } from 'rxjs';
import { AllUserService } from 'src/app/service/all-user.service';
import { UserModel } from './user-model';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.scss']
})
export class AllUsersComponent implements OnInit {
  p: number = 1;

  users: Array<UserModel> = [];

  constructor(private allUserService:AllUserService,private router: Router,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.allUserService.getAllUsers().subscribe(data =>{
      this.users = data;
      console.log("all uer",this.users);
    },error=>{
      throwError(error);
    })
  }

  viewProfile(userId:number){
    this.router.navigateByUrl('/view-user-profile/'+ userId);
  }

}
