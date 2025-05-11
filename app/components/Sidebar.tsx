"use client"

import { Logo, Notification, Search } from "./Icons"
import { DropdownMenuCheckboxes } from "./DropMenu"
import { useTheme } from "./ThemeProvider"
import { Button } from "../ui/button"
import { Moon, Sun } from "lucide-react"

export default function Sidebar() {
  const { theme, setTheme } = useTheme()

  return (
    <div className="w-1/6 flex flex-col p-2 text-foreground bg-background">
      <div className="flex flex-row justify-between items-center gap-2">
        <Logo
          size={18}
          className="text-icon hover:cursor-pointer hover:opacity-70 transition-all duration-300 ease-in-out"
        />
        <div className="flex flex-row items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            {theme === "light" ? (
              <Moon className="h-5 w-5 text-icon" />
            ) : (
              <Sun className="h-5 w-5 text-icon" />
            )}
          </Button>
          <Notification
            size={20}
            className="text-icon hover:cursor-pointer hover:opacity-70 transition-all duration-300 ease-in-out"
          />
          <Search
            size={20}
            className="text-icon hover:cursor-pointer hover:opacity-70 transition-all duration-300 ease-in-out"
          />
        </div>
      </div>
      <DropdownMenuCheckboxes />
    </div>
  )
}
