import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './AuthGuard/auth.guard';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { CreatePostComponent } from './components/Post/create-post/create-post.component';
import { ViewPostComponent } from './components/Post/view-post/view-post.component';
import { RegisterComponent } from './components/register/register.component';
import { CreateSubqueryComponent } from './components/subquery/create-subquery/create-subquery.component';
import { ListSubqueryComponent } from './components/subquery/list-subquery/list-subquery.component';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, pathMatch:'full'},
  { path: 'login', component: LoginComponent, pathMatch:'full'},
  { path: 'register', component: RegisterComponent, pathMatch:'full'},
  { path: 'user', component: UserDashboardComponent, pathMatch:'full',canActivate: [AuthGuard]},
  { path: 'admin', component: AdminDashboardComponent, pathMatch:'full',canActivate: [AuthGuard]},
  { path: 'create-post', component: CreatePostComponent,canActivate: [AuthGuard]},
  { path: 'view-post/:id', component: ViewPostComponent,canActivate: [AuthGuard]},
  { path: 'view-subquery', component: ListSubqueryComponent,canActivate: [AuthGuard]},
  { path: 'create-subquery', component: CreateSubqueryComponent,canActivate: [AuthGuard] },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
