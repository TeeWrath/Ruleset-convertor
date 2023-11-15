"use client"
import React, { useState, ChangeEvent } from 'react';

interface TextEditorProps {
    onSubmit: (content: string) => void;
}

const TextEditor: React.FC<TextEditorProps> = ({ onSubmit }) => {
    const [content, setContent] = useState<string>('');

    const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setContent(e.target.value);
    };

    const handleSubmit = () => {
        onSubmit(content);
    };

    return (
        <div>
            <textarea
                value={content}
                onChange={handleInputChange}
                placeholder="Start typing here..."
                style={{ width: '100%', minHeight: '600px', padding: '10px' }}
                className='bg-slate-800'
            />
            <button onClick={handleSubmit} className='float-right'>Submit</button>
        </div>
    );
};

export default TextEditor;
