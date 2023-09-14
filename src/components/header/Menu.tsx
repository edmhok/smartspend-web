import React from "react";
import Link from "next/link";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";



const Menu = () => {
    return (
        <>
            <div className="md:block">
                <Link href="/login/usr" prefetch={false}>
                    <MenuRoundedIcon className="text-gray-500 w-8 h-8" />
                </Link>
            </div>
        </>
    );
};

export default Menu;
