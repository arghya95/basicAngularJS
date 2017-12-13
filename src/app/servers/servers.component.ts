import { Component, OnInit } from '@angular/core';
import { log } from 'util';


@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  serverId : number = 10;
  serverStatus: string = 'offline';
  allowNewServer = false;
  onClickStatus = 'No Server is Created....';
  ServerName = 'Test Server';
  serverCreated = false;
  servers = ['Test Server','Test Server 2'];
  //UserName = '';
  display = false;
  log = [];
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    },2000)
   };

  ngOnInit() {
  };
  onClickProperty(){
    this.serverCreated = true;
    this.servers.push(this.ServerName);
    this.onClickStatus = 'Server is Created...'+this.ServerName;
  };
  onUpdateServerName(event: Event){
    this.ServerName = (<HTMLInputElement>event.target).value;
  };
 /*
 //Assignment 2
  resetButton(){
    this.UserName = ''; 
  }
  */
  onClickToggle() {
    this.display = !this.display;
    this.log.push(new Date()) 
  }

}
