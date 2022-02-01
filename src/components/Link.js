import React from 'react'

const Link = ({ className, href, children }) => {
  const onClick = (event) => {
    // return early if CTRL key is held down
    if (event.metaKey || event.ctrlKey) return

    // prevent full page reload
    event.preventDefault()
    window.history.pushState({}, '', href)

    // detect URL change
    const navEvent = new PopStateEvent('popstate')
    window.dispatchEvent(navEvent)
  }

  return (
    <a onClick={onClick} className={className} href={href}>
      {children}
    </a >
  )
}

export default Link;