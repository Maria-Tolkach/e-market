"use client"
import { PRODUCT_CATEGORIES } from "@/config";
import { KeyboardEvent, useRef, useState } from "react"
import { NavItem } from "./NavItem";
import { useOnClickOutside } from "@/hooks/useOnClickOutside";

const NavItems = () => {
  const [activeIndex, setActiveIndex] = useState<null | number>(null);

  const isAnyOpen = activeIndex !== null;

  const navRef = useRef<HTMLDivElement | null>(null)

  useOnClickOutside(navRef, () => setActiveIndex(null))

  return(
    <div className="flex gap-4 h-full" ref={navRef} onKeyDownCapture={(e: KeyboardEvent<HTMLDivElement>) => {
      if (e.key === "Escape") {
        setActiveIndex(null)
      }}}>
      {PRODUCT_CATEGORIES.map((category, index) => {
        const handleOpen = () => {
          if(activeIndex === index) {
            setActiveIndex(null)
          } else (
            setActiveIndex(index)
          )
        }
        const isOpen = index === activeIndex;

        return <NavItem key={index} category={category} handleOpen={handleOpen} isOpen={isOpen} isAnyOpen={isAnyOpen} />
      })}
    </div>
  )
}

export default NavItems
