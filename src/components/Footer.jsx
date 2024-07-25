
const Footer = () => {
    return (
        <>
            <footer className="border-t-[1px] border-slate-200 shadow-md p-5">
                <div className="w-full max-w-[800px] m-auto flex justify-center items-center gap-3">
                    <div className="logo">
                        <img src="/logo-puce-color.webp" alt="Score CIMS" className="w-[100px]" />
                    </div>
                    <div className="menu">
                        <img src="/logo-isp-color.webp" alt="Score CIMS" className="w-[100px]" />
                    </div>
                </div>
            </footer>
            <div className="bg-blue-300 p-2"></div>
        </>
    )
}

export default Footer
