"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import useGetMenuStore from "@/context/StoreCurrentMenu";
import Logout from "../ui/CustomLogoutButton";

interface SidebarNavProps extends React.HTMLAttributes<HTMLElement> {
  items: {
    key: string;
    title: string;
    Component: any;
  }[];
}

export function SidebarNav({ className, items }: SidebarNavProps) {
  const { setMenu, menu } = useGetMenuStore();
  const updateMenu = (menu: string) => {
    setMenu(menu);
  };

  return (
    <nav
      className={cn(
        "flex justify-center items-center space-x-2 w-full overflow-x-scroll border md:border-0 lg:items-start lg:flex-col lg:space-x-0 lg:space-y-1",
        className
      )}
    >
      {items.map((item: any) => (
        <Button
          key={item.key}
          variant="ghost"
          className={`justify-start w-fit ${
            menu === item.key
              ? "bg-slate-100"
              : ""
          }`}
          onClick={() => {
            updateMenu(item.key);
          }}
        >
          {item.title}
        </Button>
      ))}
      <Logout className="hidden lg:block"/>
    </nav>
  );
}
