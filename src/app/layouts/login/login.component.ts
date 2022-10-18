import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild} from '@angular/core';
import { Form, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  loginForm!:FormGroup;
  constructor(private formbuilder: FormBuilder, private router:Router, private http: HttpClient) {}
  ngOnInit(): void {
      this.loginForm = this.formbuilder.group(
        {
          username:[''],
          password:['']
        }
      )
  }

  login(){
    this.http.get<any>("http://0.0.0.0:3000/logindetails").subscribe(res=>{
      const user = res.find((a:any)=>{
        return a.username === this.loginForm.value.username && a.password === this.loginForm.value.password
      })
      if(user){
        alert("Login Successful");
        this.loginForm.reset();
        this.router.navigate(['dashboard/teacherlist']);
      }else {
        alert("Either Username or Password is Incorrect.")
      }
    }
    )
  }
}
