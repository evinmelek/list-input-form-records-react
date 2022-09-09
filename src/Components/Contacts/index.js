import {useEffect, useState} from "react";
import Form from "./Form";
import List from "./List"; 
import "./Form/form.css";
import "./List/list.css";

function Contacts() {
    const [contacts, setContacts] = useState([
        {
            fullname: "Evin",
            phone: "123456"
        },
        {
            fullname: "Melek",
            phone: "98765"
        }
    ]);

    useEffect(() => {
        console.log(contacts);
    }, [contacts])
    return [
        <div>
            <List contacts={contacts}></List>
            <Form addContact={setContacts} contacts={contacts}></Form>
        </div>
    ]
}

export default Contacts;