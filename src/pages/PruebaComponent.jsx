import React from "react";
import HeadingPrimary from "../components/HeadingPrimary";
import SubHeading from "../components/SubHeading";
import MinorHeading from "../components/MinorHeading";
import Paragraph from "../components/Paragraph";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import HeaderComponent from "../components/HeaderComponent";

export default function PruebaComponent() {
    return (
        <>
            <HeaderComponent />
            {/* <HeadingPrimary children={"Content specialist h1"} />
            <SubHeading children={"Content specialist h2"} />
            <MinorHeading children={"Content specialist h3"} />
            <Paragraph
                children={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias reprehenderit voluptates quaerat eius, dolorem delectus cumque. Quidem ullam quae officiis in, pariatur fugiat facilis obcaecati, expedita minima dolor cum repellat."}
            />
            <Button children={"Boton de prueba"} />
            <Link to={"/"} className=" text-xl text-woodsmoke-50 hover:text-gray-800 transition-colors duration-200 border-b border-woodsmoke-50">About me</Link> */}
        </>
    )
}