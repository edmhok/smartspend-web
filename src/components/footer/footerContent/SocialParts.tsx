import React from "react";
import Link from "next/link";
import { socialMedia } from "@/mock/footer";

const SocialPart = () => {

    return (
        <div className="mt-8 md:mt-0 rtl:lg:mr-12 ltr:xl:ml-60">
            <div>
                <h4 className="text-md sm:text-lg">{'"Be With Us!"'}</h4>
                <div className="flex mt-3">
                    {socialMedia.map((SocialItem) => {
                        return (
                            <Link href={SocialItem.href} key={SocialItem.name}>
                                <div className="px-2 opacity-60 hover:opacity-100 transition-opacity duration-300 ease-in-out">
                                    <SocialItem.icon
                                        style={{
                                            fontSize: "2rem",
                                            color: "inherit",
                                        }}
                                    />
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
            <div className="mt-6">
                <h4 className="text-sm sm:text-base">{'Stay up to date with the latest discounts by emailing us'}</h4>
                {/* <form
                    className="flex items-center flex-wrap sm:flex-nowrap mt-4 "
                    onSubmit={(e) => {
                        e.preventDefault();
                    }}
                >
                    <input
                        className=" w-full py-3 px-4 outline-none rounded-lg sm:rounded-none ltr:sm:rounded-tl-lg ltr:sm:rounded-bl-lg rtl:sm:rounded-tr-lg rtl:sm:rounded-br-lg shadow-md sm:shadow-none focus:shadow-sm"
                        type="email"
                        placeholder={'"Please Enter Your Email"'}
                    />
                    <button
                        className="outline-none py-3 px-4 w-full sm:w-auto mt-2 sm:mt-0 rounded-lg sm:rounded-none md:w-auto bg-palette-primary/80 text-palette-side rtl:sm:rounded-tl-lg rtl:sm:rounded-bl-lg ltr:sm:rounded-tr-lg ltr:sm:rounded-br-lg"
                        type="button"
                    >
                        {"Register"}
                    </button>
                </form> */}
            </div>
        </div>
    );
};

export default SocialPart;
