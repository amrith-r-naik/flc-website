import React from 'react'
import CreateQuizForm from '~/components/quiz/CreateQuiz'


const page = () => {
  return (
    <div className='bg-[#373A40] w-full  p-8 space-y-4'>
      <h1 className='text-xl font-extrabold '>Create Quiz</h1>
    <CreateQuizForm/>
    </div>
  )
}

export default page