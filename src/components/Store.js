import React from "react";
import { Navbar } from "./Home";
import Players from '../Styles/Store.css';

function Store() {
    return(
        <div>
            <ul>
                <iframe src="//www.beatstars.com/embed/track/?id=10966808"
                width="55%"
                height="130">
                </iframe>
                <iframe src="//www.beatstars.com/embed/track/?id=6376388"
                width="55%"
                height="130">
                </iframe>
                <iframe src="//www.beatstars.com/embed/track/?id=6339827"
                width="55%"
                height="130">
                </iframe>
                <iframe src="//www.beatstars.com/embed/track/?id=6290170"
                width="55%"
                height="130">
                </iframe>
            </ul>
        </div>
    );
}

export default Store;