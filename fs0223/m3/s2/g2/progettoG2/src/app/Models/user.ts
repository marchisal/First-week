export class User {
  nome: string;
  cognome: string;
  favSport: string

  constructor(nome:string, cognome:string, favSport: string) {
    this.nome = nome;
    this.cognome = cognome;
    this.favSport = favSport;
  }
}
