import React, { MouseEvent } from "react";
import { useSelector } from "react-redux";
import { joinClass } from "helpers/utils";
import styles from "./index.scss";
import { IconType } from "react-icons";

type propType = {
    label?: string;
    className?: string;
    title?: string;
    type: "submit" | "button" | "reset";
    disabled?: boolean;
    onClick?: (event: MouseEvent<HTMLButtonElement> | string) => void;
    rounded?: boolean;
    icon?: IconType | JSX.Element;
    borderButton?: boolean
};

export const Button = (props: propType) => {
    const {
        label,
        className,
        type,
        disabled,
        onClick,
        rounded,
        icon,
        title,
        borderButton
    } = props;

    return (
        <button
            type={type}
            className={joinClass(
                styles.button,
                rounded && styles["button--rounded"],
                borderButton && styles["button--border"],
                className)}
            onClick={onClick}
            disabled={disabled}
            title={title}
        >
            {icon ? icon : label}
        </button>
    );
};
