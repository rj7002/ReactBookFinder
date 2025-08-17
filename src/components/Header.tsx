export const Header = () => {
    return (
        <header className="bg-gradient-to-r from-amber-800 via-orange-700 to-rose-700 text-amber-50 shadow-md sticky top-0 z-40 flex items-center justify-center gap-3 py-4">
            <img className="w-10 h-10 drop-shadow" src="https://www.freeiconspng.com/uploads/magnifying-glass-icon-11.png" alt="Search icon" />
            <h1 className="text-center text-3xl sm:text-4xl font-bold font-serif tracking-tight">Book Finder</h1>
        </header>
    )
}