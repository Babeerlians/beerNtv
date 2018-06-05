import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TvproviderProvider } from '../../providers/tvprovider/tvprovider';
import { ChannelsPage } from '../channels/channels';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  countries:any;
  channels:any;
  constructor(public navCtrl: NavController, private tvprovider: TvproviderProvider) {}

  ngOnInit() {
    this.tvprovider.getCountries().subscribe((res:any) => {
      this.countries = res;
    })
  }
  getChannels(channels:any){
    this.navCtrl.push(ChannelsPage, {channels: channels});
  }
}
