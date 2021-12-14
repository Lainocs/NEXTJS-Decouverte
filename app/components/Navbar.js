import Link from "next/link";
import React, { useState, useEffect } from "react";
import styles from '../styles/Navbar.module.css'

export default function Navbar() {
    const [user, setUser] = useState(null);
    
    return (
        <div className={styles.navcontainer}>
            <a href="/">Lujipeka</a>
            <div>
                {user ? (
                        <button>
                        Logout
                        </button>
                    ) : (
                        <button>
                            Login
                        </button>
                    )
                }
            </div>
        </div>
    )
}