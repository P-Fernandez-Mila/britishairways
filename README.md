# Welcome to British Airways MVP

**Disclaimer:** This project is not ready yet, is under development.

## **Stack**

This project has the following stack:

- NextJS
- React JS
- Tailwind
- Antd
- Jest

## **Approach**

The approach for the implementation is the following:

Create a BFF using NextJS, I did not know of BFF until started the Academy, I implemented a BFF that processes the responses of the API's provided for the exercise and return a JSON with digested data. This BFF is responsible of provide the information to the FE.
On the same NextJS project I created a FE using React for the UI components and Tailwind and Antd for styling.

Due to the tidy schedule I will implement the feature 100% before moving to the next feature, the style was implemented taking a mobile first approach and it is a secondary aspect of this project, I prioritize functionality over design.

Design and business purpose of the app:
The solution aims to provide British Airways customer the tool to check their incoming flights, check they points and miles balance, also It would be nice to have a catalog of a ancillaries for the user to spend their miles, and points.

Login is dummy, any input will change a flag that tracks if the user is logged in or not, this was made to save time to develop main features

## **Design**

<img src="/image.png" alt="image" width="50%" height="auto">
TODO
Check design sketch vs actual implementation

## **Quick start**

To run the project you must copy this repo, install it and run `npm run dev`

## **Test**

Test will be running with Jest using `npm test`

Coverage report can be triggered by `npm coverage`

## **Tech debt**

- This is my first NextJS project, need more polishing
- Increase coverage, the expected test coverage is applied for the Profile page. I need to reply this approach for all components
- Add a DB
- Login dummy
- Data is not linked properly, the data is mocked so the trace between PNR and flights is not present, data is used to simulate the UI but without real data, may be solved with a DB
- Containerization of the solution, I need to learn to use docker first

## **Pages that are nice to have**

- Create Account
