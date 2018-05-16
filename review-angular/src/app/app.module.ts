import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponentComponent } from './not-found-component/not-found-component.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DataService } from './services/data-access.service';
import { AppErrorHandler } from './common/AppErrorHandler';
import { HttpModule } from '@angular/http';
import { AdminComponent } from './admin/admin.component';
import { EmployeeComponent } from './employee/employee.component';
import { LogutComponent } from './logut/logut.component';
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NotFoundComponentComponent,
    AdminComponent,
    EmployeeComponent,
    LogutComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: '', 
        component: LoginComponent
      },
      {
        path: 'admin', 
        component: AdminComponent
      },
      {
        path: 'employee', 
        component: EmployeeComponent
      },
      {
        path: 'logout', 
        component: LogutComponent
      },
      {
        path: 'register', 
        component: RegisterComponent
      },
      {
        path: '**', 
        component: NotFoundComponentComponent
      }
    ])
  ],
  providers: [
    DataService,
    {provide: ErrorHandler, useClass: AppErrorHandler}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
