import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarComponent } from './COMPONENTS/agregar/agregar.component';
import { EditarComponent } from './COMPONENTS/editar/editar.component';
import { HomeComponent } from './COMPONENTS/home/home.component';
import { InicioComponent } from './COMPONENTS/inicio/inicio.component';
import { CatalaXinesComponent } from './COMPONENTS/jocs/catala-xines/catala-xines.component';
import { HanziPinyinComponent } from './COMPONENTS/jocs/hanzi-pinyin/hanzi-pinyin.component';
import { JocsComponent } from './COMPONENTS/jocs/jocs.component';
import { TingliCatalaComponent } from './COMPONENTS/jocs/tingli-catala/tingli-catala.component';
import { TingliXinesComponent } from './COMPONENTS/jocs/tingli-xines/tingli-xines.component';
import { XinesCatalaComponent } from './COMPONENTS/jocs/xines-catala/xines-catala.component';
import { XinesSpeechComponent } from './COMPONENTS/jocs/xines-speech/xines-speech.component';
import { ParaulaComponent } from './COMPONENTS/paraula/paraula.component';
import { AddTagComponent } from './COMPONENTS/tags/add-tag/add-tag.component';
import { EditTagComponent } from './COMPONENTS/tags/edit-tag/edit-tag.component';
import { TagsComponent } from './COMPONENTS/tags/tags.component';
import { WordsTagComponent } from './COMPONENTS/tags/words-tag/words-tag.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'paraula/list', component:InicioComponent},
  {path:'paraula/edit/:id', component: EditarComponent},
  {path:'paraula/add', component:AgregarComponent},
  {path:'tag/list', component:TagsComponent},
  {path:'tag/edit/:id', component:EditTagComponent},
  {path:'tag/add', component:AddTagComponent},
  {path:'tag/words/:id', component:WordsTagComponent},
  {path:'jocs', component:JocsComponent},
  {path:'jocs/xinescatala/:id', component:XinesCatalaComponent},
  {path:'jocs/catalaxines/:id', component:CatalaXinesComponent},
  {path:'jocs/tinglicatala/:id', component:TingliCatalaComponent},
  {path:'jocs/tinglixines/:id', component:TingliXinesComponent},
  {path:'jocs/xinesspeech/:id', component:XinesSpeechComponent},
  {path:'paraula/:id', component:ParaulaComponent},
  {path:'jocs/hanzipinyin/:id', component:HanziPinyinComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
