import React, { useState, useEffect } from "react";
import styles from '../styles/Navbar.module.css'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    
    const toggle = () => setIsOpen(!isOpen);
    
    return (
        <div className={styles.navcontainer}>
            <p>Item 1</p>
            <p>Item 2</p>
            <p>Item 3</p>
        </div>
    );
}