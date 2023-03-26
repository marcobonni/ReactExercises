import React from "react"
import { LanguageContext } from "./LanguageContext"
const Strings = {
    en: {
        CURRENT_WELCOME: "Welcome"
    },
    it: {
        CURRENT_WELCOME: "Benvenuto"
    }
}
export function Welcome2(props) {
    return (
        <div>
            <LanguageContext.Consumer>
                {(language) => {
                    return (
                        <div>{Strings[language].CURRENT_WELCOME} {props.name}
                        </div>
                    )
                }}
            </LanguageContext.Consumer>
        </div>
    )
}