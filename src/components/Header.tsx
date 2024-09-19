const Header = () => {
    return (
        
        <header
        tabIndex={0}
        className="
            p-4 flex flex-col items-center 
            md:flex-row md:justify-start md:items-center 
            md:mx-[12%]
            md: py-12 
            animate-slide-down
        ">
            <img
                src="/lashp_logo.webp"
                alt="Los Angeles State Historic Park logo"
                id="lashplogo"
                className="transition-transform duration-300 
                        md:w-32 md:mr-4"
            />
            <div className="flex flex-col yeseva text-3xl ">

                <h1 className="font-bold text-center md:text-left
                                transition-opacity duration-500 ease-in-out">
                    Los Angeles State Historic Park
                </h1>
                <h2 className="font-bold text-center md:text-left
                                transition-opacity duration-500 ease-in-out">
                    General Plan Amendment
                </h2>
            </div>
        </header>
      );
};

export default Header;