import { Component, OnInit } from '@angular/core';
import { Productos } from '../../models/productos';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-productopc',
  standalone: false,
  
  templateUrl: './productopc.component.html',
  styleUrl: './productopc.component.css'
})
export class ProductopcComponent implements OnInit{
  productoPc: Productos[] = []

  constructor(private _productosService: ProductosService){

  }

  ngOnInit(): void {
    this.productoPc = this._productosService.getProductos();
  }

}
