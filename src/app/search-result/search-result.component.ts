import { Component, OnInit } from '@angular/core';
import { AstronaughtDataService } from '../astronaught-data.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {
  results : any;
  searchQuery : any;
  routeSub : any;
  searchSub : any;
  filtered : any;
  constructor(private asDataService: AstronaughtDataService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.routeSub = this.route.queryParams.subscribe(params =>{
      this.searchSub = this.asDataService.searchAstronauts(params["q"]).subscribe(astroData => 
        //maybe I should call the getallAstro function instead and just straight up filter the data instead of trying to do ?name/searchstring api call
        {
          console.log("Astrodata returned from searchAstro: ", astroData);
          const regex = new RegExp(`${params}[ ]+`, 'gi');
          //let regexp = new RegExp("`${params}`[ ]+", 'gi');
          console.log("params value: ", params);
          this.results = astroData.results;
          //console.log(typeof this.results);
           this.filtered = this.results.filter(astroPerson =>{
            console.log("AstroPerson:" , astroPerson);
            
            if(regex.test(astroPerson.name)){
              return astroPerson;
            } 
          });
          console.log("results value: ", this.results );
          console.log("Filtered is of type: ", typeof this.filtered);
          console.log("Filtered: ", this.filtered);
          /*   works but doesn't match only if you do first name, has to be full name. */
        });
        //each astronaught is inside results.results
    })
  }

}
