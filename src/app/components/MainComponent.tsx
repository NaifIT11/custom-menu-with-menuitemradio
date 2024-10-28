"use client";

import { Check } from "lucide-react";

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
  return (
    <div className="relative p-4 border">
      <button
        aria-controls="sort-menu"
        aria-haspopup="menu"
        aria-expanded="false"
        className="px-4 py-2 rounded bg-slate-100 text-blue-500 font-medium"
      >
        sort by
      </button>
      <ul
        role="menu"
        id="sort-menu"
        className="absolute left-[90px] z-[9999] p-4 bg-slate-100 text-blue-500 rounded"
      >
        {menuitemradios.map((menuitem) => (
          <li
            key={menuitem.value}
            role="menuitemradio"
            aria-checked="false"
            data-checked="true"
            aria-label={`${menuitem.name} menu item`}
            className="cursor-pointer flex items-center gap-3"
          >
            <Check className="w-4 h-4" />
            <span>{menuitem.value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
