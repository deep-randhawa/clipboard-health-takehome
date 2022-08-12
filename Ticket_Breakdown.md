# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

### Ticket 1
- Title: Create new `facility_agents` table. 
- Description: `facility_agents` table will allow us to save `custom_agent_id` across each Facility.
- Acceptance Criteria: 
    - A new many-to-many relationship table that joins Facility and Agents. Table name = `facility_agents`
    - A new column in `facility_agents` table. Column Name = `custom_agent_id`
    - Validation: `custom_agent_id` should be unique for each Agent in each Facility.
    - Set up migration script and commit to database.
- Time Estimate: 1 day

### Ticket 2
- Title: Set up CRUD functions for `custom_agent_id`
- Description: Create/Read/Update/Delete functions on the `custom_agent_id` will allow the platform to interact with the database
- Acceptance Criteria: 
    - A `create_custom_agent_id` function that creates a new custom_agent_id given `facility_id`, `agent_id` and `custom_agent_id`.
    - A `update_custom_agent_id` function that updates an existing `custom_agent_id` given the `facility_id`, `agent_id` and new `custom_agent_id`. 
    - A `read_custom_agent_id` function that retrieves an existing `custom_agent_id` given the `facility_id` and `agent_id`. 
    - A `delete_custom_agent_id` function that deletes the said record for a specific `facility_id` and an `agent_id`
    - For each of the above functions, validate data before entering into the database. Throw relevent error if data is corrupted or does not exist.
    - Write tests.
- Time Estimate: 2 day