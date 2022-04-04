import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './partials/header/header.component';
import { FooterComponent } from './partials/footer/footer.component';
import { PokemonItemComponent } from './partials/pokemon-item/pokemon-item.component';
import { PokemonBeastComponent } from './partials/pokemon-beast/pokemon-beast.component';
import { CarouselVideoComponent } from './partials/carousel-video/carousel-video.component';
import { HomeComponent } from './pages/home/home.component';
import { ListComponent } from './pages/list/list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MenuComponent } from './partials/menu/menu.component';
import { LoadingComponent } from './partials/loading/loading.component';
import { DragScrollModule } from 'ngx-drag-scroll';
import { CookieService } from 'ngx-cookie-service';
import { BeastDetailComponent } from './modals/beast-detail/beast-detail.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PokemonItemComponent,
    PokemonBeastComponent,
    CarouselVideoComponent,
    HomeComponent,
    ListComponent,
    MenuComponent,
    LoadingComponent,
    BeastDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    DragScrollModule,
    HttpClientModule,
  ],
  providers: [CookieService],
  bootstrap: [AppComponent],
})
export class AppModule {}
