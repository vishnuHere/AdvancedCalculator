import React, { ChangeEvent, LegacyRef } from "react";
import { joinClass } from "helpers/utils";
import styles from "./index.scss";

export enum TextInputTypes {
    text = "text",
    password = "password",
    number = "number"
}

type propType = {
    type: "text" | "password" | "number";
    id?: string;
    value: string | number;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (event: ChangeEvent<HTMLInputElement>) => void;
    label?: string;
    placeholder?: string;
    className?: string;
    required?: boolean;
    autoFocus?: boolean;
    disabled?: boolean;
    min?: number;
    multiple?: boolean;
    accept?: string;
    inputRef?: LegacyRef<HTMLInputElement>;
    size?: string;
    hideArrow?: boolean;
};

export const TextInput = (props: propType) => {
    const {
        type,
        id,
        value,
        onChange,
        onBlur,
        label,
        placeholder,
        className,
        required,
        autoFocus,
        disabled,
        min,
        multiple,
        accept,
        inputRef,
        size,
        hideArrow,
        ...rest
    } = props;

    return (
        <div
            className={joinClass(
                styles.input,
                size && styles[`input--${size}`],
                hideArrow && styles["input--hide-arrow"],
                className
            )}
        >
            {label && (
                <label htmlFor={id}>
                    {label}
                    {required && <span>{" *"}</span>}
                </label>
            )}
            <input
                id={id}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                required={required}
                autoFocus={autoFocus}
                disabled={disabled}
                min={min}
                multiple={multiple}
                accept={accept}
                ref={inputRef}
                {...rest}
            />
        </div>
    );
};
