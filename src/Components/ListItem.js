import { render } from "@testing-library/react";
import React, { useEffect, useRef, useState } from "react";
import { initialData } from '../utils/data.utils'
import DisplayList from "./DisplayList";
import '../styles.css';

export default function ListItem() {

    const [listItems, setlistItems] = useState(initialData)
    const [userInput, setUserInput] = useState('');
    const scrollToEnd = useRef(null);
    let lastItem = listItems[listItems.length - 1];

    function handleTextInput(e) {
        setUserInput(e.target.value)
    }

    function add() {
        setlistItems(listItems.concat(userInput))
    }

    useEffect(() => {
        if (scrollToEnd) {
            scrollToEnd.current.addEventListener('DOMNodeInserted', event => {
                const { currentTarget: target } = event;
                target.scroll({ top: target.scrollHeight, behavior: 'smooth' });
            });
        }
        setlistItems(prevMsg => [...prevMsg, ])
    }, [])

    return (
        <div>
            <input type="text" onChange={(e) => handleTextInput(e)} /> &nbsp;
            <button onClick={() => add()}>Add</button>
            <br /><br />
            {listItems != 0 &&
                <table>
                    <tr>
                        <td>
                            <ul>
                                <DisplayList scrollEnd={scrollToEnd} initData={listItems} lastItem={lastItem}></DisplayList>
                            </ul>
                        </td>
                    </tr>
                </table>
            }
        </div>
    )
}