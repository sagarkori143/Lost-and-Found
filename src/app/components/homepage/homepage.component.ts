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
  LostAndFounditems = [
    {
      "title": "A black umbrella",
      "status": "Lost",
      "description": "It was a black umbrella with a doggy tag over it",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNDeG8Tucxub9KkS7l4rCx990ny3MCJL7mQKfwBtO-211fEAl8mtJR-DT0bmzY0KXYdTs&usqp=CAU",
      "Place": "Area around the seminar hall",
      "date": "2024-06-24",
      "time": "10:35"
    },
    {
      "title": "Iphone back cover",
      "status": "Found",
      "description": "It is a green color Iphone 13 back cover with R written on it's back.",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxQALjcYmlgZw83hoo8XMpgv9iv2w_iEdoDQ&s",
      "Place": "Hostel-4",
      "date": "2024-06-23",
      "time": "14:50"
    },
    {
      "title": "Red Wallet",
      "status": "Lost",
      "description": "A red leather wallet with multiple cards and some cash.",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlvKI0OwjKZGPB7xfaU9398K3kKMujot3gYQ&s",
      "Place": "Cafeteria",
      "date": "2024-06-22",
      "time": "12:15"
    },
    {
      "title": "Silver Bracelet",
      "status": "Found",
      "description": "A silver bracelet with a heart charm.",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUy-sjvrFidjOHqw8nsByzv9DStAa6WVNs-w&s",
      "Place": "Library",
      "date": "2024-06-21",
      "time": "09:45"
    },
    {
      "title": "Black Laptop Bag",
      "status": "Lost",
      "description": "A black laptop bag containing a MacBook Pro.",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3rcS3xFC3-pMacVH4xWpoQU9o-26Ha9qxWQ&s",
      "Place": "Lecture Hall 2",
      "date": "2024-06-20",
      "time": "15:30"
    },
    {
      "title": "Water Bottle",
      "status": "Found",
      "description": "A blue water bottle with a motivational quote.",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMBbvn8NSt5AcK_euTVtMAi073ub0Uerux1A&s",
      "Place": "Gym",
      "date": "2024-06-19",
      "time": "08:00"
    },
    {
      "title": "Set of Keys",
      "status": "Lost",
      "description": "A set of keys with a Superman keychain.",
      "image": "https://www.shutterstock.com/image-photo/building-manager-key-set-onsite-260nw-1644336916.jpg",
      "Place": "Parking Lot",
      "date": "2024-06-18",
      "time": "17:25"
    },
    {
      "title": "Sunglasses",
      "status": "Found",
      "description": "A pair of Ray-Ban sunglasses.",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmmuHsqRpV0ttZdOrbvMsNQYDe9LQ4xQOiHw&s",
      "Place": "Swimming Pool",
      "date": "2024-06-17",
      "time": "13:40"
    },
    {
      "title": "Notebook",
      "status": "Lost",
      "description": "A spiral notebook with physics notes.",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF4Ei1FQyePSGj7JiAvoGaXNEkh5smQvUeCw&s",
      "Place": "Library",
      "date": "2024-06-16",
      "time": "11:00"
    },
    {
      "title": "Calculator",
      "status": "Found",
      "description": "A scientific calculator, black in color.",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBEJ5T8UzMsi-ZAlAnhx3o8hgX-8Zb014_Uw&s",
      "Place": "Cafeteria",
      "date": "2024-06-15",
      "time": "10:10"
    },
    {
      "title": "Earbuds",
      "status": "Lost",
      "description": "A pair of white Apple AirPods.",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY72HhYYcmAlgc3PJ8v4iY7w8QZgj8PwJgQg&s",
      "Place": "Gym",
      "date": "2024-06-14",
      "time": "18:25"
    },
    {
      "title": "Textbook",
      "status": "Found",
      "description": "A chemistry textbook, 5th edition.",
      "image": "https://www.clankart.com/user-uploads/advert/Dr_OP_Tandon_textbook_of_organic_chemistry_for_jeemain__advanced16619383201.jpg",
      "Place": "Lecture Hall 3",
      "date": "2024-06-13",
      "time": "14:20"
    },
    {
      "title": "Watch",
      "status": "Lost",
      "description": "A silver wristwatch with a black dial.",
      "image": "https://images.unsplash.com/photo-1542546060-82c7fc8d044b",
      "Place": "Gym",
      "date": "2024-06-12",
      "time": "07:45"
    },
    {
      "title": "Passport",
      "status": "Found",
      "description": "A blue passport with the name John Doe.",
      "image": "https://images.unsplash.com/photo-1512820790803-83ca1d14af12",
      "Place": "Cafeteria",
      "date": "2024-06-11",
      "time": "16:00"
    },
    {
      "title": "Camera",
      "status": "Lost",
      "description": "A Canon DSLR camera, black.",
      "image": "https://images.unsplash.com/photo-1484723091739-30a097e8f929",
      "Place": "Park",
      "date": "2024-06-10",
      "time": "12:45"
    },
    {
      "title": "Jacket",
      "status": "Found",
      "description": "A black leather jacket, size M.",
      "image": "https://images.unsplash.com/photo-1548625149-2a8555f7fc7c",
      "Place": "Auditorium",
      "date": "2024-06-09",
      "time": "09:30"
    },
    {
      "title": "Scarf",
      "status": "Lost",
      "description": "A red woolen scarf.",
      "image": "https://images.unsplash.com/photo-1520975376472-6278c17bdec5",
      "Place": "Cafeteria",
      "date": "2024-06-08",
      "time": "13:50"
    },
    {
      "title": "Handbag",
      "status": "Found",
      "description": "A black handbag with a gold chain.",
      "image": "https://images.unsplash.com/photo-1531574805041-beb5e71b9bdc",
      "Place": "Library",
      "date": "2024-06-07",
      "time": "15:15"
    },
    {
      "title": "Gloves",
      "status": "Lost",
      "description": "A pair of black leather gloves.",
      "image": "https://images.unsplash.com/photo-1506224778077-3ce0ed63377a",
      "Place": "Parking Lot",
      "date": "2024-06-06",
      "time": "17:40"
    },
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

