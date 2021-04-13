import React from "react";
import "../css/layout.css";

export const Layout = ({ children }) => (
    <section className="game-section">{children}</section>
);

export const Flex = ({children} ) => <div className="flex-container">{children}</div>;

export const Block = ({children} ) => <div className="block">{children}</div>;

export const Header = () => (
    <header className="header">
        <h1>ALPHABET REFLEX GAME</h1>
    </header>
);

export const Footer = () => (
    <footer className="footer">
        <h3>ALPHABET REFLEX GAME</h3>
    </footer>
);
