import jablkoImg from '../assets/Red_Apple.jpg'
import iphoneImg from '../assets/Iphone.jpg'
import skuterImg from '../assets/skuter.jpg'
import sluchawkiImg from '../assets/sluchawki.jpg'
import rowerImg from '../assets/rower.jpg'
import mataImg from '../assets/mata.jpg'
import gruszkaImg from '../assets/gruszka.jpg'
import laptopImg from '../assets/laptop.jpg'
import chlebImg from '../assets/chleb.jpg'
import lampaImg from '../assets/lampa.jpg'

export const produkty = [
  { id: 1, nazwa: 'jablko', cena: 3.99, staraCena: 6.99, zdjecie: jablkoImg, kategoria: 'eco' },
  { id: 2, nazwa: 'Iphone 18 pro', cena: 4500.00, staraCena: 5299.99, zdjecie: iphoneImg, kategoria: 'elektronika' },
  { id: 3, nazwa: 'skuter', cena: 10000.00, staraCena: 12199.99, zdjecie: skuterImg, kategoria: 'pojazdy' },
  { id: 4, nazwa: 'Rower górski', cena: 2499.00, staraCena: 2899.00, zdjecie: rowerImg, kategoria: 'pojazdy' },
  { id: 5, nazwa: 'Chleb', cena: 6.20, staraCena: 6.80, zdjecie: chlebImg, kategoria: 'eco' },
  { id: 6, nazwa: 'Słuchawki bezprzewodowe', cena: 349.00, staraCena: 429.00, zdjecie: sluchawkiImg, kategoria: 'elektronika' },
  { id: 7, nazwa: 'Lampa biurkowa LED', cena: 129.00, staraCena: 159.00, zdjecie: lampaImg, kategoria: 'dom' },
  { id: 8, nazwa: 'Mata do jogi i ćwiczeń', cena: 89.00, staraCena: 119.00, zdjecie: mataImg, kategoria: 'sport' },
  { id: 9, nazwa: 'gruszka', cena: 4.50, staraCena: 5.99, zdjecie: gruszkaImg, kategoria: 'eco' },
  { id: 10, nazwa: 'Laptop Pro 16', cena: 8999.00, staraCena: 9499.00, zdjecie: laptopImg, kategoria: 'elektronika' },
];
localStorage.setItem('koszyk', JSON.stringify(produkty));

const zapisane = JSON.parse(localStorage.getItem('koszyk'));
console.log(zapisane);
