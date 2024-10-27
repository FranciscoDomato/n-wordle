/*import { seedRandom } from './seedRandom';
import { WORDLES, NUM_WORDLES } from './words';

export function generateWordlist(length: number = 10) {
  const seed = seedRandom();
  const generator = 163; // n is a cyclic group so I can put any prime as a generator (maybe?)

  const wordlist = [];

  for (let i = 0; i < length; i++) {
    wordlist.push(WORDLES[(seed + generator * i) % NUM_WORDLES]);
  }

  return wordlist;
}*/

import { WORDLES, NUM_WORDLES } from './words';

export function generateWordlist(length: number = 10) {
  const shuffled = [...WORDLES]; // Copiamos el array original

  for (let i = NUM_WORDLES - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]; // Intercambiamos
  }

  return shuffled.slice(0, length); // Retornamos la cantidad deseada
}