import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'searchFilter'
})

export class SearchFilterPipe implements PipeTransform {
    public transform(value, keys: any[], term: string) {
        debugger
        if (!term) return value;
         var column = []
        keys.filter(x => column.push(x.field));
        var colText = JSON.stringify(column);
        var columnData = colText.replace(/\[|\]|"/g, '')

        var filtered = (value || []).filter(
            // x => column.filter(
            //     data => x = data).some(
            //     key => x.hasOwnProperty(key) && new RegExp(term, 'gi').test(x[key])));
                x => columnData.split(',').some(key => x.hasOwnProperty(key) && new RegExp(term, 'gi').test(x[key])));
      // return filtered;
        if ( filtered && filtered.length > 0 ){
            return  filtered ;
         }else{
            return [undefined] ;
         }


    }
}


// import { Pipe, PipeTransform } from '@angular/core';
// @Pipe({
//   name: 'searchFilter'
// })
// export class SearchFilterPipe implements PipeTransform {
//   transform(items: any[], searchText: any[]): any[] {
//       debugger
//     if(!items) return [];
//     if(!searchText) return items;
// searchText = searchText.toLowerCase();
// return items.filter( it => {

//         console.log("got item array here",items);
//      return it.toLowerCase().includes(searchText);
//     });
//    }
// }