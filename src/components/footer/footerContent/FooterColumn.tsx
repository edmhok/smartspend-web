import Link from "next/link";
import React from "react";
import { footerContent } from "../../../mock/footer";

const FooterColumns = () => {
    return (
        <div className="flex flex-wrap flex-grow min-width-[800px] justify-around">
            {footerContent.map((item) => {
                return (
                    <div className="mt-4 sm:mt-0" key={item.title}>
                        <h4 className="text-md ltr:border-l-4 border-palette-primary px-2">
                            {[item.title]}
                        </h4>
                        <div className="flex flex-col mt-2">
                            {item.subtitles.map((subItem) => {
                                return (
                                    <Link href={subItem.href} key={subItem.text}>
                                        <div className="text-sm text-palette-base/70 px-4 py-2 hover:text-palette-base/100">
                                            {[subItem.text]}
                                        </div>
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default FooterColumns;
