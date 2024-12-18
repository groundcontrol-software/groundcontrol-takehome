# Overview

In this assignment, you will be building a user dashboard. Customer support will use this to view information on all of the users, and have the ability to drill down into a given user's information, which will have to be sorted properly.

# Instructions

1. Clone (**please, don't fork!**) this repository and create a new branch for your development work
1. Create your implementation following the [Specification](#specification) below
1. Add instructions on how to run your implementation to the [Getting Started](#getting-started) section.
1. In the [follow-up questions](#follow-up-questions) section below, respond inline to each of the questions.
1. Commit your implementation and answers to a new private repo in your personal GH and give `@gndctl-mehul`, `@gndctl-matt`, and `@nick-gndctl` access to the repo.

**Guidelines:**

- Do not spend longer than two hours on your implementation, a perfect implementation is not required or expected. Please move on to the [follow-up questions](#follow-up-questions) after that.
- The application has been pre-built with Next.js, Tailwind, and Shadcn. You can build on top of this, or start from scratch if you wish.
- Using AI is allowed and encouraged. However please document anywhere in the codebase where you used AI, and how you used it.

# Specification

You will build the following functionality:

- [ ] Load a list of users from the provided endpoint (See [Data](#data))
- [ ] Display the users in table, showing their name, number of reports, and how long they have been a user for (in a human readable format)
- [ ] You should be able to sort the table by name (alphabetically) and number of reports (asc/desc)
- [ ] When you click on a user's row, display a new component beneath the table that show's a list of the users reports. Clicking on a report's row should display a new component that shows a list of "detail numbers" of the report
- [ ] Make sure the list of "detail numbers" is sorted in ascending order. As an example, here is a list in ascending order: [1, 1.1, 1.1.1, 1.2.1, 2, k3, k3.1, 4, 7, k10, 12]
- [ ] Add an input at the top of the page that lets a user search by a user ID and fetch the user's data and display only that data
- [ ] If the user ID is not found, display an error message

## Data

The client list can be loaded by making an HTTP request to the backend API

- `/api/users`

The JSON response is structured as follows:

```js
{
  "id": 1,
  "name": "John Doe",
  "num_reports": 5,
  "reports": [
    {
      "id": 1,
      "detail_numbers": [1, 2, 3, 4, 5]
    },
    {
      "id": 2,
      "detail_numbers": [1, 2, 1.1, 1.3, 4, 5]
    },
    {
      "id": 3,
      "detail_numbers": [1, 2.1, 2.1.1, 2.2, 3, 4, 5]
    }
  ],
  "start_date": "2024-01-01",
}

````

The reports for a single user can be loaded by making an HTTP request to the backend API

- `/api/users/<user_id>/reports/<report_id>`

The JSON response is structured as follows:

```js
{
  "detail_numbers": [1, 2, 3, 4, 5]
}
```

# Getting Started

To run this example, you must have `npm` installed.

  1. Run `npm install`
  2. Run `npm run dev`
  3. Visit `localhost:3000`

# Follow-Up Questions

  1. Describe which task you found most difficult in the implementation, and why.

  2. If there were no time restrictions for this exercise, what improvements would you make in the following areas:
      - Implementation
       
      - User Experience
       
      - Performance

  3. How would you structure your implementation differently if there were 100, 1000, 1M users? What if there were 1M reports? What if there were 1M detail numbers per report?

# Evaluation Criteria

You will be evaluated out of a total of 50 points based on the following criteria.

- Learning Exercise (30 points total)
  - **Functionality (20 points)**: is the requested functionality implemented as described without bugs?
  - **Code Quality (10 points)**: is the code well structured and easily read? is the code optimized for performance?
  - **Bonus (3 maximum)**: bonus points are awarded for anything that goes above and beyond the items in the specification.  For example, a responsive implementation, or improvements for scalable performance.
- Follow Up Questions (20 points total)
  - Question 1 (5 points)
  - Question 2 (5 points)
  - Question 3 (5 points)
