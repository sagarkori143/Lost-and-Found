import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { PostDetailsComponent } from '../post-details/post-details.component';
import { NewpostFormComponent } from '../newpost-form/newpost-form.component';
@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [NavbarComponent,CommonModule,PostDetailsComponent,NewpostFormComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {
  LostAndFounditems = [
    {
      "title": "JBL Earbuds",
      "status": "Lost",
      "description": "It was black cased JBL tune 230nc buds worth 5k.",
      "image": "https://x.imastudent.com/content/0050459_jbl-tune-beam-noise-cancelling-true-wireless-earbuds_360.jpeg",
      "otherImages": [
        {"src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9CySEe1fpG3HGFSzgiHMl36XC0P40l5wtgA&s"},
        {"src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsKQO9IwUhIX8t6yZg3hsiXiURCfAYFB4yEA&s"},
        {"src": "https://www.jiomart.com/images/product/original/492796801/jbl-tune-230-nc-true-wireless-earbuds-with-noise-cancellation-black-digital-o492796801-p591225906-8-202205022207.jpeg?im=Resize=(420,420)"},
        {"src": "https://m.media-amazon.com/images/I/61D3b7RsXNL.jpg"}
      ],
      "Place": "Panini-A",
      "date": "2024-06-29",
      "time": "10:35"
    },
    {
      "title": "A black umbrella",
      "status": "Lost",
      "description": "It was a black umbrella with a doggy tag over it",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNDeG8Tucxub9KkS7l4rCx990ny3MCJL7mQKfwBtO-211fEAl8mtJR-DT0bmzY0KXYdTs&usqp=CAU",
      "otherImages": [
        {"src": "https://cdn.thewirecutter.com/wp-content/media/2022/09/wireless-earbuds-2048px-3039.jpg"},
        {"src": "data:image/jpeg;base64,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"},
        {"src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE-c8xeZ6BXisglnpns_WiG1xeSD3f1pYT7L33zZfO0VnBaTIkE9KSPPnVejTtOWuwF7w&usqp=CAU"},
        {"src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE5vz5MlR-toxW_TVxo30j9qZW60PAmrQcEg&s"}
      ],
      "Place": "Area around the seminar hall",
      "date": "2024-06-29",
      "time": "03:35"
    },
    {
      "title": "Iphone back cover",
      "status": "Found",
      "description": "It is a green color Iphone 13 back cover with R written on it's back.",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxQALjcYmlgZw83hoo8XMpgv9iv2w_iEdoDQ&s",
      "otherImages": [
        {"src": "https://m.media-amazon.com/images/I/71mD-RHxvZL._AC_SX679_.jpg"},
        {"src": "https://m.media-amazon.com/images/I/61FYqaY2CKL._AC_SX679_.jpg"},
        {"src": "https://m.media-amazon.com/images/I/51w-FmYk0HL._AC_SL1500_.jpg"},
        {"src": "https://m.media-amazon.com/images/I/51bWf26V9HL._AC_SL1500_.jpg"}
      ],
      "Place": "Hostel-4",
      "date": "2024-06-23",
      "time": "14:50"
    },
    {
      "title": "Red Wallet",
      "status": "Lost",
      "description": "A red leather wallet with multiple cards and some cash.",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlvKI0OwjKZGPB7xfaU9398K3kKMujot3gYQ&s",
      "otherImages": [
        {"src": "https://m.media-amazon.com/images/I/71xLl2DdXaL._AC_SX679_.jpg"},
        {"src": "https://m.media-amazon.com/images/I/61zT-vH1ZlL._AC_SX679_.jpg"},
        {"src": "https://m.media-amazon.com/images/I/61sEJWGpJ8L._AC_SX679_.jpg"},
        {"src": "https://m.media-amazon.com/images/I/61W6vWz4x7L._AC_SX679_.jpg"}
      ],
      "Place": "Cafeteria",
      "date": "2024-06-22",
      "time": "12:15"
    },
    {
      "title": "Silver Bracelet",
      "status": "Found",
      "description": "A silver bracelet with a heart charm.",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUy-sjvrFidjOHqw8nsByzv9DStAa6WVNs-w&s",
      "otherImages": [
        {"src": "https://m.media-amazon.com/images/I/61n1mhdLRzL._AC_UL1000_.jpg"},
        {"src": "https://m.media-amazon.com/images/I/71Qy5USWggL._AC_UL1500_.jpg"},
        {"src": "https://m.media-amazon.com/images/I/61v9uUG9UzL._AC_UL1000_.jpg"},
        {"src": "https://m.media-amazon.com/images/I/71x05PvlZwL._AC_UL1500_.jpg"}
      ],
      "Place": "Library",
      "date": "2024-06-21",
      "time": "09:45"
    },
    {
      "title": "Black Laptop Bag",
      "status": "Lost",
      "description": "A black laptop bag containing a MacBook Pro.",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3rcS3xFC3-pMacVH4xWpoQU9o-26Ha9qxWQ&s",
      "otherImages": [
        {"src": "https://m.media-amazon.com/images/I/81uZxfouUOL._AC_SL1500_.jpg"},
        {"src": "https://m.media-amazon.com/images/I/71-1zJblqgL._AC_SL1500_.jpg"},
        {"src": "https://m.media-amazon.com/images/I/81H7z9-0GxL._AC_SL1500_.jpg"},
        {"src": "https://m.media-amazon.com/images/I/81ANQtrV2eL._AC_SL1500_.jpg"}
      ],
      "Place": "Lecture Hall 2",
      "date": "2024-06-20",
      "time": "15:30"
    },
    {
      "title": "Water Bottle",
      "status": "Found",
      "description": "A blue water bottle with a motivational quote.",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMBbvn8NSt5AcK_euTVtMAi073ub0Uerux1A&s",
      "otherImages": [
        {"src": "https://m.media-amazon.com/images/I/81tCWiSxTBL._AC_SL1500_.jpg"},
        {"src": "https://m.media-amazon.com/images/I/71xPyb0QsJL._AC_SL1500_.jpg"},
        {"src": "https://m.media-amazon.com/images/I/71HnA1lFKSL._AC_SL1500_.jpg"},
        {"src": "https://m.media-amazon.com/images/I/71qbyGRSgyL._AC_SL1500_.jpg"}
      ],
      "Place": "Gym",
      "date": "2024-06-19",
      "time": "08:00"
    },
    {
      "title": "Set of Keys",
      "status": "Lost",
      "description": "A set of keys with a Superman keychain.",
      "image": "https://www.shutterstock.com/image-photo/building-manager-key-set-onsite-260nw-1644336916.jpg",
      "otherImages": [
        {"src": "https://m.media-amazon.com/images/I/71y12MbaFzL._AC_UL1500_.jpg"},
        {"src": "https://m.media-amazon.com/images/I/71y12MbaFzL._AC_UL1500_.jpg"},
        {"src": "https://m.media-amazon.com/images/I/71y12MbaFzL._AC_UL1500_.jpg"},
        {"src": "https://m.media-amazon.com/images/I/71y12MbaFzL._AC_UL1500_.jpg"}
      ],
      "Place": "Parking Lot",
      "date": "2024-06-18",
      "time": "17:25"
    },
    {
      "title": "Sunglasses",
      "status": "Found",
      "description": "A pair of Ray-Ban sunglasses.",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmmuHsqRpV0ttZdOrbvMsNQYDe9LQ4xQOiHw&s",
      "otherImages": [
        {"src": "https://m.media-amazon.com/images/I/61y-J3jeK1L._AC_SL1500_.jpg"},
        {"src": "https://m.media-amazon.com/images/I/61y-J3jeK1L._AC_SL1500_.jpg"},
        {"src": "https://m.media-amazon.com/images/I/61y-J3jeK1L._AC_SL1500_.jpg"},
        {"src": "https://m.media-amazon.com/images/I/61y-J3jeK1L._AC_SL1500_.jpg"}
      ],
      "Place": "Swimming Pool",
      "date": "2024-06-17",
      "time": "13:40"
    },
    {
      "title": "Notebook",
      "status": "Lost",
      "description": "A spiral notebook with physics notes.",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF4Ei1FQyePSGj7JiAvoGaXNEkh5smQvUeCw&s",
      "otherImages": [
        {"src": "https://m.media-amazon.com/images/I/71VdgUb0q6L._AC_UL1500_.jpg"},
        {"src": "https://m.media-amazon.com/images/I/71VdgUb0q6L._AC_UL1500_.jpg"},
        {"src": "https://m.media-amazon.com/images/I/71VdgUb0q6L._AC_UL1500_.jpg"},
        {"src": "https://m.media-amazon.com/images/I/71VdgUb0q6L._AC_UL1500_.jpg"}
      ],
      "Place": "Library",
      "date": "2024-06-16",
      "time": "11:00"
    },
    {
      "title": "Calculator",
      "status": "Found",
      "description": "A scientific calculator, black in color.",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBEJ5T8UzMsi-ZAlAnhx3o8hgX-8Zb014_Uw&s",
      "otherImages": [
        {"src": "https://m.media-amazon.com/images/I/71-1zJblqgL._AC_UL1500_.jpg"},
        {"src": "https://m.media-amazon.com/images/I/71-1zJblqgL._AC_UL1500_.jpg"},
        {"src": "https://m.media-amazon.com/images/I/71-1zJblqgL._AC_UL1500_.jpg"},
        {"src": "https://m.media-amazon.com/images/I/71-1zJblqgL._AC_UL1500_.jpg"}
      ],
      "Place": "Cafeteria",
      "date": "2024-06-15",
      "time": "10:10"
    },
    {
      "title": "Earbuds",
      "status": "Lost",
      "description": "A pair of white Apple AirPods.",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY72HhYYcmAlgc3PJ8v4iY7w8QZgj8PwJgQg&s",
      "otherImages": [
        {"src": "https://m.media-amazon.com/images/I/61FYqaY2CKL._AC_UL1500_.jpg"},
        {"src": "https://m.media-amazon.com/images/I/61FYqaY2CKL._AC_UL1500_.jpg"},
        {"src": "https://m.media-amazon.com/images/I/61FYqaY2CKL._AC_UL1500_.jpg"},
        {"src": "https://m.media-amazon.com/images/I/61FYqaY2CKL._AC_UL1500_.jpg"}
      ],
      "Place": "Gym",
      "date": "2024-06-14",
      "time": "18:25"
    },
    {
      "title": "Textbook",
      "status": "Found",
      "description": "A chemistry textbook, 5th edition.",
      "image": "https://www.clankart.com/user-uploads/advert/Dr_OP_Tandon_textbook_of_organic_chemistry_for_jeemain__advanced16619383201.jpg",
      "otherImages": [
        {"src": "https://m.media-amazon.com/images/I/61bFnNYTUkL._AC_UL1500_.jpg"},
        {"src": "https://m.media-amazon.com/images/I/61bFnNYTUkL._AC_UL1500_.jpg"},
        {"src": "https://m.media-amazon.com/images/I/61bFnNYTUkL._AC_UL1500_.jpg"},
        {"src": "https://m.media-amazon.com/images/I/61bFnNYTUkL._AC_UL1500_.jpg"}
      ],
      "Place": "Lecture Hall 3",
      "date": "2024-06-13",
      "time": "14:20"
    },
    {
      "title": "Watch",
      "status": "Lost",
      "description": "A silver wristwatch with a black dial.",
      "image": "https://images.unsplash.com/photo-1542546060-82c7fc8d044b",
      "otherImages": [
        {"src": "https://m.media-amazon.com/images/I/71-1zJblqgL._AC_UL1500_.jpg"},
        {"src": "https://m.media-amazon.com/images/I/71-1zJblqgL._AC_UL1500_.jpg"},
        {"src": "https://m.media-amazon.com/images/I/71-1zJblqgL._AC_UL1500_.jpg"},
        {"src": "https://m.media-amazon.com/images/I/71-1zJblqgL._AC_UL1500_.jpg"}
      ],
      "Place": "Gym",
      "date": "2024-06-12",
      "time": "07:45"
    },
    {
      "title": "Passport",
      "status": "Found",
      "description": "A blue passport with the name John Doe.",
      "image": "https://images.unsplash.com/photo-1512820790803-83ca1d14af12",
      "otherImages": [
        {"src": "https://m.media-amazon.com/images/I/71-1zJblqgL._AC_UL1500_.jpg"},
        {"src": "https://m.media-amazon.com/images/I/71-1zJblqgL._AC_UL1500_.jpg"},
        {"src": "https://m.media-amazon.com/images/I/71-1zJblqgL._AC_UL1500_.jpg"},
        {"src": "https://m.media-amazon.com/images/I/71-1zJblqgL._AC_UL1500_.jpg"}
      ],
      "Place": "Cafeteria",
      "date": "2024-06-11",
      "time": "16:00"
    },
    {
      "title": "Camera",
      "status": "Lost",
      "description": "A Canon DSLR camera, black.",
      "image": "https://images.unsplash.com/photo-1484723091739-30a097e8f929",
      "otherImages": [
        {"src": "https://m.media-amazon.com/images/I/71-1zJblqgL._AC_UL1500_.jpg"},
        {"src": "https://m.media-amazon.com/images/I/71-1zJblqgL._AC_UL1500_.jpg"},
        {"src": "https://m.media-amazon.com/images/I/71-1zJblqgL._AC_UL1500_.jpg"},
        {"src": "https://m.media-amazon.com/images/I/71-1zJblqgL._AC_UL1500_.jpg"}
      ],
      "Place": "Park",
      "date": "2024-06-10",
      "time": "12:45"
    },
    {
      "title": "Jacket",
      "status": "Found",
      "description": "A black leather jacket, size M.",
      "image": "https://images.unsplash.com/photo-1548625149-2a8555f7fc7c",
      "otherImages": [
        {"src": "https://m.media-amazon.com/images/I/71-1zJblqgL._AC_UL1500_.jpg"},
        {"src": "https://m.media-amazon.com/images/I/71-1zJblqgL._AC_UL1500_.jpg"},
        {"src": "https://m.media-amazon.com/images/I/71-1zJblqgL._AC_UL1500_.jpg"},
        {"src": "https://m.media-amazon.com/images/I/71-1zJblqgL._AC_UL1500_.jpg"}
      ],
      "Place": "Lecture Hall 1",
      "date": "2024-06-09",
      "time": "17:55"
    },
    {
      "title": "Gloves",
      "status": "Lost",
      "description": "A pair of black leather gloves.",
      "image": "https://images.unsplash.com/photo-1601987189053-9f993ec4d820",
      "otherImages": [
        {"src": "https://m.media-amazon.com/images/I/71-1zJblqgL._AC_UL1500_.jpg"},
        {"src": "https://m.media-amazon.com/images/I/71-1zJblqgL._AC_UL1500_.jpg"},
        {"src": "https://m.media-amazon.com/images/I/71-1zJblqgL._AC_UL1500_.jpg"},
        {"src": "https://m.media-amazon.com/images/I/71-1zJblqgL._AC_UL1500_.jpg"}
      ],
      "Place": "Parking Lot",
      "date": "2024-06-08",
      "time": "19:00"
    },
    {
      "title": "Headphones",
      "status": "Found",
      "description": "A pair of Bose noise-cancelling headphones.",
      "image": "https://images.unsplash.com/photo-1504386106331-3e4e71712b38",
      "otherImages": [
        {"src": "https://m.media-amazon.com/images/I/71-1zJblqgL._AC_UL1500_.jpg"},
        {"src": "https://m.media-amazon.com/images/I/71-1zJblqgL._AC_UL1500_.jpg"},
        {"src": "https://m.media-amazon.com/images/I/71-1zJblqgL._AC_UL1500_.jpg"},
        {"src": "https://m.media-amazon.com/images/I/71-1zJblqgL._AC_UL1500_.jpg"}
      ],
      "Place": "Library",
      "date": "2024-06-07",
      "time": "13:20"
    }
  ];  

 /* This is the backdrop logic */
 selectedItem: object | null = null;
 isFormOpen = false;

  selectItem(Item: object) {
    this.selectedItem = Item;
  }
  openForm() {
    this.isFormOpen = true;
  }

  closeForm() {
    this.isFormOpen = false;
  }

  showContactDetails(item: any, event: Event) {
    event.stopPropagation(); // Prevents click event propagation to parent elements
    console.log('Contact details clicked:', item);
  }

  closeDetails() {
    this.selectedItem = null;
  }

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

