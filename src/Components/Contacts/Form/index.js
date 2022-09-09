import {useEffect, useState} from "react";

const initialFormValues = {
    fullname: "",
    phone:""
}
function Form({addContact, contacts}) {

    console.log(addContact);
    const [form, setForm] = useState(initialFormValues);

    useEffect(() => {
        setForm(initialFormValues);
    }, [contacts])

    const onChangeInput = (e) => { 
        setForm({...form, [e.target.name]: e.target.value});
    };

    const onSubmit = (e) => {
        e.preventDefault();  //for not rerendering

        if(form.fullname === "" || form.phone === "") {
            return false;
        }
        addContact([...contacts, form]);
        console.log(form);
    };

    return <div>
        <form onSubmit={onSubmit}>
            <div>
              <input 
                name="fullname" 
                value={form.fullname}
                placeholder="Full Name"
                onChange={onChangeInput}/>
            </div>
            <div>
                <input 
                name="phone" 
                value={form.phone}
                placeholder="Telephone Number" 
                onChange={onChangeInput}/>
            </div>
            <div>
                <button onClick={onSubmit}>Add</button>
            </div>
        </form>
    </div>
}

export default Form;