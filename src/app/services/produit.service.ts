import { Injectable } from '@angular/core';
import { Produit } from '../models/produit.model';
import { Categorie } from '../models/categorie.model';

@Injectable({
  providedIn: 'root',
})
export class ProduitService {
  produits: Produit[];
  produit!: Produit;

  categories: Categorie[];

  constructor() {
    this.produits = [
      {
        idProduit: 1,
        nomProduit: 'PC Asus',
        prixProduit: 3000.6,
        categorie: { idCat: 1, nomCat: 'categorie 1' },
        dateCreation: new Date('01/14/2011'),
      },
      {
        idProduit: 2,
        nomProduit: 'PC Dell',
        prixProduit: 3000.6,
        categorie: { idCat: 1, nomCat: 'categorie 1' },

        dateCreation: new Date('01/14/2011'),
      },
      {
        idProduit: 3,
        nomProduit: 'PC HP',
        prixProduit: 3000.6,
        categorie: { idCat: 3, nomCat: 'categorie 3' },

        dateCreation: new Date('01/14/2011'),
      },
      {
        idProduit: 4,
        nomProduit: 'Tablette',
        prixProduit: 3000.6,
        categorie: { idCat: 2, nomCat: 'categorie 2' },

        dateCreation: new Date('01/14/2011'),
      },
      {
        idProduit: 5,
        nomProduit: 'PC Lenovo',
        prixProduit: 3000.6,
        categorie: { idCat: 3, nomCat: 'categorie 3' },

        dateCreation: new Date('01/14/2011'),
      },
    ];
    this.categories = [
      { idCat: 1, nomCat: 'categorie 1' },
      { idCat: 2, nomCat: 'categorie 2' },
      { idCat: 3, nomCat: 'categorie 3' },
    ];
  }

  listProduit(): Produit[] {
    return this.produits;
  }

  addProduit(prod: Produit) {
    this.produits.push(prod);
  }

  supprimerProduit(prod: Produit) {
    const index = this.produits.indexOf(prod, 0);
    if (index > -1) {
      this.produits.splice(index, 1);
    }
  }

  getProduit(id: number): Produit {
    this.produit = this.produits.find((p) => p.idProduit === id)!;
    return this.produit;
  }

  trierProduits() {
    this.produits = this.produits.sort((n1, n2) => {
      if (n1.idProduit > n2.idProduit) {
        return 1;
      }
      if (n1.idProduit < n2.idProduit) {
        return -1;
      }
      return 0;
    });
  }
  updateProduit(p: Produit) {
    // console.log(p);
    this.supprimerProduit(p);
    this.addProduit(p);
    this.trierProduits();
  }

  listeCategories(): Categorie[] {
    return this.categories;
  }

  detailCategorie(id: number): Categorie {
    return this.categories.find((cat) => cat.idCat == id)!;
  }
}
