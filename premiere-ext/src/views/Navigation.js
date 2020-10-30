import React, {useCallback} from 'react';
import {Row, Form, FormControl, Button, InputGroup, DropdownButton, Dropdown  } from 'react-bootstrap';
import {useHistory} from 'react-router-dom';

function Navigation(props) {
    const history = useHistory();

    let term = "";
    let type = "all";

    const onSearch = useCallback(() => {
        history.push('/search/'+this.term+'/'+this.type)
    }, [history]);

    const onSettings = useCallback(() => {
        history.push('/settings')
    }, [history]);

    return <div>
            <Row>
                <div className="col-sm-9">
                    <nav className="navbar navbar-expand-lg" expand="lg">
                        <Form inline>
                            <InputGroup>
                                <DropdownButton
                                as={InputGroup.Prepend}
                                variant="outline-secondary"
                                title="Dropdown"
                                id="input-group-dropdown-1"
                                onSelect={e => type = e}
                                >
                                    <Dropdown.Item eventKey="all">All</Dropdown.Item>
                                    <Dropdown.Item  eventKey="video">Video</Dropdown.Item>
                                    <Dropdown.Item eventKey="image">Images</Dropdown.Item>
                                    <Dropdown.Item eventKey="document">Documents</Dropdown.Item>
                                </DropdownButton>
                                <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={e => term = e.target.value} />

                            </InputGroup>
                        </Form>
                        <Button className="btn btn-default btn-md" onClick={onSearch}>Search </Button>
                    </nav>
                </div>
                <div className="col-sm-3 text-right">
                    <Button type="button" id="settingsButton" onClick={onSettings} className="btn btn-default btn-md ">
                        <span>
                            <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-gear-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 0 0-5.86 2.929 2.929 0 0 0 0 5.858z"/>
                            </svg> Settings
                        </span>
                    </Button>
                </div>
            </Row>
            <hr/>
    </div>
  }

export default Navigation