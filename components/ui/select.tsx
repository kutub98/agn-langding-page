"use client";

import * as SelectPrimitive from "@radix-ui/react-select";
import { cn } from "@/lib/utils";

interface SelectProps
  extends React.ComponentProps<typeof SelectPrimitive.Root> {
  children: React.ReactNode;
}

export function Select({ children, ...props }: SelectProps) {
  return (
    <SelectPrimitive.Root {...props}>
      <SelectPrimitive.Trigger
        className={cn(
          "border border-gray-300 px-3 py-2 rounded w-full text-left",
          "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        )}
      >
        <SelectPrimitive.Value placeholder="Select..." />
      </SelectPrimitive.Trigger>

      <SelectPrimitive.Content className="bg-white border border-gray-300 rounded shadow-md mt-1">
        <SelectPrimitive.Viewport>{children}</SelectPrimitive.Viewport>
      </SelectPrimitive.Content>
    </SelectPrimitive.Root>
  );
}

interface SelectItemProps
  extends React.ComponentProps<typeof SelectPrimitive.Item> {
  children: React.ReactNode;
}

export const SelectItem = ({ children, ...props }: SelectItemProps) => {
  return (
    <SelectPrimitive.Item
      className={cn(
        "px-3 py-2 rounded cursor-pointer select-none",
        "focus:bg-blue-100 focus:outline-none"
      )}
      {...props}
    >
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
  );
};
