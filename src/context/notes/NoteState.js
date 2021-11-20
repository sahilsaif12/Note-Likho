import React, { useState } from 'react'
import NoteContext from './noteContext'


export default function NoteState(props) {
    let initialNotes=[
        {
          "_id": "6184ec75b681cb2299bccc0f",
          "user": "6183ebb269b635f27bb796af",
          "title": "internal exam 2",
          "description": "at 10 am",
          "tag": "exam",
          "date": "2021-11-05T08:33:57.442Z",
          "__v": 0
        },
        {
          "_id": "619420367abe853460139a04",
          "user": "6183ebb269b635f27bb796af",
          "title": "note 1",
          "description": "at 10 am",
          "tag": "exam",
          "date": "2021-11-16T21:18:46.042Z",
          "__v": 0
        },
        {
          "_id": "6194203e7abe853460139a06",
          "user": "6183ebb269b635f27bb796af",
          "title": "note 2",
          "description": "at 10 am",
          "tag": "exam",
          "date": "2021-11-16T21:18:54.318Z",
          "__v": 0
        },
        {
          "_id": "619420437abe853460139a08",
          "user": "6183ebb269b635f27bb796af",
          "title": "note 3",
          "description": "at 10 am",
          "tag": "exam",
          "date": "2021-11-16T21:18:59.645Z",
          "__v": 0
        },
        {
          "_id": "619420437abe853460139a08",
          "user": "6183ebb269b635f27bb796af",
          "title": "note 4",
          "description": "i  Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, modi delectus. Cumque, ipsam officiis distinctio dolorem, magni, architecto saepe velit consequatur provident facere possimus autem eum nemo. Expedita, reprehenderit necessitatibus.",
          "tag": "exam",
          "date": "2021-11-16T21:18:59.645Z",
          "__v": 0
        },
        {
          "_id": "619420437abe853460139a08",
          "user": "6183ebb269b635f27bb796af",
          "title": "note 4",
          "description": "i  Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, modi delectus. Cumque, ipsam officiis distinctio dolorem, magni, architecto saepe velit consequatur provident facere possimus autem eum nemo. Expedita, reprehenderit necessitatibus.",
          "tag": "exam",
          "date": "2021-11-16T21:18:59.645Z",
          "__v": 0
        },
        {
          "_id": "619420437abe853460139a08",
          "user": "6183ebb269b635f27bb796af",
          "title": "note 4",
          "description": "i  Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, modi delectus. Cumque, ipsam officiis distinctio dolorem, magni, architecto saepe velit consequatur provident facere possimus autem eum nemo. Expedita, reprehenderit necessitatibus.",
          "tag": "exam",
          "date": "2021-11-16T21:18:59.645Z",
          "__v": 0
        },
        {
          "_id": "619420437abe853460139a08",
          "user": "6183ebb269b635f27bb796af",
          "title": "note 4",
          "description": "i  Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, modi delectus. Cumque, ipsam officiis distinctio dolorem, magni, architecto saepe velit consequatur provident facere possimus autem eum nemo. Expedita, reprehenderit necessitatibus.",
          "tag": "exam",
          "date": "2021-11-16T21:18:59.645Z",
          "__v": 0
        },
        {
          "_id": "619420437abe853460139a08",
          "user": "6183ebb269b635f27bb796af",
          "title": "note 4",
          "description": "i  Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, modi delectus. Cumque, ipsam officiis distinctio dolorem, magni, architecto saepe velit consequatur provident facere possimus autem eum nemo. Expedita, reprehenderit necessitatibus.",
          "tag": "exam",
          "date": "2021-11-16T21:18:59.645Z",
          "__v": 0
        },
        {
          "_id": "619420437abe853460139a08",
          "user": "6183ebb269b635f27bb796af",
          "title": "note 4",
          "description": "i  Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, modi delectus. Cumque, ipsam officiis distinctio dolorem, magni, architecto saepe velit consequatur provident facere possimus autem eum nemo. Expedita, reprehenderit necessitatibus.",
          "tag": "exam",
          "date": "2021-11-16T21:18:59.645Z",
          "__v": 0
        },
        {
          "_id": "619420437abe853460139a08",
          "user": "6183ebb269b635f27bb796af",
          "title": "note 4",
          "description": "i  Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, modi delectus. Cumque, ipsam officiis distinctio dolorem, magni, architecto saepe velit consequatur provident facere possimus autem eum nemo. Expedita, reprehenderit necessitatibus.",
          "tag": "exam",
          "date": "2021-11-16T21:18:59.645Z",
          "__v": 0
        },
        {
          "_id": "619420437abe853460139a08",
          "user": "6183ebb269b635f27bb796af",
          "title": "note 4",
          "description": "i  Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, modi delectus. Cumque, ipsam officiis distinctio dolorem, magni, architecto saepe velit consequatur provident facere possimus autem eum nemo. Expedita, reprehenderit necessitatibus.",
          "tag": "exam",
          "date": "2021-11-16T21:18:59.645Z",
          "__v": 0
        },
        {
          "_id": "619420437abe853460139a08",
          "user": "6183ebb269b635f27bb796af",
          "title": "note 4",
          "description": "i  Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, modi delectus. Cumque, ipsam officiis distinctio dolorem, magni, architecto saepe velit consequatur provident facere possimus autem eum nemo. Expedita, reprehenderit necessitatibus.",
          "tag": "exam",
          "date": "2021-11-16T21:18:59.645Z",
          "__v": 0
        },
        {
          "_id": "619420437abe853460139a08",
          "user": "6183ebb269b635f27bb796af",
          "title": "note 4",
          "description": "i  Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, modi delectus. Cumque, ipsam officiis distinctio dolorem, magni, architecto saepe velit consequatur provident facere possimus autem eum nemo. Expedita, reprehenderit necessitatibus.",
          "tag": "exam",
          "date": "2021-11-16T21:18:59.645Z",
          "__v": 0
        },
        {
          "_id": "619420437abe853460139a08",
          "user": "6183ebb269b635f27bb796af",
          "title": "note 4",
          "description": "i  Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, modi delectus. Cumque, ipsam officiis distinctio dolorem, magni, architecto saepe velit consequatur provident facere possimus autem eum nemo. Expedita, reprehenderit necessitatibus.",
          "tag": "exam",
          "date": "2021-11-16T21:18:59.645Z",
          "__v": 0
        },
        {
          "_id": "619420437abe853460139a08",
          "user": "6183ebb269b635f27bb796af",
          "title": "note 4",
          "description": "i  Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, modi delectus. Cumque, ipsam officiis distinctio dolorem, magni, architecto saepe velit consequatur provident facere possimus autem eum nemo. Expedita, reprehenderit necessitatibus.",
          "tag": "exam",
          "date": "2021-11-16T21:18:59.645Z",
          "__v": 0
        },
        {
          "_id": "619420437abe853460139a08",
          "user": "6183ebb269b635f27bb796af",
          "title": "note 4",
          "description": "i  Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, modi delectus. Cumque, ipsam officiis distinctio dolorem, magni, architecto saepe velit consequatur provident facere possimus autem eum nemo. Expedita, reprehenderit necessitatibus.",
          "tag": "exam",
          "date": "2021-11-16T21:18:59.645Z",
          "__v": 0
        },
        {
          "_id": "619420437abe853460139a08",
          "user": "6183ebb269b635f27bb796af",
          "title": "note 4",
          "description": "i  Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, modi delectus. Cumque, ipsam officiis distinctio dolorem, magni, architecto saepe velit consequatur provident facere possimus autem eum nemo. Expedita, reprehenderit necessitatibus.",
          "tag": "exam",
          "date": "2021-11-16T21:18:59.645Z",
          "__v": 0
        }
      ]
    const [notes, setnote] = useState(initialNotes)
    
    return (
        <NoteContext.Provider value={{notes,setnote}}>
            {props.children}
        </NoteContext.Provider>
    )
}
