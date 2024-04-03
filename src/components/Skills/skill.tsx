import React, { ElementType } from 'react'

interface ISkill {
    icon: ElementType,
    label: string;
}

const Skill = ({icon: Icon, label}: ISkill) => {
  return (
    <div className='w-max h-16 flex flex-col justify-center items-center text-[#4D5BCE]'>
        <Icon size={44} />
        <span className='text-center text-sm'>{label}</span>
    </div>
  )
}

export default Skill