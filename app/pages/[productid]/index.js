import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "/styles/Details.module.css";
import Navbar from "../../components/Navbar";

export default function ProductDetails() {
    const [details, setDetails] = useState([null])

    useEffect(() => {
        setDetails(JSON.parse(localStorage.getItem('details')))
    }, [details])

    return (
        <main>
            { <Navbar /> }

            <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'center' }}>
                <>
                { details && details.image && (
                    <div className={styles.card}>
                        <h1>{details.title}</h1>
                        <Image src={details.image} width={200} height={200} alt={details.image} />
                        <p>Titre phare : {details.description}</p>
                        <p>Prix : {details.price}</p>
                        <p>{details.more}</p>
                    </div>
                )}
                </>
            </div>
        </main>
    )
}
