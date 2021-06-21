import { Component, OnInit, Output } from '@angular/core';
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
  page = 1;
  pageSize = 9;
  date;
  tabTopics = [];
  resultTopics = [];
  isDisabled = true;
  public pieChartData: number[] = [];
  public pieChartType: string = 'pie';
  constructor(private productService: ProductService,
    private formBuilder: FormBuilder) { }



  ngOnInit() {
    this.dateForm = this.formBuilder.group({
      date: this.formBuilder.control('', [Validators.required])
    })


  }

  pickDate() {
    this.date = this.dateForm.value;
    this.productService.getProductByDate(this.date).subscribe((response) => {
      this.products = response.posts;
      this.products.map(product => {
        for (let i = 0; i < this.products.length ; i++) {
          console.log(product.topics[i])
              this.tabTopics.push(product.topics[i].name);
          this.resultTopics = Array.from(new Set(this.tabTopics));
          console.log(this.resultTopics)
              return this.tabTopics;
            }
          })
        
      
      this.isDisabled = !this.isDisabled;
    })
  }
  
  chartClicked(e) {
    console.log(e);
  }

  chartHovered(e) {
    console.log(e);
  }

}
