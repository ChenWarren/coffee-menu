import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: 'searchFilter'})
export class FilterPipe implements PipeTransform {
    transform(items: any[], searchText: string) {
        if(!items) {
            return [];
        }
        if (!searchText) {
            return items;
        }
        searchText = searchText.toLowerCase();

        return items.filter(item => {
            return item.title.toLowerCase().includes(searchText);
        })
    }
}