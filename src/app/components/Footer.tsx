const Footer=()=>{
    // return (
    //     <div className="h-20 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64">Footer</div>
        
    // )
    const currentYear = new Date().getFullYear();

        return (
            <div className="h-20 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 flex justify-between items-center bg-gray-800 text-white">
                <div>Footer</div>
                <div>&copy; {currentYear} Your Company</div>
            </div>
        );
}

export default Footer;