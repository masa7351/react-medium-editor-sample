import React, { useState } from 'react';
import './App.css';
import './css/medium-editor.css';
import './css/themes/default.css';
import Editor from './mediumEditor/Editor';
const App: React.FC = () => {
  const [article, setArticle] = useState('Sample Text');
  const cacheArticle = (innerHtml, medium) => {
    setArticle(innerHtml);
  };
  const CONFIG = {
    autoLink: true,
    toolbar: {
      buttons: [
        'bold',
        'italic',
        'underline',
        'strikethrough',
        'anchor',
        'image',
        'quote',
        'orderedlist',
        'h1',
        'h3'
      ],
      diffLeft: 25,
      diffTop: 10
    }
  };

  return (
    <div>
      <Editor
        className="userEditor"
        initialText={article}
        onChange={cacheArticle}
        options={CONFIG}
      />
    </div>
  );
};

export default App;
