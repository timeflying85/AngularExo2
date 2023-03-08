import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/shared/guards/auth/auth.guard';
import { PokemonResolver } from 'src/app/shared/pokemon/pokemon.resolver';
import { PokeResolver } from 'src/app/shared/services/poke/poke.service';
import { CreateComponent } from './crud/create/create.component';
import { DeleteComponent } from './crud/delete/delete.component';
import { ReadAllComponent } from './crud/read-all/read-all.component';
import { ReadOneComponent } from './crud/read-one/read-one.component';
import { UpdateComponent } from './crud/update/update.component';
import { ExoBannerComponent } from './exo-banner/exo-banner.component';
import { ReadPokemonComponent } from './pokemon/read-pokemon/read-pokemon.component';
import { SearchBarComponent } from './pokemon/search-bar/search-bar.component';

const routes: Routes = [
  {path: '', component : ExoBannerComponent, children : [
    {path: 'all', canActivate: [AuthGuard], component: ReadAllComponent},
    {path: 'one/:id', component: ReadOneComponent},
    {path: 'delete/:id', component: DeleteComponent},
    {path: 'update/:id', component: UpdateComponent},
    {path: 'create', component: CreateComponent},
    {path: 'pokemon', component: SearchBarComponent, children : [
      {path: ':id', resolve: {pokemon : PokeResolver}, component: ReadPokemonComponent}
    ]
  }]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExoRoutingModule { }
