import React from "react"
import SubHeading from "../../components/SubHeading"
import HeaderComponent from "../../components/HeaderComponent"

export default function Home({ }) {

    const media = [
        { type: "video", src: "https://www.youtube.com/embed/h4YXbip7lu8?si=oq2UqeX3RlauwMtU" },
        { type: "video", src: "https://www.youtube.com/embed/FZ7CO9uNetA?si=x3isqjupMPjSDq77" },
        { type: "video", src: "https://www.youtube.com/embed/N4o2YZLsDaA?si=P66zN_ffCT5aPjTt"},
    ]
    const mediaImg = [
        { type: "image", src: "/images/imagen-1.jpg" },
        { type: "image", src: "/images/imagen-2.jpg" },
        { type: "image", src: "/images/imagen-3.jpg" },
        { type: "image", src: "/images/imagen-4.jpg" },
        { type: "image", src: "/images/imagen-5.jpg" },
    ]
    return (
        <>
            <section className="xl:w-screen xl:flex xl:flex-row xl:justify-between">
                <div id="inicio" className="absolute top-0 bg-transparent"></div>
                <HeaderComponent />
                <main className="flex flex-col justify-evenly items-center xl:w-4/6 xl:h-max xl:p-0">
                    <div className="hidden xl:w-full xl:h-28 xl:flex xl:justify-center xl:gap-20 xl:items-center sticky topNegativo xl:bg-black xl:bg-opacity-75 xl:backdrop-filter xl:backdrop-blur-lg lg2:h-20">
                        <a href="#inicio" className="text-woodsmoke-50 text-2xl hover:scale-125 hover:text-lightning-yellow-400 transition-all duration-300 lg2:text-xl">INICIO</a>
                        <a href="#rell" className="text-woodsmoke-50 text-2xl hover:scale-125 hover:text-lightning-yellow-400 transition-all duration-300 lg2:text-xl">PORTADAS</a>
                        <a href="#miniaturas" className="text-woodsmoke-50 text-2xl hover:scale-125 hover:text-lightning-yellow-400 transition-all duration-300 lg2:text-xl">MINIATURAS</a>
                        <a href="#contacto" className="text-woodsmoke-50 text-2xl hover:scale-125 hover:text-lightning-yellow-400 transition-all duration-300 lg2:text-xl">CONTACTA CONMIGO</a>
                    </div>

                    <iframe
                        src="https://www.youtube-nocookie.com/embed/ahKCkuztqDc?si=zTVNTu6HHLs0Os_V"
                        title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        className="hidden xl:block w-full xl:h-128 mt-2 z-50">
                    </iframe>

                    <SubHeading children={"Algunos de mis trabajos"} alingText={"text-center"} colors={"text-woodsmoke-100"} bg={"bg-black xl:hidden"} />
                    <section className="flex flex-col justify-evenly gap-12 items-center xl:w-full xl:mt-28">
                        <article className="w-screen max-w-max bg-black  xl:w-full xl:h-max xl:mb-16" id="rell">
                            <SubHeading mb={"xl:pb-2"} children={"REELS"} colors={"text-woodsmoke-100"} alingText={"text-center"} shadow={"drop-shadow-2xl shadow-woodsmoke-200"} />
                            {/* <Carousel media={media} /> */}
                            <article className="flex flex-row gap-4 justify-center items-center md:gap-12">
                                {media.map((item, index) => (
                                    // <video key={index} controls className="h-max w-24 md:w-48  shadow-uniform shadow-lightning-yellow-200 border " src={item.src} type="video/mp4">
                                    //     Your browser does not support the video tag.
                                    // </video>
                                    <iframe
                                    key={index}
                                    src={item.src}
                                    title="YouTube video player"
                                    frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    className="h-44 md:h-82 xl:h-82 w-24 md:w-48  shadow-uniform shadow-lightning-yellow-200 border">
                                </iframe>
                                ))}
                            </article>
                        </article>
                        <article className="w-screen max-w-max bg-black xl:w-full xl:h-screen lg2:h-150vh xl:overflow-y-hidden xl:flex xl:flex-col xl:justify-center xl:items-center" id="miniaturas">
                            <SubHeading mb={"xl:pb-0"} children={"PORTADAS"} colors={"text-woodsmoke-100"} alingText={"text-center"} shadow={"drop-shadow-2xl shadow-woodsmoke-200"} />
                            <article className="flex flex-row flex-wrap gap-4 justify-center items-center md:gap-8 xl:gap-14 lg2:gap-18 lg2:p-8">
                                {mediaImg.map((item, index) => (
                                    <img key={index} controls className="h-max w-24 md:w-44  shadow-uniform shadow-lightning-yellow-200 border " src={item.src} type="video/mp4" />
                                ))}
                            </article>
                        </article>
                    </section>
                    <article className="w-screen h-screen bg-gradient-to-b from-black to-woodsmoke-10 flex justify-evenly items-center flex-col mb-12 md:w-max" id="contacto">
                        <SubHeading children={"CONTACTAME PARA QUE TU"} br={"NEGOCIO DESPEGUE"} alingText={"text-center"} />
                        <img src="/public/images/imgForm.png" alt="image-form" className="w-96 h-96" />
                        <div className=" w-screen h-max flex flex-row gap-8 justify-center items-center">
                            <img src="/mail.svg" alt="" className="w-8 h-8 hover:scale-150 transition-all duration-30 md:w-12 md:h-12" />
                            <img src="/instagram.svg" alt="" className="w-8 h-8 hover:scale-150 transition-all duration-300 md:w-12 md:h-12" />
                            <img src="/x.svg" alt="" className="w-8 h-8 hover:scale-150 transition-all duration-300 md:w-12 md:h-12" />
                        </div>
                    </article>
                </main>
            </section>

        </>
    )
}