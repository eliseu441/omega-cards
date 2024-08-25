import React from 'react'
import { Icon } from '@iconify/react';

export default function ContactInfoWidget({withIcon, title}) {
  return (
    <>
      {title && <h2 className="cs-widget_title">{title}</h2>}
      <ul className="cs-menu_widget cs-style1 cs-mp0" style={{color:'white'}}>
        <li>
          {withIcon?<span className='cs-accent_color'><Icon icon="material-symbols:add-call-rounded" /></span>:''}
          +55 12 99622-9081
        </li>
        <li>
          {withIcon?<span className='cs-accent_color'><Icon icon="mdi:envelope" /></span>:''}
          bruno@hotmail.com
        </li>
      </ul>
    </>
  )
}
