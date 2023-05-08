import {Component, OnInit} from '@angular/core';
import {faCircleExclamation,faClose} from '@fortawesome/free-solid-svg-icons'
import {ToastService} from "../../../services/toast.service";
@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css']
})
export class ToastComponent implements OnInit{
  toastMessage: string = '';
  show=false;
  progress: number = 0;
  constructor(private toastService:ToastService) {}
  ngOnInit(): void {
    this.toastService.getToast().subscribe((message) => {
      this.toastMessage = message;
      this.startProgressBar();
    });
  }
  startProgressBar(): void {
    this.show=true;
    const interval = setInterval(() => {
      this.progress += 10;
      if (this.progress >= 100) {
        clearInterval(interval);
        this.close()
      }
    }, 1000);
  }
  close(){

    this.show=false
    this.progress = 0;

  }
  protected readonly faCircleExclamation = faCircleExclamation;
  protected readonly faClose = faClose;



}
