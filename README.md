# Employee Tracker Web Application using MERN #
### Overview ###

** Employee Tracker ** is a internal management app that allows the managers/supervisors to create/delete employees and lets employees to create time-off requests. This application is built using **MongoDB**, **Express**, **React**, and **Node**.

1. Home - landing page with world clock and employee daily status.
2. Calendar - internal company events.
3. Employees - create and delete employee data.
4. Time-off - employees can create time-off request. managers can approve or reject the requests. 

### Components Structure ###
```
src
├── components
│   ├── layout
│   │   └── Home.js
│   │   
│   ├── containers
│   │   ├── index.js
│   │   ├── style.js
│   │   ├── Main.js
│   │   ├── Nav.js
│   │   ├── Calendar.js
│   │   ├── Employees.js
│   │   ├── Vacations.js
│   │   └── style.js
│   │   
│   └── views
│       ├── index.js
│       ├── WorldClock.js
│       ├── EmployeeStatus.js
│       ├── Employee.js
│       ├── Vacation.js
│       ├── CreateEmployee.js
│       └── CreateVacation.js
│
├── utils
│   ├── index.js
│   ├── events.js
│   └── APIManager.js
│ 
└── app.js
```
- - - -

**Live application** [Link](https://final-project-deokpyo.herokuapp.com/)