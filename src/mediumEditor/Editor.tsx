import React, { useState, useEffect } from 'react';
import MediumEditor from 'medium-editor';

type EditorProps = {
  className: string;
  initialText: string;
  onChange?: (string, MediumEditor) => void;
  options: any;
};

const Editor: React.FC<EditorProps> = ({
  className,
  initialText,
  onChange,
  options
}) => {
  //
  const [text, setText] = useState(initialText);
  useEffect(() => {
    const dom = document.getElementsByClassName(className)[0];
    const medium = new MediumEditor(dom, options);

    // useStateの初期化時に値を登録しているので、setTextは呼ぶ必要はない。
    setText(initialText);
    medium.subscribe('editableInput', () => {
      if (onChange) {
        onChange(dom.innerHTML, medium);
      }
    });
    return () => {
      medium.destroy();
    };
    // eslint-disable-next-line
  }, [text]);

  const editorProp = {
    className,
    dangerouslySetInnerHTML: { __html: text }
  };
  return React.createElement('div', editorProp);
};

export default Editor;
