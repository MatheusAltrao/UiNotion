import React from 'react'
import { useEditor, EditorContent, BubbleMenu, FloatingMenu } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { lowlight } from 'lowlight/lib/core'
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight'
import js from 'highlight.js/lib/languages/javascript'
lowlight.registerLanguage('js', js)
import { initialContent } from './initialContent'

import { RxFontBold, RxFontItalic, RxStrikethrough, RxCode, RxChevronDown, RxChatBubble } from 'react-icons/rx'

import 'highlight.js/styles/tokyo-night-dark.css'
import BubbleButton from './BubbleButton'


const Editor = () => {

  const editor = useEditor({
    extensions: [
      StarterKit,
      CodeBlockLowlight.configure({
        lowlight,
      }),
    ],
    onUpdate(editor) {
      editor.editor.getText()
    },
    content: initialContent,
    editorProps: {
      attributes: {
        class: 'outline-none'
      }
    }
  })

  return (

    <>


      <EditorContent
        className='max-w-[700px] h-[750px] mx-auto  py-4 lg:py-16 prose prose-invert style-scroll  overflow-y-scroll prose-p:opacity-90 pr-4'
        editor={editor}
      />

      {editor && (
        <FloatingMenu className='bg-zinc-700 shadow-xl shadow-black/20 overflow-hidden flex flex-col items-center justify-center  py-2 px-1 divide-zinc-400 rounded-md border gap-2 border-zinc-600' editor={editor}
          shouldShow={({ state }) => {

            const { $from } = state.selection

            const currentLineText = $from.nodeBefore?.textContent

            return currentLineText === '/'


          }}
        >

          <button
            onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
            className='flex items-center gap-2 p-1 rounded min-w-[290px] hover:bg-zinc-600 ' >
            <img className='w-12 border border-zinc-600 rounded-md' src="http://www.notion.so/images/blocks/text/en-US.png" alt="Text" />

            <div className='flex flex-col  text-left' >
              <span className='text-sm text-zinc-100' >Text</span>
              <p className='text-zinc-400  text-xs' >Just start writing with plain text.</p>
            </div>
          </button>

          <button className='flex items-center gap-2 p-1 rounded min-w-[290px] hover:bg-zinc-600 '
            onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
          >
            <img className='w-12 border border-zinc-600 rounded-md' src="https://www.notion.so/images/blocks/header.57a7576a.png" alt="Text" />

            <div className='flex flex-col  text-left' >
              <span className='text-sm text-zinc-100' >Heading 1</span>
              <p className='text-zinc-400  text-xs' >big section Heading.</p>
            </div>
          </button>



        </FloatingMenu>
      )}

      {editor && (
        <BubbleMenu className='bg-zinc-700 shadow-xl shadow-black/20 overflow-hidden
        flex items-center justify-center  divide-x divide-zinc-400 rounded-md border border-zinc-600' editor={editor}>

          <BubbleButton  > <RxChatBubble size={18} /> Comment </BubbleButton>
          <BubbleButton  > Text <RxChevronDown size={18} /> </BubbleButton>

          <BubbleButton
            data-active={editor.isActive('bold')}
            onClick={() => editor.chain().focus().toggleBold().run()}>

            <RxFontBold size={18} />

          </BubbleButton>


          <BubbleButton
            data-active={editor.isActive('italic')}
            onClick={() => editor.chain().focus().toggleItalic().run()} > <RxFontItalic size={18} />
          </BubbleButton>

          <BubbleButton data-active={editor.isActive('strike')}
            onClick={() => editor.chain().focus().toggleStrike().run()} > <RxStrikethrough size={18} />
          </BubbleButton>

          <BubbleButton data-active={editor.isActive('code')}
            onClick={() => editor.chain().focus().toggleCode().run()}  > <RxCode size={18} />
          </BubbleButton>




        </BubbleMenu>
      )}

    </>

  )
}

export default Editor
