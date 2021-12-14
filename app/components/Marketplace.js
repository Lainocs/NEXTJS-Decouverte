import React, { useState, useEffect } from "react";
import styles from '../styles/Marketplace.module.css'
import Card from "./Card";

export default function Navbar() {
    const [user, setUser] = useState(null);
    const luji = "Ce projet de 14 titres devait sortir le 27 mars 2020 mais sera décalé suite au confinement. Il sera finalement dévoilé le 22 mai 2020. Initialement, L.U.J.I devait donc être le premier projet solo du rappeur rennais. Le premier extrait Ahou était disponible depuis 2019. C’est donc après une longue attente que les fans ont pu écouter ce projet."
    const peka = "Ce premier projet solo est dévoilé le 9 avril 2020. Il s’agit d’un projet surprise de 5 morceaux. En effet, cet EP est dévoilé petit à petit entre le 6 et le 9 avril pendant le Planète Rap de Lujipeka. Il sort ce projet pour s’excuser du décalage de son EP L.U.J.I."
    const montagnes = "Lujipeka, jeune rappeur originaire de Rennes et membre du duo Columbine, présente son premier album solo intitulé ‘Montagnes Russes’ après avoir sorti 2 EPs puis des titres tels que 'Putain d’Époque', 'Éclipse' et 'Poupée Russe'. Tournée prévue dès le mois de septembre."
    
    return (
        <div className={styles.marketcontainer}>
            <h3>Albums</h3>
            <div className={styles.container}>
                <Card more={montagnes} id='1' title="Montagnes Russes" image="https://yt3.ggpht.com/-TQip6Y6TAV2WggMij3YlKBbWwtUHzHUvh43nxiL_yuBQ6e8FlCHIBz1styguhwiu_6xG0uj=s900-c-k-c0x00ffffff-no-rj" description="Poupée Russe" price="13€" />
                <Card more={luji} id='2' title="L.U.J.I" image="https://images.genius.com/0f993040e2f3b8a63b26e581688ed580.1000x1000x1.jpg" description="Palapalaba" price="13€" />
                <Card more={peka} id='3' title="P.E.K.A" image="https://images.genius.com/c809c6477fb514c3a9ccee084e4d24e9.752x752x1.png" description="La Lune" price="13€" />
            </div>
        </div>
    )
}