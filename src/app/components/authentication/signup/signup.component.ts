import {Component, OnInit} from '@angular/core';
import {faArrowLeft,faXmark} from '@fortawesome/free-solid-svg-icons'
import { FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../services/auth.service";
import {ToastService} from "../../../services/toast.service";
import {Router} from "@angular/router";
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit{

  registrationForm!:FormGroup;

  constructor(private authService:AuthService,
              private toastService:ToastService,
              private router:Router
  ) {
  }

  ngOnInit(): void {
    this.registrationForm = new FormGroup({
      'email': new FormControl('', [Validators.email, Validators.required]),
      'firstName': new FormControl('', [Validators.required]),
      'secondName': new FormControl('', [Validators.required]),
      'password': new FormControl('', [Validators.required]),
    });
  }
  registration(){
    this.authService.register(this.registrationForm.value).subscribe({
      next: (v) => {
        this.router.navigate(['']);
        this.toastService.showToast('Вы успешно зарегестрировались')
      },
      error: (e) => this.toastService.showToast(e.error.message),
    })

  }

  protected readonly faArrowLeft = faArrowLeft;
  protected readonly faXmark = faXmark;
  protected readonly FormControl = FormControl;
}
