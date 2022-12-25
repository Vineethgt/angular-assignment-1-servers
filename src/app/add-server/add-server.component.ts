import { Component, Output, EventEmitter } from '@angular/core';
import { AlertsService } from '../utility/alerts.service';

@Component({
  selector: 'app-add-server',
  templateUrl: './add-server.component.html',
  styleUrls: ['./add-server.component.css']
})
export class AddServerComponent {
  
  @Output() serverEvent = new EventEmitter();

  constructor(private alertsService: AlertsService){}

  addServer(serverName:string,serverStatus:string){
    if(!serverName || !serverStatus){
      this.alertsService.showAlert("Server Name and Server status are Mandatory","Empty Fields")
    }else{
      this.serverEvent.emit({
        name:serverName,
        status:serverStatus
      })
    }
    
  }

}
