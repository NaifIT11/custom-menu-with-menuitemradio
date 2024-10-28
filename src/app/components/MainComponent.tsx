"use client"

import { Check } from "lucide-react"




export default function MainComponent(){
    return (
        <div className="relative p-4">
            <button aria-controls="sort-menu" aria-haspopup="menu" aria-expanded="false" className="px-4 py-2 rounded bg-slate-100 text-blue-500 font-medium">sort by</button>
            <ul role="menu" className="p-4 bg-slate-100 text-blue-500 rounded">
                <li role="menuitemradio" aria-checked="false" className="flex items-center gap-3">
                    <Check className="w-4 h-4" />
                    <span>Price</span>
                </li>
                <li role="menuitemradio" aria-checked="false" className="flex items-center gap-3">
                    <Check className="w-4 h-4" />
                    <span>Popularity</span>
                </li>
                <li role="menuitemradio" aria-checked="false" className="flex items-center gap-3">
                    <Check className="w-4 h-4" />
                    <span>Date</span>
                </li>
                <li role="menuitemradio" aria-checked="false" className="flex items-center gap-3">
                    <Check className="w-4 h-4" />
                    <span>Rating</span>
                </li>
            </ul>
        </div>
    )
}