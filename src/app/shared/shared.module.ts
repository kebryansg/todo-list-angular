import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './components/atoms/input/input.component';
import { IconButtonComponent } from './components/atoms/icon-button/icon-button.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './components/molecules/header/header.component';

@NgModule({
  declarations: [
    InputComponent,
    IconButtonComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    InputComponent,
    IconButtonComponent,
    HeaderComponent
  ]
})

export class SharedModule { }
