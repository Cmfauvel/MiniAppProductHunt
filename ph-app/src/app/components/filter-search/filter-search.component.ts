import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';
import { TopicService } from 'src/app/services/topic.service';

@Component({
  selector: 'app-filter-search',
  templateUrl: './filter-search.component.html',
  styleUrls: ['./filter-search.component.css']
})
export class FilterSearchComponent implements OnInit {
formTopic;
@Input() topics;
products;
@Input() date;
  constructor(private topicService: TopicService,
    private formBuilder: FormBuilder,
    private productService: ProductService) { }

  ngOnInit(): void {
    this.getTopics();
        this.formTopic = this.formBuilder.group({
          topic: this.formBuilder.control('', [Validators.required])
        })
  }

  getTopics(){
    this.topicService.getAllTopics().subscribe((response) => {
      this.topics = response.topics;
      console.log(this.topics)
    })
  }

  selectTopic(){
    const year = this.date.date.year;
    const month = this.date.date.month;
    const day = this.date.date.day;
    const currentDate = year + '-' + month + '-' + day;
    console.log(currentDate)
    const topic = this.formTopic.value.topic;
    this.productService.filterProductByTopic(topic, currentDate).subscribe((response) => {
      this.products = response.posts;
      console.log(response)
    })
    console.log(topic, this.date)
    
  }
}
