import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { TopicService } from 'src/app/services/topic.service';

@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.css']
})
export class PiechartComponent implements OnInit {
  topics;
  topic;
  topicNames = [];
  page = 1;
  pageSize = 9;
  isDisabled = true;
  // Pie
  public pieChartLabels: string[] = ['Chrome', 'Safari', 'Firefox', 'Internet Explorer', 'Other'];
  public pieChartData: number[] = [];
  public pieChartType: string = 'pie';
  colors = [];
  constructor(private topicService: TopicService) { }

  ngOnInit(): void {
    this.getTopics();
    console.log(this.topicNames)
  }

  getTopics() {
    this.topicService.getAllTopics().subscribe((response) => {
      this.topics = response.topics;
      console.log(this.topics)
      this.topics.map(topic => {
        const count = this.topicNames.push(topic.name, topic.posts_count);
        this.pieChartData.push(topic.posts_count);
        this.topicNames.forEach(element => {
          this.colors.push('#'+(Math.random()*0xFFFFFF<<0).toString(16))
        });
        this.pieChartData.length = this.topicNames.length;
        return this.topicNames, this.pieChartData, this.colors;
      });
    })
  }

  // events
  chartClicked(e) {
    console.log(e);
  }

  chartHovered(e) {
    console.log(e);
  }
}
