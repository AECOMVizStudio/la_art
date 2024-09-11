const Header = () => {
    return (
        <>
        {/* <header tabIndex={0}  className="p-4 flex flex-col items-center md:flex-row md:justify-evenly md:items-center">
             <img src="/lashp_logo.webp" alt="Los Angeles State Historic Park logo" id="lashplogo" />
             <h1 className="text-2xl font-bold text-center md:text-left">Los Angeles State Historic Park General Plan Amendment</h1>
        </header>  */}

        {/* // option 1 */}
        <header
        tabIndex={0}
        className="
            p-4 flex flex-col items-center 
            md:flex-row md:justify-start md:items-center 
            md:mx-[12%] 
            animate-slide-down
        "
    >
        <img
            src="/lashp_logo.webp"
            alt="Los Angeles State Historic Park logo"
            id="lashplogo"
            className="transition-transform duration-300 
                    hover:scale-110
                    md:w-32 md:mr-4"
        />
        <div className="flex flex-col">

            <h1 className="text-2xl font-bold text-center md:text-left
                            transition-opacity duration-500 ease-in-out">
                Los Angeles State Historic Park
            </h1>
            <h2 className="text-2xl font-bold text-center md:text-left
                            transition-opacity duration-500 ease-in-out">
                General Plan Amendment
            </h2>
        </div>
        </header>

        {/* option 2 */}
        {/* <header
            tabIndex={0}
            className="
                p-4 flex flex-col items-center
                md:flex-row md:justify-between md:items-center
                md:mx-[10%] 
                animate-slide-down
            "
        >
            <img
                src="/lashp_logo.webp"
                alt="Los Angeles State Historic Park logo"
                id="lashplogo"
                className="
                    w-24 h-auto transition-transform duration-300 
                    hover:scale-110
                    md:w-32 md:mr-4
                "
            />
            <h1
                className="
                    text-2xl font-bold text-center 
                    md:text-center md:flex-grow md:ml-4
                    transition-opacity duration-500 ease-in-out
                "
            >
                Los Angeles State Historic Park General Plan Amendment
            </h1>
        </header> */}
    </>
      );
};

export default Header;