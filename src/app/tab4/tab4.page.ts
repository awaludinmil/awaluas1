import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {


  ngOnInit() {
  }
  // Variabel GetData for array
  public allData:any = [];
  constructor() {
     // Form Load GetData
     this.GetData();
  }

  handleRefresh(event:any) {
    setTimeout(() => {
      // Any calls to load data go here
      event.target.complete();
      this.GetData()
    }, 2000);
  };


  async GetData(){
    const res:any = await axios.get('https://praktikum-cpanel-unbin.com/api_Muhammad%20Awaludin%20Jamil/get_data_pendaftaran.php');
 

    console.log(res.data);
    this.allData = res.data.result;

}
}
