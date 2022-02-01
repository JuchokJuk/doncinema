import { ElementRef, Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class MenuService {
    blocks:Block[] = [];

    addBlock(block:Block){
        this.blocks.push(block);
        this.blocks.sort((a, b) => (a.id > b.id) ? 1 : -1)
    }
}
interface Block{
    id:number;
    short_name_for_menu:string;
    element: ElementRef;
}