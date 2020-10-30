React Field Agent
    * Goal: start a React front-end for the Field Agent HTTP service

High Level Requirements
    * [ ] Display all agents
    * [ ] Add an agent
    * [ ] Update an agent
    * [ ] Delete an agent
    
Technical Requirements
    * [ ] Use Create React App
    * [ ] Use fetch for async HTTP
    * [ ] do not change Field Agent HTTP Service
        * [ ] check to make sure my HTTP service is actually working first
    * [ ] Use a CSS framework (optional, if time)
    * [ ] Test at least one component (optional, if time)
    * [ ] 

Basic Task List (minimum requirements)
    * [x] create GitHub repository
    * [x] create new React application with create-react-app field-agent-ui
    * [x] push new app to github repo
    * [x] delete unnecessary files from React project
    * [x] setup files I want in React project
    * What should the user see when the UI first renders?
        * form to add an agent at top with add/submit button
        * display all agents
    * [ ] Display all agents (agent id, first, middle, last name, not all properties)
        * [ ] may need to include empty values for missing properties in constructor
        * [ ] include edit button to the right
        * [ ] include delete button to the right
        * [ ] Delete an agent
        * make button to the right of an agent delete that agent
    * [ ] Add an agent
        * [ ] Create forms and submit button next to form at top of page
        * [ ] reject invalid data
        * [ ] cancel button (reverts info to before add/cancels add)
            * [ ] put this next to submit button
    * [ ] Update an agent
        * [ ] include form for each editable attribute
        * [ ] submit button edits agent and all agent list
        * [ ] cancel button reverts info to before edit/cancels edit
    * [ ] Delete an agent
        * [ ] have delete button next to each agent that allows for deletion

Advanced Task List (add-ons if there's time)
    * [ ] Display all agents
        * [ ] include button that expands so you can see all properties
    * [ ] Add an agent
        * [ ] Make this a separate page
    * [ ] Update an agent
        * [ ] make this a separate page
    * [ ] Delete an agent
        * [ ] make this a separate page that expands so you can see all properties
        * [ ] include an "are you sure" alert

Questions
    * 