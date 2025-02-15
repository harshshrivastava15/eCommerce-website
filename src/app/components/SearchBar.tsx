"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";

const SearchBar = () => {

    const router = useRouter();

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const name=formData.get("search") as string;

        if(name){
            router.push(`/search?name=${name}`);
        }
        
    }


    
    return (
        <form className="flex ic justify-center items-center gap-2 bg-gray-100 p-2 rounded-full flex-1" onSubmit={handleSearch}>
            <input type="text" placeholder="Search" name="search"
            className="p-1 bg-transparent outline-none flex-1"/>
            <button className="cursor-pointer"></button>
            <Image src="/search.png" alt="" height={16} width={16} className="m-2"/>
        </form>
    )
}
export default SearchBar;