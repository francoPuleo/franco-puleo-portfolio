import React from "react";

export default function Button ({children, location}) {

    const handlRedirection = () => {

    }

    return (
        <button className="w-32 h-12 text-woodsmoke-50 border border-woodsmoke-50 border-solid m-4" onClick={handlRedirection}>
            {children}
        </button>
    );
}
