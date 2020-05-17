import { Component, OnInit } from '@angular/core';
import DecoupledEditor  from '@ckeditor/ckeditor5-build-decoupled-document';
import { ChangeEvent } from '@ckeditor/ckeditor5-angular/ckeditor.component';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {

  public Editor: any;// = DecoupledEditor;
  public toolbar: any;
  public editable: any;
  public window: any;

  constructor() { }

  ngOnInit() {
      this.window = window;
      console.log('win: ', this.window);

      DecoupledEditor
          .create( document.querySelector( '.document-editor__editable' ), {
              // constructor
          } )
          .then( editor => {
              const toolbarContainer = document.querySelector( '.document-editor__toolbar' );

              toolbarContainer.appendChild( editor.ui.view.toolbar.element );

              this.window.editor = editor;
          } )
          .catch( err => {
              console.error( err );
          } );
  }

  onDataChange( {editor}: ChangeEvent ) {
    console.log('DATA: ', editor.getData());
  }

  public onReady( editor ) {
      console.log('ELEM: ', editor.ui);
    // editor.ui.getEditableElement().parentElement.insertBefore(
    //     editor.ui.view.toolbar.element,
    //     editor.ui.getEditableElement()
    // );
      this.toolbar = editor.ui.view.toolbar.element;
      this.editable = editor.ui.view.editable.element;
  }

}
