import { Component } from '@angular/core';
import { SelectItem } from 'primeng/components/common/api';

@Component({
    templateUrl: './selectbuttondemo.html'
})
// tslint:disable-next-line:component-class-suffix
export class SelectButtonDemo {

    types: SelectItem[];

    selectedType: string;

    selectedTypes: string[] = ['Apartment', 'Studio'];

    constructor() {
        this.types = [];
        this.types.push({ label: 'Apartment', value: 'Apartment' });
        this.types.push({ label: 'House', value: 'House' });
        this.types.push({ label: 'Studio', value: 'Studio' });
    }

    clear() {
        this.selectedType = null;
        this.selectedTypes = [];
    }
}
