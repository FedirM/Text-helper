import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ChangeEvent } from '@ckeditor/ckeditor5-angular/ckeditor.component';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {

  public Editor = ClassicEditor;

  constructor() { }

  ngOnInit() { }

  onDataChange( {editor}: ChangeEvent ) {
    console.log('DATA: ', editor.getData());
  }

}
