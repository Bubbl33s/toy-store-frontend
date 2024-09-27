import juguete1 from '../assets/Products/juguete1.png';
import juguete2 from '../assets/Products/juguete2.png';
import juguete3 from '../assets/Products/juguete3.png';
import juguete4 from '../assets/Products/juguete4.png';
import juguete5 from '../assets/Products/juguete5.png';
import juguete6 from '../assets/Products/juguete6.png';

import promo1 from '../assets/Promociones/promo1.png';
import promo2 from '../assets/Promociones/promo2.png';
import promo3 from '../assets/Promociones/promo3.png';
import promo4 from '../assets/Promociones/promo4.png';
import promo5 from '../assets/Promociones/promo5.png';
import promo6 from '../assets/Promociones/promo6.png';

export const dbProducts = [
  // Productos
  {
    id: '1',
    title: 'Producto A',
    price: 60.0,
    image: juguete1,
    descripcion: 'Juguete para varones',
    marca: 'Marca A',
    material: 'madera',
    category: ['Educativo'],
    promocion: 'false',
    descriptionPromo: '',
    categoryPromo: '',
  },
  {
    id: '2',
    title: 'Producto B',
    price: 55.0,
    image: juguete2,
    descripcion: 'Juguete educativo',
    marca: 'Marca B',
    material: 'madera',
    category: ['Educativo'],
    promocion: 'false',
    descriptionPromo: '',
    categoryPromo: '',
  },
  {
    id: '3',
    title: 'Producto C',
    price: 60.0,
    image: juguete3,
    descripcion: 'Juguete para construir',
    marca: 'Marca C',
    material: 'madera',
    category: ['Educativo'],
    promocion: 'false',
    descriptionPromo: '',
    categoryPromo: '',
  },
  {
    id: '4',
    title: 'Producto D',
    price: 55.0,
    image: juguete4,
    descripcion: 'Juguete interactivo',
    marca: 'Marca D',
    material: 'madera',
    category: ['Educativo'],
    promocion: 'false',
    descriptionPromo: '',
    categoryPromo: '',
  },
  {
    id: '5',
    title: 'Producto E',
    price: 60.0,
    image: juguete5,
    descripcion: 'Juguete clásico',
    marca: 'Marca E',
    material: 'madera',
    category: ['Educativo'],
    promocion: 'false',
    descriptionPromo: '',
    categoryPromo: '',
  },
  {
    id: '6',
    title: 'Producto F',
    price: 55.0,
    image: juguete6,
    descripcion: 'Juguete para jugar al aire libre',
    marca: 'Marca F',
    material: 'madera',
    category: ['Educativo'],
    promocion: 'false',
    descriptionPromo: '',
    categoryPromo: '',
  },
  {
    id: '7',
    title: 'Producto G',
    price: 20.0,
    image: promo1,
    descripcion: 'Juguete para su niño',
    marca: 'Marca F',
    material: 'madera',
    category: ['Educativo'],
    promocion: 'true',
    descriptionPromo: 'Compra 3 y paga 2',
    categoryPromo: '3x2',
  },
  {
    id: '8',
    title: 'Producto H',
    price: 20,
    image: promo2,
    descripcion: 'Juguete para su niño',
    marca: 'Marca H',
    material: 'madera',
    category: ['Acción'],
    promocion: 'true',
    descriptionPromo: '30% de descuento en juguetes seleccionados',
    categoryPromo: 'Navidad',
  },
  {
    id: '9',
    title: 'Producto I',
    price: 20,
    image: promo3,
    descripcion: 'Juguete para su niño',
    marca: 'Marca I',
    material: 'madera',
    category: ['Acción'],
    promocion: 'true',
    descriptionPromo: 'Compra 3 y paga 2 en productos de control y consola',
    categoryPromo: '3x2',
  },
  {
    id: '10',
    title: 'Producto J',
    price: 20,
    image: promo4,
    descripcion: 'Juguete para su niño',
    marca: 'Marca J',
    material: 'madera',
    category: ['Acción'],
    promocion: 'true',
    descriptionPromo: '30% de descuento en productos navideños',
    categoryPromo: 'Navidad',
  },
  {
    id: '11',
    title: 'Producto K',
    price: 20,
    image: promo5,
    descripcion: 'Juguete para su niño',
    marca: 'Marca K',
    material: 'madera',
    category: ['Acción'],
    promocion: 'true',
    descriptionPromo: 'Compra 3 y paga 2 en juguetes de control',
    categoryPromo: '3x2',
  },
  {
    id: '12',
    title: 'Producto L',
    price: 20,
    image: promo6,
    descripcion: 'Juguete para su niño',
    marca: 'Marca L',
    material: 'madera',
    category: ['Acción', 'Educativo'],
    promocion: 'true',
    descriptionPromo: '30% de descuento en toda la tienda',
    categoryPromo: 'Navidad',
  },
];