import { Categorie } from './categorie.model';

export class Produit {
  idProduit!: number;
  nomProduit!: string;
  prixProduit!: number;
  categorie!: Categorie;
  dateCreation!: Date;
}
