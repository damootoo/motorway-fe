import React from 'react';
import { useForm } from 'react-hook-form';

const Form = React.forwardRef((props, ref) => {
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    const emailRegex = /^[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{2,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})$/g

    return (
        <form className="form" ref={ref} onSubmit={handleSubmit(onSubmit)}>
            <div className="form-container">
                <label>Name:</label>
                <input name="name" ref={register({ required: true})} />
                {errors.name && <div className="error">Name is required.</div>}
            </div>
            <div className="form-container">
                <label>Email:</label>
                <input name="email" ref={register({ required: true, pattern: emailRegex })} />
                {errors.email && <div className="error">Please a valid email.</div>}
            </div>
            <div className="form-container">
                <label>Favourite colour:</label>
                <select name="colour" ref={register}>
                    <option>Select...</option>
                    <option value="">Red</option>
                    <option value="yellow">Yellow</option>
                    <option value="green">Green</option>
                    <option value="black">Black</option>
                    <option value="white">White</option>
                    <option value="brown">Brown</option>
                    <option value="grey">Grey</option>
                </select>
            </div>
            <div className="form-container">
                <label>Start date:</label>
                <input type="date" name="date" ref={register}/>
            </div>
            <div className="form-container">
                <label>Salary:</label>
                <input type="range" name="salary"
                    min="0" ref={register}/>
            </div>
            <input type="submit" />
        </form>
    )
})

export default Form;
