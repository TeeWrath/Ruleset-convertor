"use client"
import { saveAs } from 'file-saver';
import React, { useState, ChangeEvent } from 'react';

interface TextEditorProps {
    onSubmit: (content: string) => void;
}


// RuleSet Text Editor
const TextEditor: React.FC<TextEditorProps> = ({ onSubmit }) => {
    const [content, setContent] = useState<string>('');

    const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setContent(e.target.value);
    };

    const handleSubmit = async () => {
        onSubmit(content);
    
        try {
          const response = await fetch('/api/saveYAMLFile', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ content }),
          });
    
          if (response.ok) {
            console.log('File saved successfully');
          } else {
            console.error('Failed to save file');
          }
        } catch (error) {
          console.error('Error saving file:', error);
        }
      };


    return (
        <div>
            <textarea
                value={content}
                onChange={handleInputChange}
                placeholder="Start typing here..."
                style={{ width: '100%', minHeight: '600px', padding: '10px' }}
                className='bg-slate-800 rounded-lg border-none outline-none text-xl'
            />
            <button onClick={handleSubmit} className='float-right bg-red-500 hover:bg-red-900 transition w-36 h-8 rounded-lg font-semibold text-lg'>Submit</button>
        </div>
    );
};

export default TextEditor;
