import React from 'react'
import { useRef } from 'react'
import { useEffect, useState } from 'react'
import { useGlobalContext } from '../context'

const Submenu = () => {
  const {
    isSubmenuOpen,
    closeSubmenu,
    location,
    page: { page, links },
  } = useGlobalContext()

  const [columns, setColumns] = useState('col-2')
  const container = useRef(null)
  useEffect(() => {
    setColumns('col-2')
    const submenu = container.current
    const { center, bottom } = location
    submenu.style.left = `${center}px`
    submenu.style.top = `${bottom}px`

    if (links.length === 3) {
      setColumns('col-3')
    } else if (links.length > 3) {
      setColumns('col-4')
    }
  }, [location])
  return (
    <aside
      className={`${isSubmenuOpen ? 'submenu show' : 'submenu'}`}
      ref={container}
    >
      <h4>{page}</h4>
      <div className={`submenu-center ${columns}`}>
        {links.map((link, index) => {
          const { label, icon, url } = link
          return (
            <a key={index} href={url}>
              {icon}
              {label}
            </a>
          )
        })}
      </div>
    </aside>
  )
}

export default Submenu
