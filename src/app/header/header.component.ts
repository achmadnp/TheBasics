import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  collapsed = true;

  constructor(private dataStorageService: DataStorageService) {}

  onSaveData() {
    this.dataStorageService.storeRecipes();
  }

  onFetchRecipe() {
    this.dataStorageService.fetchRecipes().subscribe();
  }
}
