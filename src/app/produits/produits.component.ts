import { Component, OnInit } from '@angular/core';
import { Produit } from '../models/produit.model';
import { ProduitService } from '../services/produit.service';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css'],
})
export class ProduitsComponent implements OnInit {
  produits: Produit[];

  constructor(private produitService: ProduitService) {
    this.produits = produitService.listProduit();
  }

  ngOnInit(): void {}

  deleteProduit(prod: Produit) {
    let conf = confirm('Etes-vous sure de vouloir supprimer cet produit ?');
    if (conf) {
      this.produitService.supprimerProduit(prod);
    }
  }

 
}
