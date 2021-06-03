import { Component, OnInit } from '@angular/core';
import { Buy } from 'src/app/models/buy.model';
import { BuyService } from 'src/app/_services/buy.service';

@Component({
  selector: 'app-buy-list',
  templateUrl: './buy-list.component.html',
  styles: [
  ]
})
export class BuyListComponent implements OnInit {
  purchases?: Buy[];
  currentBuy?: Buy;
  currentIndex = -1;
  nombre= '';
  constructor(private buyService: BuyService) { }

  ngOnInit(): void {
    this.LoadItem();
  }

  LoadItem(): void {
    this.buyService.read()
      .subscribe(
        data => {
          this.purchases = data;
          //console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.LoadItem();
    this.currentBuy = undefined;
    this.currentIndex = -1;
  }

  setActiveBuy(buy: Buy, index: number): void {
    this.currentBuy = buy;
    this.currentIndex = index;
  }

  deleteItem(id: number): void {
    this.buyService.delete(id)
      .subscribe(
        response => {
          console.log(response);
          this.refreshList();
        },
        error => {
          console.log(error);
        });
  }


}
