import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/user.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  public isLogin = 'LOGIN';
  public action= 'Login';
  public signup='SignUp'
  public loginForm: FormGroup;

  constructor(private fb: FormBuilder, public userService: UserService,private router:Router,private toastr: ToastrService) {
    this.loginForm = this.fb.group({
      name: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', Validators.required],
     

    });
  }

  ngOnInit(): void {

  }
  addUser(){
    const name = this.loginForm.get('name')?.value;
    const pwd=this.loginForm.get('password')?.value;
    const email=this.loginForm.get('email')?.value;
    this.userService.addUser({Name:name,Password:pwd,Email:email}).subscribe(res=>{
if(res){
  this.toastr.success("the User has been added successfully","Success");
}

    },err=>{
      this.toastr.error("the User alredy exists","Error",{
        timeOut: 3000,
      });
    })
  }
  onSignUp() {
    if(this.isLogin==='LOGIN')

    {this.isLogin = 'SIGN UP';
    this.action= 'SignUp';
    this.signup='Login'}
    else{
    this.isLogin = 'LOGIN';
    this.signup='SignUp'
    }
    this.loginForm.reset();
  }
  onLogin() {
    const name = this.loginForm.get('name')?.value;
    const pwd=this.loginForm.get('password')?.value;
    this.userService.isExist({Name:name,Password:pwd}).subscribe(res=>{
      console.log(res)
      if(res===false){
        this.toastr.error("The user does not exist","Error",{
          timeOut: 3000,
        });
      }else{
       this.router.navigate(['dashboard']) .then(() => {
        window.location.reload();
      });
      localStorage.setItem('userName',name);
      }
    });
  }
}
