import React, { useEffect, useState } from 'react'
import axios from 'axios'
const Chats = () => {
    let [chats, setchats] = useState([])
    useEffect(() => {
        try {
            axios.get("http://localhost:3030/chats").then((res) => {
                console.log(res.data);
                setchats(res.data)
            })
        }
        catch (e) {

        }
    }, [])


    return (
        <div> All Chats
            {
                chats.map((chat) => {
                    return <div
                        key={chat._id}
                        style={{
                            display: "flex",
                            justifyContent: chat.sender === "You" ? "flex-end" : "flex-start",
                            padding: "8px 16px",
                        }}
                    >
                        <div
                            style={{
                                backgroundColor: chat.sender === "You" ? "#e1ffc7" : "#ffffff",
                                color: "#222",
                                borderRadius: "12px",
                                boxShadow: "0 3px 8px rgba(0, 0, 0, 0.1)",
                                padding: "12px 16px",
                                maxWidth: "70%",
                                border: chat.sender === "You" ? "1px solid #a5d6a7" : "1px solid #e0e0e0",
                                transition: "transform 0.2s ease, box-shadow 0.2s ease",
                                transform: "scale(1)",
                            }}
                            onMouseOver={(e) => {
                                e.currentTarget.style.transform = "scale(1.02)";
                                e.currentTarget.style.boxShadow = "0 5px 12px rgba(0, 0, 0, 0.15)";
                            }}
                            onMouseOut={(e) => {
                                e.currentTarget.style.transform = "scale(1)";
                                e.currentTarget.style.boxShadow = "0 3px 8px rgba(0, 0, 0, 0.1)";
                            }}
                        >
                            <p
                                style={{
                                    margin: 0,
                                    fontWeight: "bold",
                                    fontSize: "0.9rem",
                                    color: chat.sender === "You" ? "#1b5e20" : "#1565c0",
                                }}
                            >
                                {chat.sender}
                            </p>
                            <p
                                style={{
                                    margin: "6px 0",
                                    fontSize: "1rem",
                                    lineHeight: "1.4",
                                }}
                            >
                                {chat.message}
                            </p>
                            <p
                                style={{
                                    margin: 0,
                                    fontSize: "0.8rem",
                                    color: "#757575",
                                    textAlign: "right",
                                }}
                            >
                                To: {chat.reciever}
                            </p>
                        </div>
                    </div>




                })
            }
        </div>
    )
}

export default Chats