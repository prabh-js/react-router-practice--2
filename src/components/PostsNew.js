import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';

class PostsNew extends React.Component {
    renderField = (field) => {
        const { meta: { touched, error }, label } = field;
        const className = `form-group ${ touched && error ? 'has-danger' : ''}`
        return (
            <div className={className}>
                <label>{label}</label>
                <input className="form-control" {...field.input} type="text" />
                <div className="text-help">{touched ? error : ''}</div>
            </div>
        )
    }
    onFormSubmit = (values) => {
        console.log(values)
    }
    render () {
        const { handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit(this.onFormSubmit)}>
                <Field
                    label="Title for Post"
                    name="title"
                    component={this.renderField}
                />
                <Field
                    label="Categories"
                    name="categories"
                    component={this.renderField}
                />
                <Field
                    label="Post Content"
                    name="content"
                    component={this.renderField}
                />
                <button type="submit" className="btn btn-primary">Submit</button>
                <Link to="/" className="btn btn-danger">Cancel</Link>
            </form>
        )
    }
}
const validate = (values) => {
    let errors = {};
    
    if (!values.title) {
        errors.title = 'Enter a title!'
    }
    if (!values.categories) {
        errors.categories = 'Enter some categories!'
    }
    if (!values.content) {
        errors.content = 'Enter some content!'
    }


    return errors;
}
export default reduxForm({
    validate,
    form: 'PostsNewForm',
})(PostsNew);