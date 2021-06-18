import { Component, Input, OnInit, Output } from '@angular/core';
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
  products : [];
  page = 1;
  count = 0;
  pageSize = 9;
  @Output() date;
  isDisabled = true;
  constructor(private productService: ProductService,
    private formBuilder: FormBuilder) { }

    ngOnInit(){
      this.dateForm = this.formBuilder.group({
        date: this.formBuilder.control('', [Validators.required])
      })
      this.date = this.dateForm.value;
        
        
    }

  pickDate(){
    this.productService.getProductByDate(this.date).subscribe((response) => {
      this.products = response.posts;
      this.isDisabled = !this.isDisabled;
      console.log(response.posts)
    })
  }

}
