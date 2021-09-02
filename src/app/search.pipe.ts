import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name:'SearchPipe'
})
export class SearchPipe implements PipeTransform {
    transform(value: any, input: any): any { //value will be astronaughtArray.results (an array)
        if (input) {
            const fregex = new RegExp(`^${input}`, 'gi');
            const lregex = new RegExp(`${input}$`, 'gi');
            console.log("Pipe Value: ", value);
            return value.filter(val => fregex.test(val.name) || lregex.test(val.name));
            console.log("value after filter: ", value);
/*            value.filter(astronaught=>{
                console.log("Astronaught Inside Pipe: ", astronaught);

           }) */
         } else {
           return value;
         }
    }
}