import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [NavbarComponent,CommonModule],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {
  LostAndFounditems=[
    {
      "title":"A black umbrella",
      "status":"Lost",
      "description":"It was a black umbrella with a doggy tag over it",
      "image":"https://m.media-amazon.com/images/I/51x3Zp-krXL._AC_UX679_.jpg",
      "Place":"Area around the seminar hall"
    },
    {
      "title":"Iphone back cover",
      "status":"Found",
      "description":"It is a green color Iphone 13 back cover with R written on it's back.",
      "image":"https://m.media-amazon.com/images/I/71A9Vo1BatL._AC_SX679_.jpg",
      "Place":"Hostel-4"
    },
    {
      "title":"Red Wallet",
      "status":"Lost",
      "description":"A red leather wallet with multiple cards and some cash.",
      "image":"https://m.media-amazon.com/images/I/81g8vZYpzCL._AC_SX679_.jpg",
      "Place":"Cafeteria"
    },
    {
      "title":"Silver Bracelet",
      "status":"Found",
      "description":"A silver bracelet with a heart charm.",
      "image":"https://m.media-amazon.com/images/I/81G8RhW8iUL._AC_UY679_.jpg",
      "Place":"Library"
    },
    {
      "title":"Black Laptop Bag",
      "status":"Lost",
      "description":"A black laptop bag containing a MacBook Pro.",
      "image":"https://m.media-amazon.com/images/I/71U0g3zWz6L._AC_SX679_.jpg",
      "Place":"Lecture Hall 2"
    },
    {
      "title":"Water Bottle",
      "status":"Found",
      "description":"A blue water bottle with a motivational quote.",
      "image":"https://m.media-amazon.com/images/I/71zVHTAOzZL._AC_SX679_.jpg",
      "Place":"Gym"
    },
    {
      "title":"Set of Keys",
      "status":"Lost",
      "description":"A set of keys with a Superman keychain.",
      "image":"https://m.media-amazon.com/images/I/61IfT4J05gL._AC_SX679_.jpg",
      "Place":"Parking Lot"
    },
    {
      "title":"Sunglasses",
      "status":"Found",
      "description":"A pair of Ray-Ban sunglasses.",
      "image":"https://m.media-amazon.com/images/I/61N2avCqVZL._AC_UX679_.jpg",
      "Place":"Swimming Pool"
    },
    {
      "title":"Notebook",
      "status":"Lost",
      "description":"A spiral notebook with physics notes.",
      "image":"https://m.media-amazon.com/images/I/71D9ImsvEtL._AC_SX679_.jpg",
      "Place":"Library"
    },
    {
      "title":"Calculator",
      "status":"Found",
      "description":"A scientific calculator, black in color.",
      "image":"https://m.media-amazon.com/images/I/71dT3tTJeWL._AC_SY679_.jpg",
      "Place":"Cafeteria"
    },
    {
      "title":"Earbuds",
      "status":"Lost",
      "description":"A pair of white Apple AirPods.",
      "image":"https://m.media-amazon.com/images/I/71NTi82uBEL._AC_SX679_.jpg",
      "Place":"Gym"
    },
    {
      "title":"Textbook",
      "status":"Found",
      "description":"A chemistry textbook, 5th edition.",
      "image":"https://m.media-amazon.com/images/I/81+x6lBnu9L._AC_UY679_.jpg",
      "Place":"Lecture Hall 3"
    },
    {
      "title":"Watch",
      "status":"Lost",
      "description":"A silver wristwatch with a black dial.",
      "image":"https://m.media-amazon.com/images/I/81HgsQ9EDcL._AC_UX679_.jpg",
      "Place":"Gym"
    },
    {
      "title":"Passport",
      "status":"Found",
      "description":"A blue passport with the name John Doe.",
      "image":"https://m.media-amazon.com/images/I/81dQ3xbid-L._AC_SX679_.jpg",
      "Place":"Cafeteria"
    },
    {
      "title":"Camera",
      "status":"Lost",
      "description":"A Canon DSLR camera, black.",
      "image":"https://m.media-amazon.com/images/I/81r9g5ETSpL._AC_SX679_.jpg",
      "Place":"Park"
    },
    {
      "title":"Jacket",
      "status":"Found",
      "description":"A black leather jacket, size M.",
      "image":"https://m.media-amazon.com/images/I/81BdG7BSzbL._AC_UX679_.jpg",
      "Place":"Auditorium"
    },
    {
      "title":"Scarf",
      "status":"Lost",
      "description":"A red woolen scarf.",
      "image":"https://m.media-amazon.com/images/I/71pUVvhYphL._AC_UX679_.jpg",
      "Place":"Cafeteria"
    },
    {
      "title":"Handbag",
      "status":"Found",
      "description":"A black handbag with a gold chain.",
      "image":"https://m.media-amazon.com/images/I/71oW9v1kFVL._AC_UX679_.jpg",
      "Place":"Library"
    },
    {
      "title":"Gloves",
      "status":"Lost",
      "description":"A pair of black leather gloves.",
      "image":"https://m.media-amazon.com/images/I/81K2st7whpL._AC_UX679_.jpg",
      "Place":"Parking Lot"
    },
    {
      "title":"Ring",
      "status":"Found",
      "description":"A gold ring with a blue stone.",
      "image":"https://m.media-amazon.com/images/I/81c4A6gtY-L._AC_UY679_.jpg",
      "Place":"Library"
    },
    {
      "title":"Hat",
      "status":"Lost",
      "description":"A black baseball cap with NY logo.",
      "image":"https://m.media-amazon.com/images/I/71-E4VZGUlL._AC_UX679_.jpg",
      "Place":"Gym"
    }
]


}
