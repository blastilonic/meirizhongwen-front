import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WordListComponent } from './components/words/list-words/word-list.component';
import { EditWordComponent } from './components/words/edit-word/edit-word.component';
import { AddWordComponent } from './components/words/add-word/add-word.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { TagsComponent } from './components/tags/tags.component';
import { AddTagComponent } from './components/tags/add-tag/add-tag.component';
import { EditTagComponent } from './components/tags/edit-tag/edit-tag.component';
import { WordsTagComponent } from './components/tags/words-tag/words-tag.component';
import { XinesCatalaComponent } from './components/games/xines-catala/xines-catala.component';
import { GamesComponent } from './components/games/games.component';
import { SearchFilterPipe } from './search-filter.pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { CatalaXinesComponent } from './components/games/catala-xines/catala-xines.component';
import { TingliXinesComponent } from './components/games/tingli-xines/tingli-xines.component';
import { TingliCatalaComponent } from './components/games/tingli-catala/tingli-catala.component';
import { MatchXinesCatalaComponent } from './components/games/match-xines-catala/match-xines-catala.component';
import { XinesSpeechComponent } from './components/games/xines-speech/xines-speech.component';
import { HomeComponent } from './components/home/home.component';
import { WordComponent } from './components/words/word/word.component';
import { HanziPinyinComponent } from './components/games/hanzi-pinyin/hanzi-pinyin.component';
import { TargetaComponent } from './components/words/word/targeta/targeta.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FrasesComponent } from './components/shared/frases/frases.component';
import { MatchiplistComponent } from './components/shared/matchiplist/matchiplist.component';
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    WordListComponent,
    EditWordComponent,
    AddWordComponent,
    NavbarComponent,
    TagsComponent,
    AddTagComponent,
    EditTagComponent,
    WordsTagComponent,
    XinesCatalaComponent,
    GamesComponent,
    SearchFilterPipe,
    CatalaXinesComponent,
    TingliXinesComponent,
    TingliCatalaComponent,
    MatchXinesCatalaComponent,
    XinesSpeechComponent,
    HomeComponent,
    WordComponent,
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
