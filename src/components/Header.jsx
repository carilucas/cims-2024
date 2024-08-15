

const Header = () => {
    return (
        <>
            <div className="bg-blue-300 p-2"></div>
            <header className="border-b-[1px] border-slate-200 shadow-md p-2">
                <div className="w-full max-w-[800px] m-auto flex justify-between items-center">
                    <div className="logo">
                        <img src="/01-logo-cims-color-svg.svg" alt="Score CIMS" className="w-[100px]" />
                    </div>
                    <div className="menu">
                        <div className="flex gap-1 text-slate-600 items-center">
                            <a href="mailto:igduenase@puce.edu.ec">Contacto </a>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                            </svg>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header
