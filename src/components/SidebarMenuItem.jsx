import React from 'react'

export default function SidebarMenuItem({text, icon, className, action}) {
  return (
    <div 
      className={'dark:text-white text-sm cursor-pointer h-10 flex items-center px-3 mb-[1px] rounded-lg hover:font-semibold hover:bg-black/[0.05] dark:hover:bg-white/[0.15] ' + className}
      onClick={action}
    >
      <span className='text-xl mr-5'>
        {icon}
      </span>{text}
    </div>
  )
}
