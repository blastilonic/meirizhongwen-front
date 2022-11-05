import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddWordComponent } from './components/words/add-word/add-word.component';
import { EditWordComponent } from './components/words/edit-word/edit-word.component';
import { HomeComponent } from './components/home/home.component';
import { WordListComponent } from './components/words/list-words/word-list.component';
import { CatalaXinesComponent } from './components/games/catala-xines/catala-xines.component';
import { HanziPinyinComponent } from './components/games/hanzi-pinyin/hanzi-pinyin.component';
import { GamesComponent } from './components/games/games.component';
import { TingliCatalaComponent } from './components/games/tingli-catala/tingli-catala.component';
import { TingliXinesComponent } from './components/games/tingli-xines/tingli-xines.component';
import { XinesCatalaComponent } from './components/games/xines-catala/xines-catala.component';
import { XinesSpeechComponent } from './components/games/xines-speech/xines-speech.component';
import { WordComponent } from './components/words/word/word.component';
import { AddTagComponent } from './components/tags/add-tag/add-tag.component';
import { EditTagComponent } from './components/tags/edit-tag/edit-tag.component';
import { TagsComponent } from './components/tags/tags.component';
import { WordsTagComponent } from './components/tags/words-tag/words-tag.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'word/list', component:WordListComponent},
  {path:'word/edit/:id', component: EditWordComponent},
  {path:'word/add', component:AddWordComponent},
  {path:'word/:id', component:WordComponent},
  {path:'tag/list', component:TagsComponent},
  {path:'tag/edit/:id', component:EditTagComponent},
  {path:'tag/add', component:AddTagComponent},
  {path:'tag/words/:id', component:WordsTagComponent},
  {path:'games', component:GamesComponent},
  {path:'games/xinescatala/:id', component:XinesCatalaComponent},
  {path:'games/catalaxines/:id', component:CatalaXinesComponent},
  {path:'games/tinglicatala/:id', component:TingliCatalaComponent},
  {path:'games/tinglixines/:id', component:TingliXinesComponent},
  {path:'games/xinesspeech/:id', component:XinesSpeechComponent},
  {path:'games/hanzipinyin/:id', component:HanziPinyinComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
