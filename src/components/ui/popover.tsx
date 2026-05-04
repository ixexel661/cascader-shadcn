"use client"

import { Popover } from "@base-ui/react/popover"
import * as React from "react"
import { cn } from "@/lib/utils"

function PopoverRoot(props: React.ComponentProps<typeof Popover.Root>) {
  return <Popover.Root {...props} />
}

function PopoverTrigger({
  children,
  asChild,
  disabled,
  ...props
}: React.ComponentProps<typeof Popover.Trigger> & { asChild?: boolean }) {
  if (asChild && React.isValidElement(children)) {
    return (
      <Popover.Trigger
        data-slot="popover-trigger"
        render={children as React.ReactElement}
        {...props}
      />
    )
  }
  return (
    <Popover.Trigger data-slot="popover-trigger" disabled={disabled} {...props}>
      {children}
    </Popover.Trigger>
  )
}

function PopoverContent({
  className,
  align = "center",
  sideOffset = 4,
  side = "bottom",
  children,
  ...props
}: React.ComponentProps<typeof Popover.Popup> & {
  align?: "start" | "center" | "end"
  sideOffset?: number
  side?: "top" | "bottom" | "left" | "right"
}) {
  return (
    <Popover.Portal>
      <Popover.Positioner side={side} align={align} sideOffset={sideOffset}>
        <Popover.Popup
          data-slot="popover-content"
          className={cn(
            "bg-popover text-popover-foreground z-50 w-72 rounded-md border p-4 shadow-md outline-hidden",
            className
          )}
          {...props}
        >
          {children}
        </Popover.Popup>
      </Popover.Positioner>
    </Popover.Portal>
  )
}

export { PopoverContent, PopoverRoot as Popover, PopoverTrigger }
