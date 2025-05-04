import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.scss']
})
export class DashBoardComponent implements OnInit {
  lsLeftMenuArr: any[] = [];
  lsbottomMenuArr: any[] = [];
  lstDate = new Date();
  lsProfileData: any[] = [];
  constructor() {

  }

  ngOnInit() {
    this.lsLeftMenuArr = [
      {
        name: "Dashboard",
        icon: "fa-solid fa-table-columns"
      },
      {
        name: "Available Units",
        icon: "fa-regular fa-building"
      },
      {
        name: "Invoices",
        icon: "fa fa-shield"
      },
      {
        name: "Projects",
        icon: "fa-regular fa-clock"
      },
      {
        name: "Social Media",
        icon: "fa-solid fa-share-nodes"
      },
      {
        name: "Integrations",
        icon: "fa-solid fa-table"
      },
      {
        name: "Documentation",
        icon: "fa-solid fa-file"
      }



    ];
    this.lsbottomMenuArr = [
      {
        name: "Settings",
        icon: "fa-solid fa-gear"
      },
      {
        name: "Help Center",
        icon: "fa-solid fa-circle-info"
      },
    ];
    this.lsProfileData = [
      {
        img: '../../assets/profile1.png',
        name: 'Robert Whistable',
        role: 'Product Manger',
        projects: 24,
        task: 132,
        insights: 31
      },
      {
        img: '../../assets/Profile3.jpg',
        name: 'Francois Boateng',
        role: 'Product Manger',
        projects: 24,
        task: 132,
        insights: 31
      },
      {
        img: '../../assets/profile5.jpg',
        name: 'Elliot Bradbury',
        role: 'Product Manger',
        projects: 24,
        task: 132,
        insights: 31
      },
      {
        img: '../../assets/profile6.jpg',
        name: 'Carlos Heroa',
        role: 'Product Manger',
        projects: 24,
        task: 132,
        insights: 31
      },
      {
        img: '../../assets/profile7.jpg',
        name: 'Paul',
        role: 'Product Manger',
        projects: 24,
        task: 132,
        insights: 31
      },
      {
        img: '../../assets/profile2.jpg',
        name: 'Shophie',
        role: 'Product Manger',
        projects: 24,
        task: 132,
        insights: 31
      },
      {
        img: '../../assets/profile4.jpg',
        name: 'Emili',
        role: 'Product Manger',
        projects: 24,
        task: 132,
        insights: 31
      },
      {
        img: '../../assets/profile-pic.jpg',
        name: 'Louise',
        role: 'Product Manger',
        projects: 24,
        task: 132,
        insights: 31
      }
  

    ];
  }
}
