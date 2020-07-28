import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes:Recipe[] = [
    new Recipe("The Best Noodles", "Tasty Noods", "https://thecozyapron.com/wp-content/uploads/2017/05/chilled-garlic-sesame-udon-noodles_thecozyapron_social.jpg"),
    new Recipe("The Best Noodles", "Tasty Noods", "https://thecozyapron.com/wp-content/uploads/2017/05/chilled-garlic-sesame-udon-noodles_thecozyapron_social.jpg")
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
