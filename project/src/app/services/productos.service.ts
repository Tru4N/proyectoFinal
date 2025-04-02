import { Injectable } from '@angular/core';
import { Productos } from '../models/productos';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor() { }

  private productosTienda: Productos[] = [
    
    {
      nombre: "DELL Precision 5870",
      img: "/assets/PcNumero1.jpg",
      caracteristicas: "- Procesador: Intel Xeon W9-3495X (56 núcleos)\n- RAM: 128GB DDR5 ECC\n- Almacenamiento: 2TB NVMe + 4TB HDD\n- GPU: NVIDIA RTX 6000 Ada 48GB\n- Garantía: 5 años",
      precio: 12500
    },
    {
      nombre: "ASUS ExpertCenter PN64",
      img: "/assets/PcNumero2.jpg",
      caracteristicas: "- Procesador: Intel Core i7-13700H\n- RAM: 32GB DDR5\n- Almacenamiento: 1TB PCIe 4.0 SSD\n- Conectividad: Thunderbolt 4, WiFi 6E\n- Dimensiones: 13 × 13 × 5 cm",
      precio: 899
    },
    {
      nombre: "Lenovo ThinkCentre M70a",
      img: "/assets/PcNumero3.jpg",
      caracteristicas: "- Procesador: Intel Core i5-1240P\n- RAM: 16GB DDR4\n- Almacenamiento: 512GB SSD\n- Pantalla: Full HD IPS táctil\n- Cámara: 5MP con privacidad física",
      precio: 750
    },
    {
      nombre: "MSI MEG Aegis Ti5",
      img: "/assets/PcNumero4.jpg",
      caracteristicas: "- Procesador: Intel Core i9-13900KS\n- RAM: 64GB DDR5 6000MHz\n- Almacenamiento: 4TB NVMe RAID 0\n- GPU: RTX 4090 24GB OC\n- Fuente: 1600W Platino",
      precio: 5499
    },
    {
      nombre: "HP Omen 45L",
      img: "/assets/PcNumero5.jpg",
      caracteristicas: "- Procesador: AMD Ryzen 9 7950X3D\n- RAM: 32GB DDR5 5200MHz\n- Almacenamiento: 2TB Gen5 SSD\n- GPU: RX 7900 XTX 24GB\n- Refrigeración: Criogenia directa",
      precio: 3899
    }
  ];



  getProductos(): Productos[] { return this.productosTienda; }



}
