import React from "react";
import HeadingPrimary from "./HeadingPrimary";
import SubHeading from "./SubHeading";
import Paragraph from "./Paragraph";
import TitleH5 from "./TitleH5";
export default function HeaderComponent() {
    return (
        <>
            <header className="w-full h-max xl:w-1/3 xl:overflow-hidden xl:h-screen xl:z-50 xl:border-r xl:border-lightning-yellow-300 xl:flex xl:flex-col xl:justify-evenly xl:items-center xl:fixed xl:right-0">
                <HeadingPrimary children={"Content Manager"} textAlign={"text-center"} />
                <Paragraph color={"text-woodsmoke-50"} children={"Ayudo a escalar la facturacion de tu negocio a traves del contenido organico"} textAling={"text-center"} />
                <div className="flex justify-center items-center w-full">
                    <div className="flex flex-row justify-between items-center w-32 md:w-80">
                        <img src="/idea.svg" alt="Imagen" className="md:w-16 md:h-16 xl:w-12 xl:h-12 md:border-b-2 md:p-2 md:border-lightning-yellow-400 lg2:scale-75" />
                        <img src="/clock.svg" alt="Imagen" className="md:w-16 md:h-16 xl:w-12 xl:h-12 md:border-t-2 md:p-2 md:border-lightning-yellow-400 lg2:scale-75" />
                        <img src="/feather.svg" alt="Imagen" className="md:w-16 md:h-16 xl:w-12 xl:h-12 md:border-b-2 md:p-2 md:border-lightning-yellow-400 lg2:scale-75" />
                        <img src="/notebooks.svg" alt="Imagen" className="md:w-16 md:h-16 xl:w-12 xl:h-12 md:border-t-2 md:p-2 md:border-lightning-yellow-400 lg2:scale-75" />
                        <img src="/speakerphone.svg" alt="Imagen" className="md:w-16 md:h-16 xl:w-12 xl:h-12 md:border-b-2 md:p-2 md:border-lightning-yellow-400 lg2:scale-75" />
                    </div>
                </div>
                <SubHeading children={`"Transformo ideas en contenido cautivador que conecta con audiencias y genera impacto."`} alingText={"text-center"} />
                <img src="/image-franco/kzo_logo.png" alt="" className="w-34 hidden scale-75 xl:w-48 xl:scale-150 xl:block lg2:w-44" />
                <iframe
                    src="https://www.youtube.com/embed/F_7ti8fAOO4?si=MHdwd0Mhi4YCY2Ll"
                    title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    className="w-full h-60 md:h-96 md:mb-14 md:mt-4 xl:hidden">
                </iframe>
                <article className=" w-max h-16 bg-black overflow-hidden mt-8 lg2:relative lg2:left-30">
                    <div className="flex flex-row p-4 gap-10 justify-center items-center bg-transparent animate-marquee xl:relative xl:left-52 xl:gap-6 lg2:left-70 lg2:gap-20">
                        <TitleH5 children={"GUIONES"} colors={"text-lightning-yellow-500"} />
                        <TitleH5 children={"PORTADAS"} colors={"text-woodsmoke-50"} />
                        <TitleH5 children={"REELS"} colors={"text-lightning-yellow-500"} />
                        <TitleH5 children={"PROSPECCION MEDIANTE SETTERS"} colors={"text-woodsmoke-50"} />
                    </div>
                </article>
            </header>
        </>
    );
}
