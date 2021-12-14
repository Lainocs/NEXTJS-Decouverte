import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "../styles/Card.module.css";
import { useRouter } from "next/router";

export default function Card(props){
    const [selected, setSelected] = useState(null);
    const router = useRouter()
    useEffect(() => {
        // send data via localstorage
            localStorage.setItem("details", JSON.stringify(props));
    }, [selected])
    const gotoDetails = (e) => {
        setSelected(e);
        router.push({"pathname":"[id]", query: {id: e.id}});
    }
    return (
        <div className={styles.card}>
            <h3>{props.title} </h3>
            <Image src={props.image} width={200} height={200} alt={props.image} />
            <p> Titre phare : {props.description} </p>
            <p> Price : {props.price} </p>
            <button onClick={
                () => gotoDetails(props)
            }>
                Acheter
            </button>
        </div>
        
    )
}