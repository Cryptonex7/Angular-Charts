// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ChartsModule } from 'ng2-charts';

// Services
import { RootService } from './services/root.service';
import { APIService } from './services/api.service';
import { LineChartComponent } from './components/charts/line-chart/line-chart.component';

// Root Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';

// Pages
import { HomeComponent } from './pages/home/home.component';
import { WorkComponent } from './pages/work/work.component';
import { ConnectComponent } from './pages/connect/connect.component';
import { TasksComponent } from './pages/tasks/tasks.component';

// Routes
import { appRoutes } from './constants/routes/routes';
import { BarChartComponent } from './components/charts/bar-chart/bar-chart.component';
import { PieChartComponent } from './components/charts/pie-chart/pie-chart.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    HomeComponent,
    WorkComponent,
    ConnectComponent,
    TasksComponent,
    LineChartComponent,
    BarChartComponent,
    PieChartComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    ChartsModule,
    ClarityModule,
    BrowserAnimationsModule,
  ],
  providers: [RootService, APIService],
  bootstrap: [AppComponent],
})
export class AppModule {}
