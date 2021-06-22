import { Component, OnInit } from '@angular/core';
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
  public pieChartType = 'pie';
  public pieChartColors = [
                            {
                              backgroundColor: [],
                            },
                          ];

  constructor(private topicService: TopicService) { }

  ngOnInit(): void {
    this.getTopics();
  }

  getColors(): any[] {
    const r = Math.floor(Math.random() * 200);
    const g = Math.floor(Math.random() * 200);
    const b = Math.floor(Math.random() * 200);
    this.pieChartColors.map((element) => element.backgroundColor.push('rgb(' + r + ', ' + g + ', ' + b + ')'));
    return this.pieChartColors;
  }

  getTopics(): void {
    this.topicService.getAllTopics().subscribe((response) => {
      this.topics = response.topics;
      this.topics.map(topic => {
        const count = this.topicNames.push(topic.name);
        this.pieChartData.push(topic.posts_count);
        this.topicNames.forEach(() => {
          this.getColors();
        });
        this.pieChartData.length = this.topicNames.length;
        // return this.topicNames, this.pieChartData, this.pieChartColors;
      });
    }
    , (error) => {
      console.log(error);
      });
  }

  chartHovered(e): any{
    // console.log(e);
  }
}
