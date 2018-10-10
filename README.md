# **Form Wizard**

![Welcome](/public/img/Welcome.png)

### Features

1. Simple authentication
2. Form validators and default browser form errors
3. Progress bar
4. Nicely formatted shipping label
5. Responsive design

### User Stories

1. A user needs to log in to see the wizard. (Since there's no database, any credentials are deemed satisfactory to get passed this gate)
2. A user can fill in various details (Sender address, receiver address, weight, desired shipping method)
3. A user may navigate between stages of the form process by using buttons.
4. A user go back and edit their answers at any time via navigation buttons (Prev & Next). If the user does not like their changes, Prev button can be used to cancel the changes. Next button is used to save new answers.
5. A user can see a progress bar highlighting percentage of completion.
6. A user is presented a total cost for shipping the package in a summary page.
7. A user can toggle between views of the wizard (to go back and edit) and the label (reflecting information put in).
8. A user can open the print prompt with print button on the completed label view.

### Technology

1. React
2. Prop-Types
3. Bootstrap
4. Sass

### Running app locally

1. `npm install` in terminal
2. `npm start` which will open the app on http://localhost:3000/ in your preferred web browser
3. To log into app, simply type in anything. As security was not a consideration for this app, there are only validators to check if username and password fields are empty.

### Room for improvement

1. This application relies heavily on boolean to toggle between views. This can be improved with React-Router which was not used as it was not specified by prompt.
2. Additional form validators
3. The authentication higher order component can be enhanced to be more than a conditional renderer.

## Screenshots

### Auth

![Auth](/public/img/Auth.png)

### Steps 1 - 5

![Step-1](/public/img/Step-1.png)
![Step-2](/public/img/Step-2.png)
![Step-3](/public/img/Step-3.png)
![Step-4](/public/img/Step-4.png)
![Step-5](/public/img/Step-5.png)

### Completed Label

![Label](/public/img/Label.png)

### Print Prompt

![Print-prompt](/public/img/Print-prompt.png)
