import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { LocalStorageService } from 'ngx-webstorage';
import { throwError } from 'rxjs';
import { AllUserService } from 'src/app/service/all-user.service';
import { UserModel } from '../../shared/all-users/user-model';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  userDetails:UserModel|any;

  constructor(private allUserService:AllUserService,
    private localStorage:LocalStorageService,private toastr: ToastrService ) { }

  ngOnInit(): void {
    var id = this.localStorage.retrieve('id');
    this.allUserService.getUserData(id).subscribe(data =>{
      this.userDetails = data;
      this.toastr.success("data added");
    },error=>{
      throwError(error);
      this.toastr.error("ger");
    })
  }

}
