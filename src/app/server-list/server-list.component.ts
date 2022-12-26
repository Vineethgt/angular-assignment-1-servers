import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-server-list',
  templateUrl: './server-list.component.html',
  styleUrls: ['./server-list.component.css']
})
export class ServerListComponent {
  @Input() servers:{name:string, status:string}[]=[]

  deleteServer(i:number){
    console.log(this.servers[i])
    this.servers.splice(i,1)
  }

  editServer(){
    
  }
}
