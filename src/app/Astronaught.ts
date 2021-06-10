class Astronaught{
   "count" : number;
    "next" : string;
    "results": [
        {
            "id": number;// astronaught id
            "url": string;
            "name": string; //astronaught name
            "status":{
                "id" : number;
                "name": string;

            },
            "type":{
                "id": number;
                "name": string;
            },
            //rest of the data
            "date_of_birth": string; // need to be converted to "date" object as the API says string($date) not string.
            "date_of_death": string;
            "nationality": string;
            "bio": string; // biography of the astronaught
            "twitter": string;//twitter link
            "instagram" : string;
            "wiki" : string;
            "agency": {
                "id" : number;
                "url" : string;
                "name" : string;
                "featured": boolean;
                "type" : string;
                "country_code":string;
                "abbrev": string;
                "description": string;
                "administrator": string;
                "founding_year": string;
                "launchers": string;
                "spacecraft" : string;
                "parent" : string;
                "image_url": string; // has $uri in the model I don't know what that means.

            }
            "profile_image" : string; //also has ($uri)
            "last_flight": string;
            "first_flight": string;

        }
    ]   
}