import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularSplitModule } from "angular-split";
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

import { AppComponent } from './app.component';
import { EditorComponent } from './components/editor/editor.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
      AppComponent,
      EditorComponent
  ],
    imports: [
        BrowserModule,
        CKEditorModule,
        AngularSplitModule.forRoot(),
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
