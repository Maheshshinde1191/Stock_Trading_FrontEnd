import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  signupUsers:any[] =[];
  signupObj:any ={
    userName:'',
    email:'',
    password:''
  };
  loginObj:any={
    userName:'',
    password:''
  }
 
  constructor( private router :Router, private authService: AuthServiceService) { }

  ngOnInit(): void {
    const localData = localStorage.getItem('signUpUsers');
    if(localData!=null){
      this.signupUsers=JSON.parse(localData);
    }
    console.log(this.authService.isLoggedIn);
  }
 
  onSignup():void{
    this.signupUsers.push(this.signupObj);
    localStorage.setItem('signUpUsers',JSON.stringify(this.signupUsers));
    this.signupObj ={
      userName:'',
      email:'',
      password:''
    };

    


  }
  async onLogin():Promise<void>{
    this.authService.login();
    //  const isUserExist = this.signupUsers.find(m => m.userName == this.loginObj.userName && m.password == this.loginObj.password);
    //  if(isUserExist != undefined){
    //     // this.router.navigate(['']);
    //     alert('User Login successfully');
        
    //  }
    //  else{
    //   alert('Wrong Credentials');
    //  }
    await this.router.navigateByUrl("/home");
  }

}
