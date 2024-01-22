class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  atacar() {
    console.log(`${this.tipo} atacou usando ${this.tipo === "mago" ? "magia" : this.tipo === "guerreiro" ? "espada" : this.tipo === "monge" ? "artes marciais" : "shuriken"}`);
  }
}

const heroi1 = new Heroi("Darth Vader", 50, "mago");
heroi1.atacar(); // "mago atacou usando magia"

const heroi2 = new Heroi("Luke Skywalker", 20, "guerreiro");
heroi2.atacar(); // "guerreiro atacou usando espada"

const heroi3 = new Heroi("Obi-Wan Kenobi", 60, "monge");
heroi3.atacar(); // "monge atacou usando artes marciais"

const heroi4 = new Heroi("Yoda", 900, "ninja");
heroi4.atacar(); // "ninja atacou usando shuriken"
