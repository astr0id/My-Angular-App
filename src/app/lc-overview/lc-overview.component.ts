import { Component, OnInit } from '@angular/core';
import { LeetcodeService } from '../leetcode.service';
import { Leetcode } from '../leetcode';

@Component({
  selector: 'app-lc-overview',
  templateUrl: './lc-overview.component.html',
  styleUrls: ['./lc-overview.component.css']
})
export class LcOverviewComponent implements OnInit {

  leetcodes: Leetcode[];

  constructor(private leetcodeService: LeetcodeService) { }

  ngOnInit() {
    this.getLeetcodes();
  }

  getLeetcodes(): void {
    this.leetcodeService.getLeetcodes()
      .subscribe(leetcodes => this.leetcodes = leetcodes);
  }
}
