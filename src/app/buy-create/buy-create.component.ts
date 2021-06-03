import { Component, OnInit } from '@angular/core';
import { Buy } from 'src/app/models/buy.model';
import { BuyService } from 'src/app/_services/buy.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-buy-create',
  templateUrl: './buy-create.component.html',
  styles: [
  ]
})
export class BuyCreateComponent implements OnInit {
  buy: Buy = {
    nombre: '',
    descripcion:'',
    cantidad:0,
    valor:0,
    total:0
  };

  constructor(
    private buyService: BuyService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  saveBuy(): void {
    this.buy.valor = 1;
    const data = {
      nombre: this.buy.nombre,
      descripcion: this.buy.descripcion,
      cantidad: this.buy.cantidad,
      valor: this.buy.valor,
      total: this.buy.valor,
      user_id:1
    };

    this.buyService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/buyList']);
        },
        error => {
          console.log(error.message);
        });
  }

}

