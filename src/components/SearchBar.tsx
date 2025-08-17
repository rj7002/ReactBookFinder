import React from "react"
import { Book } from "./Book"
export const SearchBar = (props)=> {
    const [search,setSearch] = React.useState("")
    const [data, setData] = React.useState(null)
    const filter = props.filter;
    const sortType = props.sortType
    const [debouncedSearch, setDebouncedSearch] = React.useState(""); // Debounced search value

    // const fetchData = async ()=> {
    //     try {
    //         const res = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${search.toLowerCase()}`)
    //         const data = await res.json()
    //         return data
    //     } catch(err) {
    //         console.log(err)
    //     }
    // }
    React.useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      setDebouncedSearch(search); // Set the debounced search value after delay
    }, 500); // Delay of 500ms (adjust as needed)

    // Cleanup timeout if the user types again before 500ms
    return () => clearTimeout(delayDebounceFn);
  }, [search]);
    React.useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `https://www.googleapis.com/books/v1/volumes?q=${search.toLowerCase()}`
        );
        const data2 = await res.json();
        
        const sortedData = data2.items.sort((a, b) => {
          if (filter === "Rating") {
            if (sortType == "Descending") {
                return (
              (b.volumeInfo.averageRating || 0) - (a.volumeInfo.averageRating || 0)
            );
            } else {
                return (
              (a.volumeInfo.averageRating || 0) - (b.volumeInfo.averageRating || 0)
            );
            }
          } else if (filter === "Year") {
            if (sortType == "Descending") {
                return (
              (b.volumeInfo.publishedDate || 0) - (a.volumeInfo.publishedDate || 0)
            );
            } else {
                return (
              (a.volumeInfo.publishedDate || 0) - (b.volumeInfo.publishedDate || 0)
            );
            }
          } else {
            if (sortType == "Descending") {
                return (
              (b.volumeInfo.pageCount || 0) - (a.volumeInfo.pageCount || 0)
            );
            } else {
                return (
              (a.volumeInfo.pageCount || 0) - (b.volumeInfo.pageCount || 0)
            );
            }
          }
          
        });

        setData(sortedData);  
      } catch (err) {
        console.log(err);
      }
    };

   if (search) {
      fetchData();  
    } else {
      setData([]);  
    }
  },

 [debouncedSearch, filter,sortType]);
    // async function handleClick() {
    //     const result = await fetchData()
    //     setData(result)
    // }
    
   
    return (
        <>
        <div>
        </div>
        <div>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
            <label htmlFor="searchbar" className="block text-xl sm:text-2xl font-semibold text-amber-900 text-center">Search for a book</label>
            <div className="mt-4 flex items-center gap-2 bg-amber-50/80 backdrop-blur border border-amber-200 rounded-full shadow px-4 py-2">
                <input type="text" className="flex-1 h-10 sm:h-11 bg-transparent text-amber-900 placeholder-amber-400 focus:outline-none text-center sm:text-left" placeholder="e.g. Harry Potter" name="searchbar" onChange={(e) => setSearch(e.target.value)}/>
                <img className="w-6 h-6 cursor-pointer hover:scale-105 transition-transform" src="https://static.vecteezy.com/system/resources/thumbnails/014/440/989/small_2x/search-black-shadow-icon-socialicon-set-png.png" alt="Search" />
            </div>
        </div>
        {data && data.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
          {data.map((book) => (
            <Book
            title={book.volumeInfo.title}
            subtitle={book.volumeInfo.subtitle}
            url={book.volumeInfo.imageLinks.thumbnail}
            author={book.volumeInfo.authors}
            desc={book.volumeInfo.description}
            pages={book.volumeInfo.pageCount}
            publisher={book.volumeInfo.publisher}
            publishdate={book.volumeInfo.publishedDate}
            sampleurl={book.accessInfo.webReaderLink}
            categories={book.volumeInfo.categories}
            />
          ))}
        </div>
      ) :  data && search.length > 0 && <p className="text-center text-rose-700 text-xl sm:text-2xl mt-8">No results found for {search}</p>
      }
      </div>
        </>
    )
}