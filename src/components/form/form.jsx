import './form.css';
import React, { useState } from 'react';

function Form () {
    const [countMessage, setCountMessage] = useState(0)
    const [historyMessages, seHistoryMessages] = useState([])

    const upCountMessage = (countMessage) => {
        setCountMessage(countMessage + 1)
    }

    const pushHistoryMessages = (historyMessages) => {
        const message = {
            name: "",
            text: "",
            dataTime: new Date
        }

        historyMessages.push(message)
        setCountMessage(historyMessages.length)
        seHistoryMessages([...historyMessages])
    }

    return (
        <div className="Form__box">
            <div className="Box__title">Сообщения {countMessage}</div>
            <div className="Box__message">Тут будут собщения</div>
            <label>
                Имя
                <input type="text" />
            </label>
            <label>
                Сообщение
                <textarea />
            </label>

            <button className="Box__send" onClick={() => pushHistoryMessages(historyMessages)}>Добавить</button>
        </div>
    )
}

export default Form