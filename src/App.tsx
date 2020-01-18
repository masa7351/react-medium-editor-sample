import React, { useState } from 'react';
import './App.css';
import MediumEditor from 'medium-editor';
import '../node_modules/medium-editor/dist/css/themes/default.css';

const App: React.FC = () => {
  // const editor = new MediumEditor(/*dom, */ '.medium-editable', {
  //   autoLink: true,
  //   delay: 1000,
  //   targetBlank: true,
  //   toolbar: {
  //     buttons: [
  //       'bold',
  //       'italic',
  //       'quote',
  //       'underline',
  //       'anchor',
  //       'h1',
  //       'h2',
  //       'h3',
  //       'h4',
  //       'h5',
  //       'h6',
  //       'strikethrough',
  //       'subscript',
  //       'superscript',
  //       'pre',
  //       'image',
  //       'html',
  //       'justifyCenter'
  //     ],
  //     diffLeft: 25,
  //     diffTop: 10
  //   },
  //   anchor: {
  //     placeholderText: 'Type a link',
  //     customClassOption: 'btn',
  //     customClassOptionText: 'Create Button'
  //   },
  //   paste: {
  //     cleanPastedHTML: true,
  //     cleanAttrs: ['style', 'dir'],
  //     cleanTags: ['label', 'meta'],
  //     unwrapTags: ['sub', 'sup']
  //   },
  //   anchorPreview: {
  //     hideDelay: 300
  //   },
  //   placeholder: {
  //     text: 'Tell your story...'
  //   }
  // });
  const editor = new MediumEditor('.editable', {
    buttonLabels: 'fontawesome'
  });

  const [text, setText] = useState('');

  const changeHandler = (e: React.FormEvent<HTMLTextAreaElement>) => {
    e.preventDefault();
    setText(e.currentTarget.value);
  };

  return (
    <div className="App">
      <textarea
        className="editable medium-editor-textarea"
        value={text}
        onChange={changeHandler}
      />
      {/* <MediumEditor
        className="medium-editable"
        text={text}
        options={editor}
        onChange={changeHandler}
      /> */}
    </div>
  );
};

export default App;
