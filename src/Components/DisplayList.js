import React from "react";
import Expand from "./Expand";

export default function DisplayList(props) {
    return (
        <div className="scrollStyle" ref={props.scrollEnd}>
            {props.initData.map((item, index) =>
                props.initData[index] == props.lastItem ? (
                    <Expand
                        key={index}
                        name={item}
                        expanded={true} />
                ) :
                    <Expand
                        key={index}
                        name={item}
                        expanded={false} />
            )}
        </div>
    )
}