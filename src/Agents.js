import React from 'react';

class Agents extends React.Component {
    constructor() {
        super();
        this.state = {
            agents: [],
            agentId: 0,
            firstName: '',
            middleName: '',
            lastName: '',
            dob: '',
            heightInInches: 0,
            agencies: [],
            aliases: [],
            mode: 'Add',
            errors: []
        };
    }

    componentDidMount() {
        this.getAgents();
    }

    getAgents = () => {
        fetch('http://localhost:8080/api/agent')
        .then((response) => response.json())
        .then((data) => {
            this.setState({
                agents: data,
            });
        });
    }

    setNullState = () => {
        this.setState({
            agents: [],
            agentId: 0,
            firstName: '',
            middleName: '',
            lastName: '',
            dob: '',
            heightInInches: 0,
            agencies: [],
            aliases: [],
            mode: 'Add',
            errors: []
        });
    }

    // Change Handler for inputs
    changeHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    addSubmitHandler = (event) => {
        event.preventDefault();
        fetch('http://localhost:8080/api/agent', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                    firstName: this.state.firstName,
                    middleName: this.state.middleName,
                    lastName: this.state.lastName,
                    dob: this.state.dob,
                    heightInInches: this.state.heightInInches
            }),
        })
        .then((response) => {
            if(response.status === 201) {
                this.setNullState();
                this.getAgents();
            }
            else if (response.status === 400) {
                response.json().then((data) => this.setState({
                    errors: data
                }));
            } else {
                throw new Error(`Unexpected response: ${response}`);
            }
        })
    }

    editSubmitHandler = (event) => {
        event.preventDefault();
        fetch(`http://localhost:8080/api/agent/${this.state.agentId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                    agentId: this.state.agentId,
                    firstName: this.state.firstName,
                    middleName: this.state.middleName,
                    lastName: this.state.lastName,
                    dob: this.state.dob,
                    heightInInches: this.state.heightInInches
            }),
        })
        .then((response) => {
            if(response.status === 204) {
                this.setNullState();
                this.getAgents();
            }
            else if (response.status === 400) {
                response.json().then((data) => this.setState({
                    errors: data
                }));
            } else {
                throw new Error(`Unexpected response: ${response}`);
            }
        });
    }

    deleteAgent = (agentId) => {
        fetch(`http://localhost:8080/api/agent/${agentId}`, {
            method: 'DELETE',
        })
        .then((response) => {
            if (response.status === 204) {
                this.getAgents();
            } else {
                throw new Error(`Unexpected response: ${response}`);
            }
        })
    }

    editAgent = (agentId) => {
        fetch(`http://localhost:8080/api/agent/${agentId}`)
        .then((response) => response.json())
        .then(({ firstName, middleName, lastName, dob, heightInInches}) => {
            this.setState({
                agentId,
                firstName,
                middleName,
                lastName,
                dob,
                heightInInches,
                mode: 'Edit'
            });
        });
    }
    

    render() {
        return (
            <>
                <div>
                    <h1> Agents </h1>
                </div>
                
                <div>
                    <ul>
                        {this.state.agents.map((agent) => (
                            // Why is agent.id undefined if used as a key?
                            // Thought react assigned these to mapped items?
                            // Also, what do I do if middle name is null?
                            <li key={agent.agentId}>{"ID: " + agent.agentId +  
                                "... Agent: " + agent.firstName + " " + agent.middleName + " " + agent.lastName}
                                <button onClick={() => this.editAgent(agent.agentId)}> Edit </button>
                                <button onClick={() => this.deleteAgent(agent.agentId)}> Delete </button>
                            </li>
                        ))}
                    </ul>
                </div>

                {this.state.mode === 'Add' && (
                    <div>
                        <form onSubmit={this.addSubmitHandler}>
                            <div>
                                <input name="firstName" value={this.firstName} onChange={this.changeHandler} placeholder="First Name" type="text" />
                            </div>
                            <div>
                                <input name="middleName" value={this.middleName} onChange={this.changeHandler} placeholder="Middle Name" type="text" />
                            </div>
                            <div>
                                <input name="lastName" value={this.lastName} onChange={this.changeHandler} placeholder="Last Name" type="text" />
                            </div>
                            <div>
                                <input name="dob" value={this.dob} onChange={this.changeHandler} placeholder="Date of Birth(yyyy-mm-dd)" type="text" />
                            </div>
                            <div>
                                <input name="heightInInches" value={this.heightInInches} onChange={this.changeHandler} placeholder="Height (in inches)" type="text" />
                            </div>
                            <div>
                                <button type="submit"> Add Agent </button>
                            </div>
                        </form>
                    </div>
                )}

                {this.state.mode === 'Edit' && (
                    <div>
                        <form onSubmit={this.editSubmitHandler}>
                            <div>
                                <input name="firstName" value={this.firstName} onChange={this.changeHandler} placeholder="First Name" type="text" />
                            </div>
                            <div>
                                <input name="middleName" value={this.middleName} onChange={this.changeHandler} placeholder="Middle Name" type="text" />
                            </div>
                            <div>
                                <input name="lastName" value={this.lastName} onChange={this.changeHandler} placeholder="Last Name" type="text" />
                            </div>
                            <div>
                                <input name="dob" value={this.dob} onChange={this.changeHandler} placeholder="Date of Birth(yyyy-mm-dd)" type="text" />
                            </div>
                            <div>
                                <input name="heightInInches" value={this.heightInInches} onChange={this.changeHandler} placeholder="Height (in inches)" type="text" />
                            </div>
                            <div>
                                <button type="submit"> Edit Agent </button>
                            </div>
                        </form>
                    </div>
                )}

                {this.state.errors.length > 0 && (
                    <div>
                        <p> The following errors occurred: </p>
                        {this.state.errors.map((error) => (
                            <li key={error}> {error} </li> 
                        ))}
                    </div>
                )}
                
            </>
        );
    }
}

export default Agents;