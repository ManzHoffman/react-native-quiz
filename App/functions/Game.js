class Game {

  // On renvoie un nombre aléatoire entre une valeur min (incluse)
  // et une valeur max (exclue)
  getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }

}

export default Game;