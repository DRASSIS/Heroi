class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;

        switch (this.tipo) {
            case 'Mago': ataque = 'Usou magia'; break;
            case 'guerrero': ataque = 'Usou espada'; break;
            case 'monge': ataque = 'Usou artes marciais'; break;
            case 'ninja': ataque = 'Usou shuriken'; break;
            default: ataque = 'atacou';
        }

        console.log(' O ${this. tipo} ${ataque} ');
    }

}

const Mago = new Heroi('Merlin' , '100', 'Mago');
const guerrero = new Heroi('Ragnar', '35', 'Guerrero');
const monge = new Heroi('Lee', '50', 'monge');
const ninja = new Heroi('Dave', '25', 'ninja'):

Mago.atacar();
guerrero.atacar();
monge.atacar();
ninja.atacar();