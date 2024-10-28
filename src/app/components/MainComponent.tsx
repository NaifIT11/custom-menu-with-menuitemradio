"use client"




export default function MainComponent(){
    return (
        <div className="relative p-4">
            <button aria-controls="sort-menu" aria-haspopup="menu" aria-expanded="false" className="px-4 py-2 rounded bg-slate-100 text-blue-500 font-medium">sort by</button>
            <ul role="menu" className="p-4 bg-slate-100 text-blue-500 overflow-y-scroll">

            </ul>
        </div>
    )
}