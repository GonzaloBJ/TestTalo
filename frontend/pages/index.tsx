import Button from "@mui/material/Button/Button";
//import Head from "next/head";
import HeadComponent from "../components/head";
import NavbarComponent from "../components/navbar";
import styles from "../styles/Home.module.css";

export default function Home() {
    return (
    <div >
        <HeadComponent title={'Learn Nextjs'} metaData={'Learn nextjs by tutorials'} />
        <NavbarComponent/>
        <main className={styles.main} >
        </main> 
    </div>
    );
}