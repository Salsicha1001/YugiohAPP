import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './Services/Authorization/AuthGuard.service';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule) },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule), canActivate:[AuthGuardService]
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule),canActivate:[AuthGuardService]
  },
  {
    path: 'search-cards',
    loadChildren: () => import('./search-cards/search-cards.module').then( m => m.SearchCardsPageModule),canActivate:[AuthGuardService]
  },
  {
    path: 'detais-cards',
    loadChildren: () => import('./detais-cards/detais-cards.module').then( m => m.DetaisCardsPageModule),canActivate:[AuthGuardService]
  },
  {
    path: 'list-cards-search',
    loadChildren: () => import('./list-cards-search/list-cards-search.module').then( m => m.ListCardsSearchPageModule)
  },
  {
    path: 'favorites',
    loadChildren: () => import('./favorites/favorites.module').then( m => m.FavoritesPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
