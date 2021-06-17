import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css']
})
export class DatepickerComponent implements OnInit {
  model: NgbDateStruct;
  dateForm;
  products;
  constructor(private productService: ProductService,
    private formBuilder: FormBuilder) { }

    ngOnInit(){
      this.dateForm = this.formBuilder.group({
        date: this.formBuilder.control('', [Validators.required])
      })
    }

  pickDate(){
    this.productService.getProductByDate(this.dateForm.value).subscribe((response) => {
      this.products = response.posts;
      console.log(this.dateForm.value)
    })
  }
}