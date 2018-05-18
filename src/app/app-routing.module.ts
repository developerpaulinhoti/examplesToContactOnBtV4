import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { arrumaai }  from './views/arrumaai/arrumaai.component';
import { inicioPesquisa }  from './views/arrumaai/inicioPesquisa/inicioPesquisa.component';
import { HomeComMapsComponent }  from './views/arrumaai/home-com-maps/home-com-maps.component';


const routes:Routes = [
    { path: '', redirectTo: 'arrumaai', pathMatch: 'full' },
    { path: 'arrumaai', component: arrumaai },
    { path: 'inicioPesquisa', component: inicioPesquisa },
    { path: 'HomeComMapsComponent', component: HomeComMapsComponent },
    { path: '**', redirectTo: 'arrumaai', pathMatch: 'full' },

]

@NgModule({
    imports: [ RouterModule.forRoot(routes, {useHash: true })],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}