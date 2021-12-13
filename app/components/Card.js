import React, { useState } from "react";
import Image from "next/image";
import styles from "../styles/Card.module.css";

export default function Card(props){
    const [open, setOpen] = useState(false);
    return (
        <div className={styles.card}>
            <h3>{props.title} </h3>
            <Image src={props.image} width={200} height={200} alt={props.image} />
            <p> Titre phare : {props.description} </p>
            <p> Price : {props.price} </p>
            <button onClick={() => open = true}>Acheter</button>
        </div>
        
    )
}