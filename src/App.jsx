import { useState } from 'react'
import './index.css'
import Editor from './components/Editor'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=' min-h-screen p-2 lg:p-8 w-full text-zinc-50 bg-gradient-to-r from-indigo-300 to-purple-400 flex items-center justify-center '  >

      <div className='bg-zinc-900 w-full max-w-[1100px] mx-auto rounded-xl shadow-sm border-black/20 overflow-hidden  hidden lg:grid grid-cols-[16rem_1fr] ' >

        <aside className='bg-zinc-800 border-r-zinc-700 p-4' >

          <div className='flex gap-2 ' >
            <button className='w-3 h-3 rounded-full bg-red-400' />
            <button className='w-3 h-3 rounded-full bg-yellow-400' />
            <button className='w-3 h-3 rounded-full bg-green-400' />
          </div>

        </aside>

        <main className='p-4 ' >

          <Editor />

        </main>

      </div >

      <div className='bg-zinc-900 w-full max-w-[1100px] mx-auto rounded-xl shadow-sm border-black/20 overflow-hidden lg:hidden ' >

        <aside className='bg-zinc-800 border-r-zinc-700 p-4' >

          <div className='flex gap-2 ' >
            <button className='w-3 h-3 rounded-full bg-red-400' />
            <button className='w-3 h-3 rounded-full bg-yellow-400' />
            <button className='w-3 h-3 rounded-full bg-green-400' />
          </div>

        </aside>

        <main className='p-4 ' >

          <Editor />

        </main>

      </div >

    </div >
  )
}

export default App
