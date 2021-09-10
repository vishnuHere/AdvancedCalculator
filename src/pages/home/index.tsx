import React, { useState, useEffect } from "react";
import constants from "./constants";
import styles from "./index.scss";
import * as QueryString from "query-string";
import wordings from "./wordings";
import { Button, TextInput } from "components";
import { AiOutlineDownload } from "react-icons/ai";

const {
    DEFAULT_PATIENT_DETAILS,
    BUTTON_LIST
} = constants;



const Home: React.FC = () => {

    return (
        <div className={styles.home}>
            <div className={styles.home__container}>
                <TextInput value={"1( 2 * 4)"} />
                <div className={styles.home__button_container}>
                    {BUTTON_LIST.map(button => <Button rounded label={button.label} />)}
                </div>
            </div>
        </div >
    );
};

export default Home;
