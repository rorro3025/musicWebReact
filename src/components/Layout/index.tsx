import React from "react";

import './style.css';
import Header from "../Header";
import Footer from "../Footer";

interface Props {
    children: React.ReactNode;
}

export default function Layout({children}: Props) {
    return (
        <>
            <Header/>
            <div className="container main">
                {children}
            </div>
            <Footer/>
        </>
    );
}