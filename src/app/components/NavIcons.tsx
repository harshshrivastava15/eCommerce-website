"use client"
import Image from "next/image";
import {useState} from "react";
import Link from "next/link";
import {useRouter} from "next/navigation";
import CartBox from "./CartBox";

const NavIcons = () => {
    const [ifProfile,setIfProfile] = useState(false);
    const [isCart,setIsCart] = useState(false);
    
    let isLoggedIn=true;//true for testing purpose. initially it should be false
    const router = useRouter();
    const handleProfile = () => {
        
        if(!isLoggedIn){
            router.push("/login");
            alert("Please login first");
        }else{
            setIfProfile(prev=>!prev);
            // router.push("/profile");
        }
    }
    const handleLogout = () => {
        isLoggedIn=false;
    }
    return (
        <div className="relative flex items-center gap-4 xl:gap-6">
            <Image src="/profile.png" alt="" width={22} height={22} className="curser-pointer" onClick={handleProfile}/>{
                ifProfile && (
                    <div className="absolute p-5 rounded-md top-12 left-0 text-sm bg-gray-50  shadow-lg flex flex-col gap-2 z-20">
                        <Link href="/">Profile</Link>
                        <a href="/">Settings</a>
                        <a href="/" onClick={handleLogout}>Logout</a>
                    </div>
                )
            }
            <Image src="/notification.png" alt="" width={22} height={22} className="curser-pointer"/>
            <div className="relative cursor-pointer" onClick={()=>setIsCart(prev=>!prev)}>
            <Image src="/cart.png" alt="" width={22} height={22}  />
            <div className="absolute -top-4 -right-4 w-6 h-6 bg-cartcolor rounded-full flex items-center justify-center text-white text-sm">2</div>
            </div>{isCart && <CartBox />   }
            
        </div>
    )
}
export default NavIcons;