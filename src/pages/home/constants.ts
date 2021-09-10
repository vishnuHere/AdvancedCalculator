import moment from "moment";

export default {
    DEFAULT_PATIENT_DETAILS: {
        date: moment(),
        patientName: "",
        age: "",
        description: "",
        referredDoctor: ""
    },
    BUTTON_LIST: [
        {
            label: "CE",
            operation: "reset",
            type: "function"
        },
        {
            label: "C",
            operation: "clear",
            type: "function"
        },
        {
            label: "(",
            operation: "reset",
            type: "function"
        },
        {
            label: ")",
            operation: "clear",
            type: "function"
        },
        {
            label: "Sin",
            operation: "reset",
            type: "function"
        },
        {
            label: "Cos",
            operation: "clear",
            type: "function"
        },
        {
            label: "Tan",
            operation: "reset",
            type: "function"
        },
        {
            label: "%",
            operation: "clear",
            type: "function"
        },
        {
            label: "7",
            operation: "reset",
            type: "function"
        },
        {
            label: "8",
            operation: "clear",
            type: "function"
        },
        {
            label: "9",
            operation: "reset",
            type: "function"
        },
        {
            label: "x",
            operation: "clear",
            type: "function"
        },
        {
            label: "4",
            operation: "reset",
            type: "function"
        },
        {
            label: "5",
            operation: "clear",
            type: "function"
        },
        {
            label: "6",
            operation: "reset",
            type: "function"
        },
        {
            label: "-",
            operation: "clear",
            type: "function"
        },
        {
            label: "1",
            operation: "reset",
            type: "function"
        },
        {
            label: "2",
            operation: "clear",
            type: "function"
        },
        {
            label: "3",
            operation: "reset",
            type: "function"
        },
        {
            label: "+",
            operation: "clear",
            type: "function"
        },
        {
            label: "0",
            operation: "reset",
            type: "function"
        },
        {
            label: ".",
            operation: "clear",
            type: "function"
        },
        {
            label: "=",
            operation: "reset",
            type: "function"
        }
    ]
};