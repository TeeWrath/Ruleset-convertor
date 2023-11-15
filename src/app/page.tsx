"use client"

import { useState } from 'react'
import TextEditor from '@/app/rulebox'

const Home = () => {
  const [submittedContent, setSubmittedContent] = useState('');
  const handleEditorSubmit = (content: any) => {
    setSubmittedContent(content);
  }
  return (
    <section className=''>
      <h1 className='text-green-400 text-center font-bold text-[50px]'>Ruleset convertor</h1>
      <div className='flex justify-center content-center'>
        <div className="border-solid mt-10 p-3 border-[3px] w-[1800px] rounded-[10px] h-[750px]">
          <TextEditor onSubmit={handleEditorSubmit} /> {/*rulbox component*/}
        </div>
      </div>
    </section>
  )
}

export default Home;