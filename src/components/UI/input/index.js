import React from 'react';
import { Form, FormSelect } from 'react-bootstrap';
/**
* @author
* @function Input
**/

const Input = (props) => {
    let input = null;
    switch (props.type) {
        case 'select':
            input = <Form.Group>
                {props.label && <Form.Label>{props.label}</Form.Label>}
                <FormSelect
                    className="form-control form-control-sm"
                    style={{marginBottom: '30px'}}
                    value={props.value}
                    onChange={props.onChange}
                >
                    <option value="">{props.placeholder}</option>
                    {
                        props.options.length > 0 ?
                            props.options.map((option, index) =>
                                <option key={index} value={option.value}>{option.name}</option>
                            ) : null
                    }
                </FormSelect>
            </Form.Group>
            break;
        case 'text':   // having input without specifying the type incase text or default
        default:   

            input = <Form.Group className="mb-3">
                {props.label && <Form.Label style={props.style}>{props.label}</Form.Label>}
                <Form.Control
                    type={props.type}
                    placeholder={props.placeholder}
                    value={props.value}
                    onChange={props.onChange}
                    {...props}
                />
                <Form.Text className="text-muted" style={{ marginLeft: '-230px' }}>
                    {props.errorMessage}
                </Form.Text>
            </Form.Group>
    }
    return input;
}
export default Input