module.exports = {
    snapshotSerializers: [],
    testEnvironment: "jsdom",
    testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.[jt]sx?$",
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
    setupFiles: [],
    setupFilesAfterEnv: [],
    moduleNameMapper: {
        "\\.(css|sass|scss)$": "identity-obj-proxy",
        "\\.(png|jpg|jpeg|svg)$": "<rootDir>/__mocks__/fileMock.ts",
        "@ds-components":
            "<rootDir>/node_modules/ds-components/components/dist/esm/components/src",
        "@ds-components-css":
            "<rootDir>/node_modules/ds-components/components/dist/esm/css/styles.css"
    },
    moduleDirectories: ["src", "node_modules"],
    collectCoverage: true,
    collectCoverageFrom: [
        "**/*.{ts,tsx}",
        "!**/node_modules/**",
        "!**/vendor/**"
    ]
};
