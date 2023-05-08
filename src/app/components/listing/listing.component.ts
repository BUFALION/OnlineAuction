import {
  AfterViewInit,
  Component,
  ComponentFactoryResolver,
  Injector,
  OnInit,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import {FormBuilder, FormGroup, Validators,} from "@angular/forms";
import {ToastService} from "../../services/toast.service";
import {StepOneComponent} from "./steps/step-one/step-one.component";
import {StepTwoComponent} from "./steps/step-two/step-two.component";
import {StepThreeComponent} from "./steps/step-three/step-three.component";
import {StepFiveComponent} from "./steps/step-five/step-five.component";
import {ImageUploaderComponent} from "../helpers/image-uploader/image-uploader.component";
import {StepSixComponent} from "./steps/step-six/step-six.component";

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {
  @ViewChild('stepContainer', { read: ViewContainerRef }) stepContainer!: ViewContainerRef;
  listingStep = 0;
  formGroup!:FormGroup
  constructor(private fb:FormBuilder,
              private toastService:ToastService,
              private componentFactoryResolver: ComponentFactoryResolver,) {}

  steps: any[] = [
    { template: StepOneComponent },
    { template: StepTwoComponent },
    { template: StepThreeComponent },
    { template: ImageUploaderComponent },
    { template: StepFiveComponent },
    { template: StepSixComponent },
  ]
  ngOnInit(): void {
    this.formGroup = this.fb.group({
      step1: this.fb.group({
        vin: ['', Validators.required],
        option: ['', Validators.required],
      }),
      step2: this.fb.group({
        makeControl: ['', Validators.required],
        modelControl: ['', Validators.required],
        yearControl: ['', Validators.required],
        mileageControl: ['', Validators.required],
        engineControl: ['', Validators.required],
        bodyColorControl: ['', Validators.required]
      }),
      step3: this.fb.group({
        country: ['', Validators.required],
        city: ['', Validators.required],
        streetAddress: ['', Validators.required],
        code: ['', Validators.required]
      }),
      step4: this.fb.group({
        images: ['', Validators.required],
      }),
      step5: this.fb.group({
        title: ['', Validators.required],
        description: ['', Validators.required],
        price: ['', [Validators.required, Validators.pattern(/^\d+$/)]]
      }),
    });


  }
  strart(){
    this.listingStep=1;
    this.loadCurrentStepComponent();
  }
  loadCurrentStepComponent() {
    if(this.stepContainer)
      this.stepContainer.clear();

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.getCurrentStepComponent());
    const componentRef = this.stepContainer.createComponent(componentFactory) as any;
    componentRef.instance.formGroup = this.getStepFormGroup(this.listingStep);
  }
  getCurrentStepComponent(): any {
    return this.steps[this.listingStep - 1].template;
  }
  nextStep() {
    console.log(this.getStepFormGroup(this.listingStep).valid)
    if (this.getStepFormGroup(this.listingStep).valid || this.listingStep===4) {
      this.listingStep++;
      this.loadCurrentStepComponent();
    }
  }
  backStep() {
    this.listingStep--;
    this.loadCurrentStepComponent();
  }
  getStepFormGroup(step: number) {
    return this.formGroup.get(`step${step}`) as FormGroup;
  }
}
