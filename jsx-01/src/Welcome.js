import React from "react";
import { LanguageContext } from "./LanguageContext";
const Strings = {
    en: {
        CURRENT_WELCOME: "Welcome"
    },
    it: {
        CURRENT_WELCOME: "Benvenuto"
    }
}
export class Welcome extends React.Component {
    render() {
            return (
                <div>
                    <LanguageContext.Consumer>
                    {(language) => {
                        return(
                            <div>{Strings[language].CURRENT_WELCOME}
                            </div>
                        )
                    }}
                    </LanguageContext.Consumer>
                </div>
            )
}
}


export default Welcome