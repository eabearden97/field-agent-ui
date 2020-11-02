React Field Agent
    * Goal: start a React front-end for the Field Agent HTTP service

High Level Requirements
    * [x] Display all agents
    * [x] Add an agent
    * [x] Update an agent
    * [x] Delete an agent
    
Technical Requirements
    * [x] Use Create React App
    * [x] Use fetch for async HTTP
    * [x] do not change Field Agent HTTP Service
        * [x] check to make sure my HTTP service is actually working first
    * [ ] Use a CSS framework (optional, if time)
    * [ ] Test at least one component (optional, if time)

Basic Task List (minimum requirements)
    * [x] create GitHub repository
    * [x] create new React application with create-react-app field-agent-ui
    * [x] push new app to github repo
    * [x] delete unnecessary files from React project
    * [x] setup files I want in React project
    * What should the user see when the UI first renders?
        * form to add an agent at top with add/submit button
        * display all agents
    * [x] Display all agents (agent id, first, (middle), last name, not all properties)
        * [x] may need to include empty values for missing properties in constructor
        * [x] include edit button to the right
        * [x] include delete button to the right
    * [x] Add an agent
        * [x] Create forms and submit button next to form at top of page
        * [x] reject invalid data
        * [ ] cancel button (reverts info to before add/cancels add)
            * [ ] put this next to submit button
    * [x] Update an agent
        * [x] include form for each editable attribute
        * [x] submit button edits agent and all agent list
        * [ ] cancel button reverts info to before edit/cancels edit
    * [x] Delete an agent
        * [x] have delete button next to each agent that allows for deletion
    * [x] Make it so that you only see one form at a time (add/edit)
        * this is accomplished with a new variable in constructor
        * don't forget to set default
    * [x] Add a getAgents method to fetch the list of agents... this will help with code reuse
    * [x] Add a setNullState method to set the state back to null after every operation
        * this should be in the (if response.status === 200/201/204) 
            * call setNullState, then call getAgents
    * [x] Implement global error handling
        * just add an errors array to constructor and add any new errors to that
        * [x] print any errors to the page in a list

Advanced Task List (add-ons if there's time)
    * Display all agents
        * [ ] include button that expands so you can see all properties
    * Add an agent
        * [ ] Make this a separate page
    * Update an agent
        * [ ] make this a separate page
    * Delete an agent
        * [ ] make this a separate page that expands so you can see all properties
        * [ ] include an "are you sure" alert

Questions
    * Why is agent.id undefined in render()?
    * What do I do if middle name is null? 
        * As of now, solution would be to not include optional values...
    * make it so that when you press edit next to an agent's name, it autofills
    the edit fields with the current values
    * why would you throw a new Error in the "else" part of a fetch response handling?
        * this just crashes the page... wouldn't we want to add this to the errors array?

Next Up: 