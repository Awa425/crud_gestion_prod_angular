import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produit } from '../models/produit.model';
import { ProduitService } from '../services/produit.service';
import { formatDate } from '@angular/common';
import { Categorie } from '../models/categorie.model';

@Component({
  selector: 'app-update-produit',
  templateUrl: './update-produit.component.html',
  styleUrls: ['./update-produit.component.css'],
})
export class UpdateProduitComponent implements OnInit {
  curentProduit = new Produit();
  categories!: Categorie[];
  updatedCatId!: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private produitService: ProduitService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.categories = this.produitService.listeCategories();

    this.curentProduit = this.produitService.getProduit(
      Number(this.activatedRoute.snapshot.params['id'])
    );
    this.updatedCatId = this.curentProduit.categorie.idCat;
  }

  updateProduit(prod: Produit) {
    this.curentProduit.categorie = this.produitService.detailCategorie(
      this.updatedCatId
    );
    this.produitService.updateProduit(this.curentProduit);
    this.router.navigate(['produits']);
  }

  formatDate(date: Date): string {
    return formatDate(date, 'yyyy-MM-dd', 'en-US');
  }
}
