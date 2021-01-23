import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { NgxWebstorageModule } from 'ngx-webstorage';
import { ToastrModule } from 'ngx-toastr';


import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';

//UI Modules
import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
import {MatToolbarModule} from '@angular/material/toolbar';
import { CreatePostComponent } from './components/Post/create-post/create-post.component';
import { ViewPostComponent } from './components/Post/view-post/view-post.component';
import { CreateSubqueryComponent } from './components/subquery/create-subquery/create-subquery.component';
import { ListSubqueryComponent } from './components/subquery/list-subquery/list-subquery.component';
import { SideBarComponent } from './components/shared/side-bar/side-bar.component';
import { SubquerySideBarComponent } from './components/shared/subquery-side-bar/subquery-side-bar.component';
import { PostLookComponent } from './components/shared/post-look/post-look.component';
import { EditorModule } from '@tinymce/tinymce-angular';
import { VoteButtonComponent } from './components/shared/vote-button/vote-button.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { ViewSubqueryComponent } from './components/subquery/view-subquery/view-subquery.component';
import { AllUsersComponent } from './components/shared/all-users/all-users.component';
import { ForgotPasswordComponent } from './components/ForgotPassword/forgot-password/forgot-password.component';
import { VerifyOTPComponent } from './components/ForgotPassword/verify-otp/verify-otp.component';
import { MyProfileComponent } from './components/User/my-profile/my-profile.component';
import { MyPostComponent } from './components/User/my-post/my-post.component';
import { MyCommentsComponent } from './components/User/my-comments/my-comments.component';
import { UserProfileComponent } from './components/User/user-profile/user-profile.component';
import { ViewUserProfileComponent } from './components/shared/view-user-profile/view-user-profile.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { AdminFunctionComponent } from './components/shared/admin-function/admin-function.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    AdminDashboardComponent,
    UserDashboardComponent,
    CreatePostComponent,
    ViewPostComponent,
    CreateSubqueryComponent,
    ListSubqueryComponent,
    SideBarComponent,
    SubquerySideBarComponent,
    PostLookComponent,
    VoteButtonComponent,
    FooterComponent,
    ViewSubqueryComponent,
    AllUsersComponent,
    ForgotPasswordComponent,
    VerifyOTPComponent,
    MyProfileComponent,
    MyPostComponent,
    MyCommentsComponent,
    UserProfileComponent,
    ViewUserProfileComponent,
    AdminFunctionComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    ToastrModule.forRoot(),
    NgxWebstorageModule.forRoot(),
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatRadioModule,
    MatToolbarModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatCardModule,
    EditorModule,
    MatSelectModule,
    NgxPaginationModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
