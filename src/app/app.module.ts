import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainHeaderComponent } from './components/main-header/main-header.component';
import { RightCategoryComponent } from './components/right-category/right-category.component';
import { ContainerTabsComponent } from './components/container-tabs/container-tabs.component';
import { CompanyDetailsComponent } from './components/company-details/company-details.component';
import { SectorDetailsComponent } from './components/sector-details/sector-details.component';
import { SectorInfoComponent } from './components/sector-details/sector-info/sector-info.component';
import { UseCasesComponent } from './components/use-cases/use-cases.component';
import { TopChartsComponent } from './components/top-charts/top-charts.component';

@NgModule({
  declarations: [
    AppComponent,
    MainHeaderComponent,
    RightCategoryComponent,
    ContainerTabsComponent,
    CompanyDetailsComponent,
    SectorDetailsComponent,
    SectorInfoComponent,
    UseCasesComponent,
    TopChartsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
