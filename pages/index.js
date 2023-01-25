import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import styled from "styled-components";

const HomeStyle = styled.div`
    width: 100%;
    height: 100vh;
    background: url('/background_image.jpg') no-repeat 0 0 / cover;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-direction: column;
    padding-bottom: 40px;
`;

export default function Home() {
    return (
        <>
            <Head>
                <title>Colorvote - Accueil</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />

                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossorigin
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap"
                    rel="stylesheet"
                ></link>
            </Head>
            <HomeStyle>
                <Image src='/colorvote_logo_admin.png' width={160} height={26} alt='colorvote logo'/>
            </HomeStyle>
        </>
    );
}