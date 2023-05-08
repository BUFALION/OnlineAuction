import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../services/auth.service";
import {ToastService} from "../../../services/toast.service";
import {Router} from "@angular/router";
import {faArrowLeft,faXmark} from '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {

  loginForm!:FormGroup;

  constructor(private authService:AuthService,
              private toastService:ToastService,
              private router:Router
  ) {
  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      'email': new FormControl('', [Validators.email, Validators.required]),
      'password': new FormControl('', [Validators.required]),
    });
  }

  login(){
    this.authService.login(this.loginForm.value).subscribe({
      next:()=>{
        this.router.navigate([''])
        this.toastService.showToast('Успешный вход в систему')
      },
      error: (e) => this.toastService.showToast(e.error.message),
    })
  }

  protected readonly faArrowLeft = faArrowLeft;
  protected readonly faXmark = faXmark;
  protected readonly FormControl = FormControl;
}
