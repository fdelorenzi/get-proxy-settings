import { getProxySettings } from "./index";

getProxySettings().then((settings) => {
    if (settings) {
        // tslint:disable:no-console
        console.log(`http=${settings.http}`);
        console.log(`https=${settings.https}`);
    }
}).catch((e) => {
    console.log("Error", e);
});