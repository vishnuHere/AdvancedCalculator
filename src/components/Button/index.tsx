import React, { MouseEvent } from "react";
import { useSelector } from "react-redux";
import { joinClass } from "helpers/utils";
import styles from "./index.scss";

type propType = {
    label?: string;
    className?: string;
    title?: string;
    keyValue?: string;
    type: "submit" | "button" | "reset";
    disabled?: boolean;
    onClick?: (event: MouseEvent<HTMLButtonElement> | string) => void;
    rounded?: boolean;
    borderButton?: boolean
};

export const Button = (props: propType) => {
    const {
        label,
        className,
        type,
        disabled,
        onClick,
        keyValue,
        rounded,
        title,
        borderButton
    } = props;

    return (
        <button
            type={type}
            key={keyValue}
            className={joinClass(
                styles.button,
                rounded && styles["button--rounded"],
                borderButton && styles["button--border"],
                className)}
            onClick={onClick}
            disabled={disabled}
            title={title}
        >
            {label}
        </button>
    );
};
