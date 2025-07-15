# LASHP Website -

- Stack: React, TypeScript, Tailwind
- Important info: Deployed on Netlify. No CMS or backend as of 7/15/25.

## How to run the project locally

- Clone this repository
- Run `npm install` to install the dependencies
- Run `npm run dev` to start the development server
- Open `http://localhost:5173` in your browser

### 11-8 changes, reference doc:

- Online feedback form, will be in first section, link to surveymonkey

11-11 changes, reference doc:
Use 241106_LASHP GPA Website Meeting Materials Mockup_DRAFT-01 1.png as reference for changes, use collapsible diagram code.
Make Diagram a reusable component, and add it to Meetings.tsx
Make the pdfs an array of objects, and map through them to display them in the meetings component.

11/13 - 11/15

- Post recordings of virtual meetings, five videos
- confirm with steve we can use vimeo DONE


7/15 Branches Info:

Main is currently deployed to the lastatehistoricparksgps.com
7-15_interim_changes is the deployed branch to viz-test-env. Do not merge with main, any future changes to this version should just merge to 7-15_interim changes to prevent a merge conflict with later branches when they are finalized.
integrate_360_with_main is the final project with the virtual room on there, and can be merged right with main to deploy to the main site.
