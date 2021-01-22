import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  private roles: string[] | any;
  
  showAdminBoard = false;

  isLoggedIn: boolean | any;
  username: string | undefined;
  role:Array<string> | any;
  reload:boolean|any;

  constructor(private authService: AuthService, private router: Router,
    private localStorage:LocalStorageService) { }

  ngOnInit(): void {
    this.authService.loggedIn.subscribe((data: boolean) => this.isLoggedIn = data);
    this.authService.username.subscribe((data: string) => this.username = data);
    this.isLoggedIn = this.authService.isLoggedIn();
    this.username = this.authService.getUserName();

    this.role = this.localStorage.retrieve('roles');
    this.roles = this.role.name;
    console.log("tahul", this.roles);
    this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
    // if (!localStorage.store('foo')) { 
    //   localStorage.store('foo', 'no reload'); 
    //   location.reload();
    // } else {
    //   localStorage.clear('foo');
    // }

    
  }

  logout() {
    this.authService.logout();
    this.isLoggedIn = false;
    this.router.navigateByUrl('/home');
  }

}
