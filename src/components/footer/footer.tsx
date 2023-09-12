import React from "react";
import FooterColumns from "./footerContent/FooterColumn";
import SocialPart from "./footerContent/SocialParts";
import { BsFillSuitHeartFill } from "react-icons/bs";

const NewFooter = () => {
    return (
        <footer>
            <div className="flex flex-wrap mt-12  py-8 px-4 border-t-[1px] border-slate-500/30">
                <FooterColumns />
                <SocialPart />
            </div>
            <div className="flex items-center justify-center flex-wrap border-t-[1px] border-slate-500/30 py-4 text-center text-sm md:text-base">
                {'© 2023 SmartSpend. All rights reserved - Designed and Developed with'}
                <BsFillSuitHeartFill
                    style={{
                        color: "#ee384e",
                        margin: "0 0.3rem 0 0.3rem",
                        fontSize: "1.3rem",
                    }}
                />
                by Artificers Lab
            </div>
        </footer>
    );
};

export default NewFooter;
