import {Component, Input} from '@angular/core';
import {faXmark} from '@fortawesome/free-solid-svg-icons'
import {FormGroup} from "@angular/forms";
@Component({
  selector: 'app-image-uploader',
  templateUrl: './image-uploader.component.html',
  styleUrls: ['./image-uploader.component.css']
})
export class ImageUploaderComponent {
  isDragOver = false
  imagesPreview:string[] = []
  imageStatus='';
  onDrop(event: DragEvent) {
    event.preventDefault();
    this.isDragOver = false;

    const files = event.dataTransfer?.files;
    if (files && files.length) {
      const fileReader =new FileReader()
      for (let i = 0; i < files.length; i++) {
        fileReader.onload = () =>{
          const imageUrl = fileReader.result
          if (typeof imageUrl === "string") {
          }
        }
        fileReader.readAsDataURL(files[i]);
      }
    }
  }

  removeImage(value:string){
    const index = this.imagesPreview.indexOf(value);
    this.imagesPreview.splice(index, 1);

  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
    this.isDragOver = true;
  }
  onDragLeave(event: DragEvent) {
    event.preventDefault();
    this.isDragOver = false;
  }

  protected readonly faXmark = faXmark;
}
