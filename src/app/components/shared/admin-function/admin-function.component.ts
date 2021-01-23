import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { throwError } from 'rxjs';
import { AllUserService } from 'src/app/service/all-user.service';
import { UserModel } from '../all-users/user-model';

@Component({
  selector: 'app-admin-function',
  templateUrl: './admin-function.component.html',
  styleUrls: ['./admin-function.component.scss']
})
export class AdminFunctionComponent implements OnInit {

  
  p: number = 1;

  user:Array<UserModel> = [];

  constructor(private allUserService:AllUserService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.allUserService.getAllUsers().subscribe(data=>{
      this.user = data;
    },error=>{
      throwError(error);
    })
  }

  makeAdmin(id:number){
    this.allUserService.makeAdmin(id).subscribe(data=>{
      this.toastr.success("Successfully made admin");
    })
  }
  makeUser(id:number){
    this.allUserService.makeUser(id).subscribe(data=>{
      this.toastr.success("Made User");
    })
  }

}
