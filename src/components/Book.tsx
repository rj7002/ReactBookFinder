import React from "react"
export const Book = (props) => {
    const [clickBook, setClickBook] = React.useState(false)
    function toggle() {
        setClickBook(prevClick=>!prevClick)
    }
    return (
        <>
        {clickBook && 
            <div className="fixed inset-0 bg-stone-900/80 backdrop-blur-sm flex items-center justify-center p-6 z-50">
                <img  className="w-100 h-auto object-contain rounded-lg shadow-lg mr-6"src={props.url} alt={props.title || 'Book cover'} />
                <div className="flex flex-col bg-amber-50 rounded-2xl shadow-2xl p-6 w-fit h-fit border border-amber-200">
                    <h1 className="text-2xl sm:text-3xl font-serif font-bold text-gray-900">{props.title}</h1>
                    {props.subtitle && <h1 className="text-lg sm:text-xl font-serif text-amber-800 mt-1">{props.subtitle}</h1>}
                    <h1 className="text-base sm:text-lg font-medium text-amber-900 mt-3">Author: {props.author.length > 1 ? props.author.join(', ') : props.author}</h1>
                    {props.desc && <h1 className="text-sm sm:text-base text-stone-700 mt-3 leading-relaxed">{props.desc}</h1>}
                    <h1 className="font-semibold mt-4 text-amber-900">Category: <span className="font-normal text-stone-700">{props.categories}</span></h1>
                    {props.pages > 0 && <h1 className="font-semibold text-amber-900">Pages: <span className="font-normal text-stone-700">{props.pages}</span></h1>}
                    <h1 className="font-semibold text-amber-900">Publisher: <span className="font-normal text-stone-700">{props.publisher}</span></h1>
                    <h1 className="font-semibold text-amber-900">Published: <span className="font-normal text-stone-700">{props.publishdate}</span></h1>
                    <button className="mt-5 inline-flex items-center justify-center rounded-full bg-amber-700 text-amber-50 px-5 py-2 text-sm font-semibold hover:bg-amber-800 active:bg-amber-900 transition-colors w-fit"><a href={props.sampleurl} target="__blank">View Sample</a></button>
                </div>
                <h1 className="absolute top-4 right-6 text-2xl text-amber-100/80 hover:text-amber-50 cursor-pointer" onClick={toggle}>✖</h1>
            </div>
        }
        <div className="bg-amber-50 border border-amber-200 rounded-2xl shadow hover:shadow-md transition hover:-translate-y-0.5 flex flex-col justify-center p-5 cursor-pointer" onClick={toggle}>
            <h1 className="text-center text-lg font-semibold text-amber-900">{props.title}</h1>
            {props.subtitle && <h1 className="text-center text-sm text-amber-700 mt-0.5">{props.subtitle}</h1>}
            <img  className="h-48 w-auto mx-auto mt-3 object-contain"src={props.url} alt={props.title || 'Book cover'} />
            <h1 className="text-center text-sm sm:text-base text-amber-800 mt-3">{props.author.length > 1 ? props.author.join(', ') : props.author}</h1>
        </div>
        
        </>
    )
}