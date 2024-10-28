"use client";

import { Check } from "lucide-react";
import { useState, useRef } from "react";

export default function MainComponent() {
  const menuitemradios = [
    { name: "Price", value: "price" },
    { name: "Popularity", value: "popularity" },
    { name: "Date", value: "date" },
    { name: "Rating", value: "rating" },
  ];

  const [expanded, setExpanded] = useState(false);
  const [checkedMenuItem, setCheckedMenuItem] = useState<string>(menuitemradios[0].value);
  const [highlightedIndex, setHighlightedIndex] = useState<number>(0);
  const menuRef = useRef<HTMLUListElement>(null);

  const handleCheckedMenuItem = (e: React.MouseEvent<HTMLLIElement>) => {
    const value = e.currentTarget.getAttribute('data-value');
    if (checkedMenuItem !== value) {
      setCheckedMenuItem(value!);
    }
    setExpanded(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setHighlightedIndex((prev) => (prev + 1) % menuitemradios.length);
        break;
      case 'ArrowUp':
        e.preventDefault();
        setHighlightedIndex((prev) => (prev - 1 + menuitemradios.length) % menuitemradios.length);
        break;
      case 'Enter':
        const selectedValue = menuitemradios[highlightedIndex].value;
        if (checkedMenuItem !== selectedValue) {
          setCheckedMenuItem(selectedValue);
        }
        setExpanded(false);
        break;
      case 'Escape':
        setExpanded(false);
        break;
      default:
        break;
    }
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
        Sort by
      </button>
      {expanded && (
        <ul
          role="menu"
          id="sort-menu"
          aria-label="Sort By Menu Item"
          data-expanded={expanded}
          className="absolute flex flex-col left-[90px] z-[9999] p-4 bg-slate-100 text-blue-500 rounded"
          onKeyDown={handleKeyDown}
          ref={menuRef}
        >
          {menuitemradios.map((menuitem, index) => (
            <li
              key={menuitem.value}
              role="menuitemradio"
              aria-checked={checkedMenuItem === menuitem.value}
              data-value={menuitem.value}
              onClick={handleCheckedMenuItem}
              tabIndex={0} // Set to 0 for keyboard focus
              aria-label={`${menuitem.name} menu item`}
              className={`cursor-pointer focus-visible:ring-2 ring-offset-2 ring-blue-500 flex items-center gap-3 rounded p-3 hover:bg-white ${highlightedIndex === index ? 'bg-gray-200' : ''}`} // Highlight the focused item
            >
              <Check className={`w-4 h-4 ${checkedMenuItem === menuitem.value ? 'opacity-100' : 'opacity-0'}`} />
              <span>{menuitem.name}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
