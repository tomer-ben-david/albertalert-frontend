import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {  MatButtonModule } from '@angular/material';

@NgModule({
  imports: [MatButtonModule],
  exports: [MatButtonModule]
})
export class MaterialAppModule { }
