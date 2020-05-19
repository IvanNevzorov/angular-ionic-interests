import { Component, OnInit } from '@angular/core';
import { APIService } from 'src/app/services/api.service';

@Component({
    selector: 'app-interests-page',
    templateUrl: './interests-page.component.html',
    styleUrls: ['./interests-page.component.scss']
})

export class InterestsPageComponent implements OnInit {
    constructor(private apiService: APIService) { }

    ngOnInit() {
        this.apiService.mealRandom().subscribe(data => console.log(data))
        this.apiService.events().subscribe(data => console.log(data))
        this.apiService.news().subscribe(data => console.log(data))
    }
}