import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { JsHomeComponent } from './js-home/js-home.component';
import { NgStickyDirective } from 'ng-sticky';
import { StickyModule } from 'ng2-sticky-kit';
import { AppRoutingModule } from './app-routing.module';
import { arrumaai }  from './views/arrumaai/arrumaai.component';

/* IMPORT DE COMPONENTES AQUI */
import { inicioPesquisa } from './views/arrumaai/inicioPesquisa/inicioPesquisa.component';
import { MenuComponent } from './views/arrumaai/menu/menu.component';
import { HomeComMapsComponent } from './views/arrumaai/home-com-maps/home-com-maps.component';
import { AgmCoreModule } from '@agm/core';


@NgModule({
  declarations: [
    AppComponent,
    JsHomeComponent,
    NgStickyDirective,
    arrumaai,
    inicioPesquisa,
    MenuComponent,
    HomeComMapsComponent,
   
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    StickyModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAkms3RJHhsBmv3ZhYh7DvUW7kIx5EP7Pw'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
