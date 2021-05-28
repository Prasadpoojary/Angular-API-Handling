import { Component,OnInit} from '@angular/core';
import { faEnvelope,faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';
import { HandleAPIService } from './services/handle-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'API-Request';
  user:any;
  faEnvelope=faEnvelope
  faMapMarkedAlt=faMapMarkedAlt
  constructor(private apiService:HandleAPIService)
  {

  }
  ngOnInit(): void 
  {
    this.apiService.getResponse().subscribe(
      (respUser:any)=>
      {
        console.log("dodooo");
        this.user=respUser.results[0];
        console.log(this.user);
      },
      (err)=>
      {
        console.log("Oops..!");
      }
    )
  }
  
  

}
