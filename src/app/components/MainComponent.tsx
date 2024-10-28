"use client";

import { Check } from "lucide-react";
import { useState } from "react";

export default function MainComponent() {
  const menuitemradios = [
    {
      name: "price",
      value: "price",
    },
    {
      name: "popularity",
      value: "popularity",
    },
    {
      name: "date",
      value: "date",
    },
    {
      name: "raring",
      value: "rating",
    },
  ];
  const [expanded , setExpanded] = useState(false);
  const [checkedmenuitem , setCheckedMenuItem] = useState<string>("");
  const handleCheckedMenuItem = (e: ClickEventHandler<HTMLLIElement>) => {
    const value = e.target.getAttribute('data-value');
    console.log(value);
    setCheckedMenuItem(value);
    setExpanded(!expanded);
};
  return (
    <div className="relative p-4 border">
      <button
        aria-controls="sort-menu"
        aria-haspopup="menu"
        aria-expanded={expanded}
        onClick={() => setExpanded(!expanded)}
        className="px-4 py-2 rounded bg-slate-100 text-blue-500 font-medium"
      >
        sort by
      </button>
      <ul
        role="menu"
        id="sort-menu"
        aria-label="Sort By Menu Item"
        data-expanded={expanded}
        className="absolute data-[expanded=true]:block data-[expanded=false]:hidden flex flex-col left-[90px] z-[9999] p-4 bg-slate-100 text-blue-500 rounded"
      >
        {menuitemradios.map((menuitem) => (
          <li
            key={menuitem.value}
            role="menuitemradio"
            aria-checked={checkedmenuitem === menuitem.value}
            data-checked={checkedmenuitem === menuitem.value}
            data-value={menuitem.value}
            onClick={handleCheckedMenuItem}
            aria-label={`${menuitem.name} menu item`}
            className="cursor-pointer flex data-[checked=true]:bg-white items-center gap-3 rounded p-3 hover:bg-white"
          >
            <Check data-checked={checkedmenuitem === menuitem.value} className="w-4 h-4 data-[checked=false]:opacity-0 data-[checked=true]:opacity-100" />
            <span>{menuitem.value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
