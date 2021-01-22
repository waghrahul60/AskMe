import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LocalStorageService } from 'ngx-webstorage';
import { throwError } from 'rxjs';
import { AllUserService } from 'src/app/service/all-user.service';
import { UserModel } from '../all-users/user-model';

@Component({
  selector: 'app-view-user-profile',
  templateUrl: './view-user-profile.component.html',
  styleUrls: ['./view-user-profile.component.scss']
})
export class ViewUserProfileComponent implements OnInit {
  userDetails:UserModel|any;
  id:number|any;
  id1:number|any;



  constructor(private allUserService:AllUserService,
    private localStorage:LocalStorageService,private activateRoute: ActivatedRoute,
    private toastr: ToastrService) { 
      this.id = this.activateRoute.snapshot.params.userId;
      
      this.toastr.success(this.id);
    }

  ngOnInit(): void {
    var id1 = this.localStorage.retrieve('id');
    this.allUserService.getUserData(this.id1).subscribe(data =>{
      this.userDetails = data;
      
    },error=>{
      throwError(error);
      
    })
  }
}
