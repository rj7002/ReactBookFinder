import React from "react"
import { SearchBar } from "./SearchBar"
export const Sidebar = () => {
    const [showSide, setShowSide] = React.useState(false)
    const [filter,setFilter] = React.useState("Rating")
    const [sortType, setSortType] = React.useState("Descending")
    function toggle() {
        setShowSide(prevShow=>!prevShow)
    }
    return (
        <>
        <SearchBar
        filter={filter}
        sortType={sortType}
        />
        <img onClick={toggle} className="fixed top-4 left-4 z-50 w-9 h-9 p-1.5 rounded-md bg-amber-700/90 hover:bg-amber-800 shadow-md cursor-pointer" src="https://www.svgrepo.com/show/94793/menu-button-of-three-horizontal-lines.svg" alt="Open sidebar" />
        {showSide && <div className="fixed inset-y-0 left-0 z-40 w-64 sm:w-72 bg-amber-50/95 backdrop-blur border-r border-amber-200 shadow-xl p-6 overflow-y-auto">
            <h1 className="text-center text-2xl font-bold">Sort by:</h1>
            <div className="flex flex-col">
                 <select name="filter" id="filter" className="border-1 border-amber-500 rounded-3xl my-10 p-2 text-amber-900 text-center" onChange={(e)=> {
                setFilter(e.target.value)
            }}>
                <option value="Rating">Average Rating</option>
                <option value="Year">Year</option>
                <option value="Pages">Pages</option>
            </select>
            <select name="sortType" id="sortType" className="border-1 border-amber-500 rounded-3xl p-2 text-amber-900 text-center" onChange={(e)=> {
                setSortType(e.target.value)
            }}>
                <option className="text-amber-900"value="Descending">Descending</option>
                <option className="text-amber-900" value="Ascending">Ascending</option>
            </select>
            </div>
           
        </div>}
        </>
    )
}