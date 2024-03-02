import React from "react";
export default function SubMenorHeading ({children,colors}) {
    return(
        <h3 className={` text-2xl font-bold ${colors} text-start py-6 md:py-8 lg:py-10 px-4 md:px-6 lg:px-8`}>{children}</h3>
    )
}