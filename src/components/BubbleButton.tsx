import React, { ComponentProps, ReactNode } from 'react'

interface BubbleButtonProps extends ComponentProps<'button'> {
  children: ReactNode;
}

const BubbleButton = (props: BubbleButtonProps) => {


  return (
    <button className='button-bubble-menu data-[active=true]:text-violet-400' {...props} />
  )
}

export default BubbleButton
