import { Restaurant } from './restaurant.model';
import { Pipe, PipeTransform } from 'angular2/core';

@Pipe({
  name: 'specialty',
  pure: false,
})

export class SpecialtyPipe implements PipeTransform {
  transform(input: Restaurant[], args) {
    var output: Restaurant[] = [];
    var specialty = args[0];
    if (specialty !== 'all') {
      for (var i=0; i < input.length; i++){
        if (input[i].specialty === specialty){
          output.push(input[i]);
          }
        }
      return output;
    } else {
      return input;
    }
  }
}
