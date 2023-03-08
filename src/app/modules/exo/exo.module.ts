import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExoRoutingModule } from './exo-routing.module';
import { ReadAllComponent } from './crud/read-all/read-all.component';
import { ReadOneComponent } from './crud/read-one/read-one.component';
import { UpdateComponent } from './crud/update/update.component';
import { DeleteComponent } from './crud/delete/delete.component';
import { CreateComponent } from './crud/create/create.component';
import { ExoBannerComponent } from './exo-banner/exo-banner.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ArticleService } from 'src/app/shared/services/article/article.service';
import { PickachuResolver } from 'src/app/shared/resolver/pikachu.resolver';
import { SearchBarComponent } from './pokemon/search-bar/search-bar.component';
import { TypesPokemonComponent } from './pokemon/types-pokemon/types-pokemon.component';
import { StatsPokemonComponent } from './pokemon/stats-pokemon/stats-pokemon.component';
import { ReadPokemonComponent } from './pokemon/read-pokemon/read-pokemon.component';


@NgModule({
  declarations: [
    ReadAllComponent,
    ReadOneComponent,
    UpdateComponent,
    DeleteComponent,
    CreateComponent,
    ExoBannerComponent,
    SearchBarComponent,
    TypesPokemonComponent,
    StatsPokemonComponent,
    ReadPokemonComponent,
  ],
  imports: [
    CommonModule,
    ExoRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],

  providers : [ArticleService]
})
export class ExoModule { }
