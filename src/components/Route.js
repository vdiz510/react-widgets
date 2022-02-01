import { useEffect, useState } from 'react'

const Route = ({ path, children }) => {
  // to get route to update, use useState
  const [currentPath, setCurrentPath] = useState(window.location.pathname)

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname)
    }
    window.addEventListener('popstate', onLocationChange)

    // clean up
    return () => {
      window.removeEventListener('popstate', onLocationChange)
    }
  }, []) // only run once

  return window.location.pathname === path ? children : null
}

export default Route;