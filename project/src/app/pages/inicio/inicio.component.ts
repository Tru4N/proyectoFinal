import { Component, OnInit } from '@angular/core';
import { ProductosInicio } from '../../models/productosinicio';
import { ProductosInitService } from '../../services/productos-init.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  standalone: false,
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']  // Solo su CSS propio
})
export class InicioComponent implements OnInit {
  productosInicio: ProductosInicio[] = [];

  constructor(private _productosInitService: ProductosInitService, private router: Router) {}

  ngOnInit(): void {
    this.productosInicio = this._productosInitService.getProductos();
  }

  verProducto(idx: number) {
    this.router.navigate(['producto', idx]);
  }
}
