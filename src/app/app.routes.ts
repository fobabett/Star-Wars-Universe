import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { ItemDetailComponent } from './item-detail';
import { ListComponent } from './list';

const AppRoutes : Routes = [
  { path: '', component: ListComponent },
  { path: ':category/:id', component: ItemDetailComponent }
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(AppRoutes);