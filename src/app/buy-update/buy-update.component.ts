import { Component, OnInit } from '@angular/core';
import { Buy } from 'src/app/models/buy.model';
import { BuyService } from 'src/app/_services/buy.service';
import { ActivatedRoute ,Router } from '@angular/router';
@Component({
  selector: 'app-buy-update',
  templateUrl: './buy-update.component.html',
  styles: [
  ]
})
export class BuyUpdateComponent implements OnInit {
  buy: Buy = {
    nombre: '',
    descripcion:'',
    cantidad:0,
    valor:0,
    total:0
  };
  user_id = 0;
  constructor(
    private buyService: BuyService,
    private route : ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.getUpdate(this.route.snapshot.params.id);
  }
  /* Se realiza el update y se envia en un array los valors */ 
  updateBuy(): void {
    const data = {
      nombre: this.buy.nombre,
      descripcion: this.buy.descripcion,
      cantidad: this.buy.cantidad,
      valor: this.buy.valor,
      total: this.buy.cantidad,
      user_id:this.user_id
    };
    /* Se envia el id que va por url */ 
    this.buyService.update(this.route.snapshot.params.id,data)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/buyList']);
        },
        error => {
          console.log(error.message);
        });
  }

  /* Se envia por el metodo get el id para traer la info */ 
  getUpdate(id: number): void {
    this.buyService.get(id)
      .subscribe(
        data => {
          console.log(data);
          this.user_id = data.user.id; 
          this.buy = data;
        },
        error => {
          console.log(error);
        });
  }
  

}

