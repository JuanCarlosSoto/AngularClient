import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CustomMaterialModule } from './core/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { UserComponent } from './user/user.component';
import { AppRoutingModule } from './core/app.routing.module';
import { LoginComponent } from './login/login.component';
import { ErrorDialogComponent } from './core/error-dialog.component';
import { UserService } from './app.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthService } from './core/auth.service';
import { TokenStorage } from './core/token.storage';
import { Interceptor } from './core/interceptor';
import { MatSnackBarModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    LoginComponent,
    ErrorDialogComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    FormsModule,
    AppRoutingModule
  ],
  exports: [
    MatSnackBarModule
  ],
  entryComponents: [ErrorDialogComponent],
  providers: [ErrorDialogComponent, UserService, AuthService, TokenStorage,
    {provide: HTTP_INTERCEPTORS,
      useClass: Interceptor,
      multi : true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
