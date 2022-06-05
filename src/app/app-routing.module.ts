import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './AuthGuard/auth.guard';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { ForgotPasswordComponent } from './components/ForgotPassword/forgot-password/forgot-password.component';
import { VerifyOTPComponent } from './components/ForgotPassword/verify-otp/verify-otp.component';

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { CreatePostComponent } from './components/Post/create-post/create-post.component';
import { ViewPostComponent } from './components/Post/view-post/view-post.component';
import { RegisterComponent } from './components/register/register.component';
import { AllUsersComponent } from './components/shared/all-users/all-users.component';
import { ViewUserProfileComponent } from './components/shared/view-user-profile/view-user-profile.component';
import { AboutUsComponent } from './components/Static/about-us/about-us.component';
import { ContactUsComponent } from './components/Static/contact-us/contact-us.component';
import { CreateSubqueryComponent } from './components/subquery/create-subquery/create-subquery.component';
import { ListSubqueryComponent } from './components/subquery/list-subquery/list-subquery.component';
import { ViewSubqueryComponent } from './components/subquery/view-subquery/view-subquery.component';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { MyCommentsComponent } from './components/User/my-comments/my-comments.component';
import { MyPostComponent } from './components/User/my-post/my-post.component';
import { MyProfileComponent } from './components/User/my-profile/my-profile.component';
import { UserProfileComponent } from './components/User/user-profile/user-profile.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch:'full'},
  { path: 'home', component: HomeComponent, pathMatch:'full'},
  { path: 'login', component: LoginComponent, pathMatch:'full'},
  { path: 'register', component: RegisterComponent, pathMatch:'full'},
  { path: 'user', component: UserDashboardComponent, pathMatch:'full',canActivate: [AuthGuard]},
  { path: 'admin', component: AdminDashboardComponent, pathMatch:'full',canActivate: [AuthGuard]},
  { path: 'create-post', component: CreatePostComponent,canActivate: [AuthGuard]},
  { path: 'view-post/:id', component: ViewPostComponent,canActivate: [AuthGuard]},
  { path: 'list-subquery', component: ListSubqueryComponent,canActivate: [AuthGuard]},
  { path: 'view-subquery/:id', component: ViewSubqueryComponent,canActivate: [AuthGuard]},
  { path: 'create-subquery', component: CreateSubqueryComponent,canActivate: [AuthGuard] },
  { path: 'view-all-users', component: AllUsersComponent,canActivate: [AuthGuard] },
  { path: 'view-user-profile/:name', component: ViewUserProfileComponent,canActivate: [AuthGuard] },

  { path: 'user-profile/:username', component: MyProfileComponent, 
  children:[
    { path: '', redirectTo: 'user-profile', pathMatch: 'full' },
    { path: 'user-profile',component:UserProfileComponent ,canActivate: [AuthGuard]},
    { path: 'my-profile',component:MyProfileComponent,canActivate: [AuthGuard]},
    { path: 'my-posts', component:MyPostComponent,canActivate: [AuthGuard]},
    { path: 'my-comments',pathMatch:'full',component:MyCommentsComponent }
  ], 
  canActivate: [AuthGuard] },

  { path: 'forgot-password', component: ForgotPasswordComponent,canActivate: [AuthGuard] },
  { path: 'verify-otp', component: VerifyOTPComponent,canActivate: [AuthGuard] },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'contact-us', component: ContactUsComponent,canActivate: [AuthGuard] },
  { path: '**', component: ErrorComponent},




  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
