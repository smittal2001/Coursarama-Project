import React from 'react';
import { InputGroup, InputGroupAddon, InputGroupText, Input, Jumbotron } from 'react-bootstrap';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import FormControl from 'react-bootstrap/FormControl';
//import Jumbotron from 'react-bootstrap/Jumbotron';

export default function search()
{
    return(
        <Jumbotron>
            <h1>
                Search For Your Course:
            </h1>
            <InputGroup className = "mb-3">
                <DropdownButton
                as = {InputGroup.Prepend}
                variant = "outline-secondary"
                title = "Choose Search Method"
                id = "input-group-dropdown-1">
                <Dropdown.Item>
                    Courses
                </Dropdown.Item>
                <Dropdown.Item>
                    Schools
                </Dropdown.Item>
                <Dropdown.Divider/>
                </DropdownButton>
                <FormControl aria-describedby = "basic-addon1" />
            </InputGroup>
        </Jumbotron>
    );
}