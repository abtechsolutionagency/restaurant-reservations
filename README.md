# Thinkful Final Capstone: Seatable Restaurant Reservations

### [Live Version](https://restaurant-reservation-sk.herokuapp.com/)

## Project overview

Seatable is an application that allows restaurants to manage reservations. Users can create, edit, cancel and search reservations as well as seat them at tables when they are available. Users can also create tables, and clear them when the customer leaves.

The application is web-based and fully-responsive. It features a simple user experience and a clean and uncluttered UI.

It is built using:

- React.js
- Node.js
- Express.js
- Knex.js
- PostgreSQL
- Boostrap 5
- CSS
- Heroku

## To Install Locally

1. Run `npm install`
2. Copy `.env.sample` in back-end folder and add postgreSQL database links
3. Run `npm run start:dev` from root folder

## Front-end Features

#### Dashboard View

<img src="screenshots/dashboard.png" width="650px">&nbsp;

This is the home screen of Seatable. Users can view reservations by date and see the status of all of the tables in the restaurant.

From here, users can manage a reservation by creating, editing, seating or, canceling, as well as adding tables and finishing them when they are clear.

#### Create a new reservation

<img src="screenshots/create-reservation.png" width="650px">&nbsp;

The create form is where new reservations are created. The form validates reservations based on the working days and hours of the restaurant. Reservations made in the past are also invalidated. Once a new reservation is created, the user is directed to the dashboard view selected for the date of the newly created reservation.

#### Edit a reservation

<img src="screenshots/edit-reservation.png" width="650px">&nbsp;

If a reservation is booked, but not yet seated, its information can be edited. The same validations applied to creating a reservation are also applied here.

#### Seat a reservation

<img src="screenshots/seat-reservation.png" width="650px">&nbsp;

When a table is ready and the reservation is present, users can 'seat' the reservation by selecting a table. Only tables with large enough capacity to accomodate the party can be selected.

#### Search for reservations

<img src="screenshots/search.png" width="650px">&nbsp;

Users can look up a reservation by searching for a users phone number. From here, resrvations can be edited, cancelled or seated.

#### Create a new Table

<img src="screenshots/create-table.png" width="650px">&nbsp;

This form allows users to create a new table. Tables can be named and assigned the amount of people it can seat.

## API Features

Backend deployed at: https://rr-sk-backend.herokuapp.com/

### Routes

#### `/reservations`

- `GET` returns all columns for all reservations in the database
- `POST` creates a new reservations with the following required fields:
  - First Name
  - Last Name
  - Mobile-Number
  - Reservation Date
  - Reservation Time
  - Number of people in party

#### `/reservations?date=xxxx-xx-xx`

- `GET` returns all columns for all reservations in the database with matching date and status of `booked` or `seated`

#### `/reservations?mobile_number=xxx-xxxx`

- `GET` returns all columns for all reservations in the database with matching phone number

#### `/reservations/:reservation_id`

- `GET` returns all columns for the requested reservation
- `PUT` updates a new reservations with the following required fields:
  - First Name
  - Last Name
  - Mobile-Number
  - Reservation Date
  - Reservation Time
  - Number of people in party

#### `/reservations/:reservation_id/status`

- `PUT` updates the status of a reservation, including canceling it

#### `/tables`

- `GET` returns all columns for all tables in the database
- `POST` creates a new table with the following required fields:
  - Table Name
  - Capacity

#### `/tables/:table_id/seat`

- `GET` returns all columns for all tables in the database
- `PUT` updates the reservation_id associated with a table, giving that reservation the status of `seated`:
- `DELETE` removes a reservation_id from a table, which 'finishes' the table, and sets the status of the previously seated reservation to `finished`
