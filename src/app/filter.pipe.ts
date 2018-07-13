import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
 
  transform(topics: any, term: any): any {
    console.log("filter pipe is called");
    if(term === undefined) return topics;
    return topics.filter( function(topic){
      return topic.toLowerCase().includes(term.toLowerCase());
    })
  }

}
