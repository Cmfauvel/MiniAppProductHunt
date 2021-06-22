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
  formTopic;
  products;
  page = 1;
  pageSize = 9;
  date;
  tabTopics = [];
  resultTopics = [];
  isDisabled = true;

  constructor(private productService: ProductService, private formBuilder: FormBuilder) { }



  ngOnInit(): void {
    this.dateForm = this.formBuilder.group({
      date: this.formBuilder.control('', [Validators.required])
    });
    this.formTopic = this.formBuilder.group({
      topic: this.formBuilder.control('', [Validators.required])
    });
  }

  pickDate(): void {
    this.date = this.dateForm.value;
    this.productService.getProductByDate(this.date).subscribe((response) => {
      this.products = response.posts;
      this.products.map(product => {
        for (let i = 0; i < this.products.length; i++) {
          console.log(product.topics[i]);
          this.tabTopics.push(product.topics[i].name);
          this.resultTopics = Array.from(new Set(this.tabTopics));
          return this.resultTopics;
        }
      });
      console.log(this.resultTopics);
      this.isDisabled = !this.isDisabled;
    });
  }

  selectTopic(): void{
    const year = this.date.date.year;
    const month = this.date.date.month;
    const day = this.date.date.day;
    const currentDate = year + '-' + month + '-' + day;
    console.log(currentDate);
    const topic = this.formTopic.value.topic.replace(/ /g, '-').toLowerCase();
    if (this.formTopic.value.topic !== '') {
      this.productService.filterProductByTopic(topic, currentDate).subscribe((response) => {
        this.products = response.posts;
        console.log(response);
      });
      console.log(topic, this.date);
    } else {
      this.productService.getProductByDate(this.date).subscribe((response) => {
        this.products = response.posts;
      });
    }
  }

}
