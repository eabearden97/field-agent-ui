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
            //How do you deal with dates... (string?)
            dob: '',
            heightInInches: 0,
            agencies: [],
            aliases: [],
        };
    }

    componentDidMount() {
        fetch('http://localhost:8080/api/agent')
            .then(response => response.json())
            .then(data => {
              this.setState({
                agents: data
              });
            });
    }

    // Change Handler for inputs
    changeHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    // CRUD Handlers
    // POST http://localhost:8080/api/agent HTTP/1.1
    // Content-Type: application/json

    // {
    //     "firstName": "Edward",
    //     "middleName": "Alexander",
    //     "lastName": "Bearden",
    //     "dob": "1997-08-08",
    //     "heightInInches": 60
    // }

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
        // currently not successful at creating
        .then((response) => {
            if(response.status === 201) {
                console.log("Success!");
                // This code needs to be updated...
                // pass in more than one variable where "data" is?
                // would allow to update multiple variables in setState
                // fetch('http://localhost:8080/api/todos')
                //     .then((response) => response.json())
                //     .then((data) => {
                //         this.setState({
                //             toDos: data,
                //         });
                //     });
            }
            // add more if statements to account for possible errors
            if(response.status === 400) {
                console.log("Error: 400 Server not found...");
            }

        })
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
                                <button> Edit </button>
                                <button> Delete </button>
                            </li>
                        ))}
                    </ul>
                </div>

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
                            <button type="submit"> Add an Agent </button>
                        </div>
                    </form>
                </div>

            </>
        );
    }
}

export default Agents;