import React, { useState, useEffect } from "react";
import styles from '../styles/Marketplace.module.css'
import Card from "./Card";

export default function Navbar() {
    const [user, setUser] = useState(null);
    
    return (
        <div className={styles.marketcontainer}>
            <h3>Marketplace</h3>
            <div className={styles.container}>
                <Card title="Montagnes Russes" image="https://yt3.ggpht.com/-TQip6Y6TAV2WggMij3YlKBbWwtUHzHUvh43nxiL_yuBQ6e8FlCHIBz1styguhwiu_6xG0uj=s900-c-k-c0x00ffffff-no-rj" description="Poupée Russe" price="13€" />
                <Card title="L.U.J.I" image="https://images.genius.com/0f993040e2f3b8a63b26e581688ed580.1000x1000x1.jpg" description="Palapalaba" price="13€" />
                <Card title="P.E.K.A" image="https://images.genius.com/c809c6477fb514c3a9ccee084e4d24e9.752x752x1.png" description="La Lune" price="13€" />
            </div>
        </div>
    )
}