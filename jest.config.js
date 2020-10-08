module.exports = {
    verbose: true,
    roots: [
        "<rootDir>/src/",
        "<rootDir>/specs/"
    ],
    moduleFileExtensions: [
        "js",
        "json",
        "vue"
    ],
    transform: {
        ".*\\.(js)$": "babel-jest",
        ".*\\.(vue)$": "vue-jest"
    },
    moduleNameMapper: {
        "^@/(.*)$": "<rootDir>/src/$1"
    }
}