import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ChannelPage } from '../channel/channel';

@Component({
  selector: 'page-channels',
  templateUrl: 'channels.html',
})
export class ChannelsPage {
  channels=[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.channels = this.navParams.data.channels;
  }
  getChannel(id:number){
    this.navCtrl.push(ChannelPage, { id: id });
  }
}
