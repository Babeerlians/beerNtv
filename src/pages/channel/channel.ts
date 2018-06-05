import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { TvproviderProvider } from '../../providers/tvprovider/tvprovider';
import { StreamingMedia, StreamingVideoOptions } from '@ionic-native/streaming-media';
/**
 * Generated class for the ChannelPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-channel',
  templateUrl: 'channel.html',
})
export class ChannelPage implements OnInit{
  streamUrl:any;
  load: any;
  error: boolean = false;
  constructor(public navCtrl: NavController, public navParams: NavParams, private tvprovider: TvproviderProvider, private streamingMedia: StreamingMedia, private loading: LoadingController) {
  }

  ngOnInit(){
    this.tvprovider.getChannel(this.navParams.data.id).subscribe((res:any) => {
      this.streamUrl = res;
      console.log(this.streamUrl);
      if(this.streamUrl.indexOf('http') == -1){
        this.streamUrl = 'Opss!, This channel is unaviable'
        this.error = true;
      }else {
        this.startVideo();
      }
      this.load.dismiss();
    })
    this.load = this.loading.create({ content: 'Loading...' });
    this.load.present();
  }
  startVideo(){
    let options: StreamingVideoOptions = {
      successCallback: () => { console.log('Video played') },
      errorCallback: (e) => {
        this.streamUrl = 'Opss!, This channel is unaviable'
        this.error = true;
       },
      orientation: 'landscape'
    };
    this.streamingMedia.playVideo(this.streamUrl, options);
  }


}
