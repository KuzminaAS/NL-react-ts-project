import { useEffect } from "react";

function useClickOutside(ref: any, setOpen: any) {
  useEffect(() => {
    const listener = (event: any) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return
      }
      setOpen(false)
    }
  
    document.addEventListener('mousedown', listener)
    document.addEventListener('touchstart', listener)
  
    return () => {
      document.removeEventListener('mousedown', listener)
      document.removeEventListener('touchstart', listener)
    }
  }, [ref])
}
export default useClickOutside;
