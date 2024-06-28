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
      "title": "A black umbrella",
      "status": "Lost",
      "description": "It was a black umbrella with a doggy tag over it",
      "image": "https://images.unsplash.com/photo-1617359273303-8817f7608d38",
      "Place": "Area around the seminar hall",
      "date": "2024-03-15",
      "time": "10:35"
    },
    {
      "title": "Iphone back cover",
      "status": "Found",
      "description": "It is a green color Iphone 13 back cover with R written on it's back.",
      "image": "https://images.unsplash.com/photo-1593150655159-5d51e91b8ee0",
      "Place": "Hostel-4",
      "date": "2024-02-22",
      "time": "14:50"
    },
    {
      "title": "Red Wallet",
      "status": "Lost",
      "description": "A red leather wallet with multiple cards and some cash.",
      "image": "https://images.unsplash.com/photo-1612824037696-465c94d7bba7",
      "Place": "Cafeteria",
      "date": "2024-01-10",
      "time": "12:15"
    },
    {
      "title": "Silver Bracelet",
      "status": "Found",
      "description": "A silver bracelet with a heart charm.",
      "image": "https://images.unsplash.com/photo-1559163499-413811fb2344",
      "Place": "Library",
      "date": "2024-06-05",
      "time": "09:45"
    },
    {
      "title": "Black Laptop Bag",
      "status": "Lost",
      "description": "A black laptop bag containing a MacBook Pro.",
      "image": "https://images.unsplash.com/photo-1555679423-cb64a9889464",
      "Place": "Lecture Hall 2",
      "date": "2024-04-22",
      "time": "15:30"
    },
    {
      "title": "Water Bottle",
      "status": "Found",
      "description": "A blue water bottle with a motivational quote.",
      "image": "https://images.unsplash.com/photo-1582468441447-eab1fb048bb5",
      "Place": "Gym",
      "date": "2024-05-19",
      "time": "08:00"
    },
    {
      "title": "Set of Keys",
      "status": "Lost",
      "description": "A set of keys with a Superman keychain.",
      "image": "https://images.unsplash.com/photo-1503513962988-e142d44f0ee5",
      "Place": "Parking Lot",
      "date": "2024-03-01",
      "time": "17:25"
    },
    {
      "title": "Sunglasses",
      "status": "Found",
      "description": "A pair of Ray-Ban sunglasses.",
      "image": "https://images.unsplash.com/photo-1523115725-609d2afd4d9d",
      "Place": "Swimming Pool",
      "date": "2024-06-11",
      "time": "13:40"
    },
    {
      "title": "Notebook",
      "status": "Lost",
      "description": "A spiral notebook with physics notes.",
      "image": "https://images.unsplash.com/photo-1506102383123-83ca1d14af12",
      "Place": "Library",
      "date": "2024-01-25",
      "time": "11:00"
    },
    {
      "title": "Calculator",
      "status": "Found",
      "description": "A scientific calculator, black in color.",
      "image": "https://images.unsplash.com/photo-1581092580498-d9e5bb1e9868",
      "Place": "Cafeteria",
      "date": "2024-02-15",
      "time": "10:10"
    },
    {
      "title": "Earbuds",
      "status": "Lost",
      "description": "A pair of white Apple AirPods.",
      "image": "https://images.unsplash.com/photo-1593642634315-48f5414c3ad9",
      "Place": "Gym",
      "date": "2024-06-20",
      "time": "18:25"
    },
    {
      "title": "Textbook",
      "status": "Found",
      "description": "A chemistry textbook, 5th edition.",
      "image": "https://images.unsplash.com/photo-1528459105426-b4a620e8e3ab",
      "Place": "Lecture Hall 3",
      "date": "2024-05-03",
      "time": "14:20"
    },
    {
      "title": "Watch",
      "status": "Lost",
      "description": "A silver wristwatch with a black dial.",
      "image": "https://images.unsplash.com/photo-1542546060-82c7fc8d044b",
      "Place": "Gym",
      "date": "2024-04-12",
      "time": "07:45"
    },
    {
      "title": "Passport",
      "status": "Found",
      "description": "A blue passport with the name John Doe.",
      "image": "https://images.unsplash.com/photo-1512820790803-83ca1d14af12",
      "Place": "Cafeteria",
      "date": "2024-03-27",
      "time": "16:00"
    },
    {
      "title": "Camera",
      "status": "Lost",
      "description": "A Canon DSLR camera, black.",
      "image": "https://images.unsplash.com/photo-1484723091739-30a097e8f929",
      "Place": "Park",
      "date": "2024-02-05",
      "time": "12:45"
    },
    {
      "title": "Jacket",
      "status": "Found",
      "description": "A black leather jacket, size M.",
      "image": "https://images.unsplash.com/photo-1548625149-2a8555f7fc7c",
      "Place": "Auditorium",
      "date": "2024-01-18",
      "time": "09:30"
    },
    {
      "title": "Scarf",
      "status": "Lost",
      "description": "A red woolen scarf.",
      "image": "https://images.unsplash.com/photo-1520975376472-6278c17bdec5",
      "Place": "Cafeteria",
      "date": "2024-03-05",
      "time": "13:50"
    },
    {
      "title": "Handbag",
      "status": "Found",
      "description": "A black handbag with a gold chain.",
      "image": "https://images.unsplash.com/photo-1531574805041-beb5e71b9bdc",
      "Place": "Library",
      "date": "2024-04-07",
      "time": "15:15"
    },
    {
      "title": "Gloves",
      "status": "Lost",
      "description": "A pair of black leather gloves.",
      "image": "https://images.unsplash.com/photo-1506224778077-3ce0ed63377a",
      "Place": "Parking Lot",
      "date": "2024-02-28",
      "time": "17:40"
    },
    {
      "title": "Ring",
      "status": "Found",
      "description": "A gold ring with a blue stone.",
      "image": "https://images.unsplash.com/photo-1579154206971-ffabe77f4a34",
      "Place": "Library",
      "date": "2024-01-30",
      "time": "11:25"
    },
    {
      "title": "Hat",
      "status": "Lost",
      "description": "A black baseball cap with NY logo.",
      "image": "https://images.unsplash.com/photo-1560982239-6e4d3f38427a",
      "Place": "Gym",
      "date": "2024-06-22",
      "time": "19:05"
    }
]

timeAgo(date: string, time: string): string {
  const now = new Date();
  const itemDate = new Date(`${date}T${time}:00`);

  const secondsAgo = Math.floor((now.getTime() - itemDate.getTime()) / 1000);
  const minutesAgo = Math.floor(secondsAgo / 60);
  const hoursAgo = Math.floor(minutesAgo / 60);
  const daysAgo = Math.floor(hoursAgo / 24);
  const weeksAgo = Math.floor(daysAgo / 7);
  const monthsAgo = Math.floor(daysAgo / 30);
  const yearsAgo = Math.floor(daysAgo / 365);

  if (yearsAgo > 0) return `${yearsAgo} year(s) ago`;
  if (monthsAgo > 0) return `${monthsAgo} month(s) ago`;
  if (weeksAgo > 0) return `${weeksAgo} week(s) ago`;
  if (daysAgo > 0) return `${daysAgo} day(s) ago`;
  if (hoursAgo > 0) return `${hoursAgo} hour(s) ago`;
  if (minutesAgo > 0) return `${minutesAgo} minute(s) ago`;
  return `${secondsAgo} second(s) ago`;
}
}

