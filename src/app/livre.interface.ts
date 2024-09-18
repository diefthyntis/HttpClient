export class Livre {
    id: number;
    titre: string;
    auteur: string;
  
    constructor(id: number, titre: string, auteur: string) {
      this.id = id;
      this.titre = titre;
      this.auteur = auteur;
    }
  }