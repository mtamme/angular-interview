# Task 1: Routing

* Extend the router to make the `BasicFormComponent`available under `/form`

# Task 2: Form handling

* Refactor the given form into an Angular form Group
  * Add form validation:
    * Username: required, min length 3
    * Email: required, valid email format
    * Birthdate: required
    * Gender: required
  * Display validation messages below each field if validation fails
* Handle submission of the form on the click of a button
  * Post the customer information using the `CustomerService`
  * Show a loading spinner while the submission is in progress
* Display a toast message on success
* Add unit tests for the component

# Task 3: Display customer information

* Show the customer information provided by the `CustomerService` in an angular component
* It should be displayed within the `Overview` component
* Pass the customer as an input to the component you create
* Show a loading spinner while the component is loading

