import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './COMPONENTS/inicio/inicio.component';
import { EditarComponent } from './COMPONENTS/editar/editar.component';
import { AgregarComponent } from './COMPONENTS/agregar/agregar.component';
import { NavbarComponent } from './COMPONENTS/navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { TagsComponent } from './COMPONENTS/tags/tags.component';
import { AddTagComponent } from './COMPONENTS/tags/add-tag/add-tag.component';
import { EditTagComponent } from './COMPONENTS/tags/edit-tag/edit-tag.component';
import { WordsTagComponent } from './COMPONENTS/tags/words-tag/words-tag.component';
import { XinesCatalaComponent } from './COMPONENTS/jocs/xines-catala/xines-catala.component';
import { JocsComponent } from './COMPONENTS/jocs/jocs.component';
import { SearchFilterPipe } from './search-filter.pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { CatalaXinesComponent } from './COMPONENTS/jocs/catala-xines/catala-xines.component';
import { TingliXinesComponent } from './COMPONENTS/jocs/tingli-xines/tingli-xines.component';
import { TingliCatalaComponent } from './COMPONENTS/jocs/tingli-catala/tingli-catala.component';
import { MatchXinesCatalaComponent } from './COMPONENTS/jocs/match-xines-catala/match-xines-catala.component';
import { XinesSpeechComponent } from './COMPONENTS/jocs/xines-speech/xines-speech.component';
import { HomeComponent } from './COMPONENTS/home/home.component';
import { ParaulaComponent } from './COMPONENTS/paraula/paraula.component';
import { HanziPinyinComponent } from './COMPONENTS/jocs/hanzi-pinyin/hanzi-pinyin.component';
import { TargetaComponent } from './COMPONENTS/paraula/targeta/targeta.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FrasesComponent } from './COMPONENTS/frases/frases.component';
import { MatchiplistComponent } from './COMPONENTS/matchiplist/matchiplist.component';
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    EditarComponent,
    AgregarComponent,
    NavbarComponent,
    TagsComponent,
    AddTagComponent,
    EditTagComponent,
    WordsTagComponent,
    XinesCatalaComponent,
    JocsComponent,
    SearchFilterPipe,
    CatalaXinesComponent,
    TingliXinesComponent,
    TingliCatalaComponent,
    MatchXinesCatalaComponent,
    XinesSpeechComponent,
    HomeComponent,
    ParaulaComponent,
    HanziPinyinComponent,
    TargetaComponent,
    FrasesComponent,
    MatchiplistComponent
      ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatChipsModule,
    MatIconModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
