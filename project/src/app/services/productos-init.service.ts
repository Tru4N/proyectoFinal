import { Injectable } from '@angular/core';
import { ProductosInicio } from '../models/productosinicio';

@Injectable({
  providedIn: 'root'
})
export class ProductosInitService {

  constructor() { }

  private productos: ProductosInicio[] = [
    {
      titulo: "Workstation Profesional Dell",
      nombre: "DELL Precision 5870",
      img: "/assets/PcNumero1.jpg",
      mensaje: "Potencia industrial para diseño CAD, renderizado",
      descripcion: "Equipo certificado para aplicaciones profesionales como AutoCAD, SolidWorks y Adobe Creative Cloud. Ideal para ingenieros, arquitectos y diseñadores.",
      caracteristicas: "- Procesador: Intel Xeon W9-3495X (56 núcleos)\n- RAM: 128GB DDR5 ECC\n- Almacenamiento: 2TB NVMe + 4TB HDD\n- GPU: NVIDIA RTX 6000 Ada 48GB\n- Garantía: 5 años",
      precio: 12500
    },
    {
      titulo: "Mini PC Ultracompacta",
      nombre: "ASUS ExpertCenter PN64",
      img: "/assets/PcNumero2.jpg",
      mensaje: "Potencia de escritorio en solo 1 litro de volumen.",
      descripcion: "Solución perfecta para espacios reducidos sin sacrificar rendimiento. Compatible con montaje VESA para ocultar detrás del monitor.",
      caracteristicas: "- Procesador: Intel Core i7-13700H\n- RAM: 32GB DDR5\n- Almacenamiento: 1TB PCIe 4.0 SSD\n- Conectividad: Thunderbolt 4, WiFi 6E\n- Dimensiones: 13 × 13 × 5 cm",
      precio: 899
    },
    {
      titulo: "All-in-One Educativo",
      nombre: "Lenovo ThinkCentre M70a",
      img: "/assets/PcNumero3.jpg",
      mensaje: "Solución completa para aulas y formación digital.",
      descripcion: "Pantalla táctil de 21.5\" con lápiz óptico incluido. Resistente a golpes y con filtro de luz azul para protección visual.",
      caracteristicas: "- Procesador: Intel Core i5-1240P\n- RAM: 16GB DDR4\n- Almacenamiento: 512GB SSD\n- Pantalla: Full HD IPS táctil\n- Cámara: 5MP con privacidad física",
      precio: 750
    },
    {
      titulo: "Gaming Beast Pro",
      nombre: "MSI MEG Aegis Ti5",
      img: "/assets/PcNumero4.jpg",
      mensaje: "Máximo rendimiento para gaming 4K/240Hz y streaming.",
      descripcion: "Diseño revolucionario con pantalla OLED táctil integrada para monitoreo del sistema. Refrigeración líquida silenciosa.",
      caracteristicas: "- Procesador: Intel Core i9-13900KS\n- RAM: 64GB DDR5 6000MHz\n- Almacenamiento: 4TB NVMe RAID 0\n- GPU: RTX 4090 24GB OC\n- Fuente: 1600W Platino",
      precio: 5499
    },
    {
      titulo: "Gaming Elite Edition",
      nombre: "HP Omen 45L",
      img: "/assets/PcNumero5.jpg",
      mensaje: "Edición especial con componentes premium y diseño único.",
      descripcion: "Gabinete de cristal templado con iluminación RGB sincronizada. Incluye periféricos gaming de edición limitada.",
      caracteristicas: "- Procesador: AMD Ryzen 9 7950X3D\n- RAM: 32GB DDR5 5200MHz\n- Almacenamiento: 2TB Gen5 SSD\n- GPU: RX 7900 XTX 24GB\n- Refrigeración: Criogenia directa",
      precio: 3899
    },
  ];

  getProductos(): ProductosInicio[] { return this.productos; }

  getProducto(id: number) : ProductosInicio {
    return this.productos[id];
  }

}
