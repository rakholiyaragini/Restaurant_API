## Restaurant Management API


This API is designed to manage various aspects of a restaurant, including staff roles, customer bookings, orders, menus, and ingredients. The system allows for efficient handling of restaurant operations, from managing staff and customer information to processing orders and tracking the menu items and ingredients used.


## Project Stack

- **Backend**: Node.js
- **Web Framework**: Express.js
- **Database**: MongoDB
- **Environment Variables**: dotenv


## Features

- **Staff and Roles Management**: Maintain records of staff members and their associated roles.
- **Customer Management**: Store customer details, including contact information.
- **Table and Booking Management**: Track table availability and customer bookings.
- **Order Processing**: Record customer orders, along with details of menu items and quantities.
- **Menu Management**: Manage the restaurant's menu, including details of individual menu items and their ingredients.
- **Ingredient Tracking**: Track ingredients and their types used in different menu items.

## Entity Details

# 1. Staff and Roles

- **Staff_Role**: Represents various roles of the staff (e.g., waiter, chef).

- **staff_role_code**: The unique code for the role.
- **staff_role_description**: A description of the staff role.
- **Staff**: Stores information about the restaurant staff.

- **Backend**staff_id: Unique identifier for a staff member.
- **staff_first_name** , **staff_last_name**: The name of the staff member.
Linked to **Staff_Role** for role information.

# 2. Customer

- **Customer**: Stores customer details.

- **customer_id**: Unique identifier for the customer.
- **customer_first_name** , **customer_surname**: Name of the customer.
- **phone_number** , **cellphone_number**: Customer's contact numbers.
- **email_address**: Customer's email address.

# 3. Booking

- **Booking**:Represents a customer's reservation.

- **booking_id**: Unique identifier for the booking.
- **date_of_booking**: Date when the booking was made.

# 4. Table

- **Table**: Represents tables in the restaurant.

- **table_number**: The number of the table.
- **table_details**: Additional information regarding the table.

# 5. Order

- **Order**: Represents an order placed by a customer.
- **order_id**: Unique identifier for the order.
- **order_date_time**: Timestamp of the order.

# 6. Menu

- **Menu**: Represents the menu of the restaurant.

- **menu_id**: Unique identifier for the menu.
- **menu_date**: The date of the menu.

- **Menu_Item**: Represents individual items on the menu.

- **menu_item_id**: Unique identifier for the menu item.
- **menu_item_description**: Description of the menu item.
- **menu_item_price**: Price of the menu item.

# 7. Order Menu Item

- **Order_Menu_Item**: Links orders to the items ordered from the menu.

- **order_menu_item_id**: Unique identifier for the order menu item.
- **order_menu_item_quantity**: Quantity of the ordered item.
- **order_menu_item_comments**: Any special instructions or comments for the item.

# 8. Ingredients and Types

- **Ingredient_Type**: Represents types of ingredients (e.g., vegetables).

- **ingredient_type_code**: Unique code for the ingredient type.
- **ingredient_type_description**: Description of the ingredient type.

- **Ingredients**: Represents ingredients used in menu items.

- **ingredient_id**: Unique identifier for the ingredient.
- **ingredient_name**: Name of the ingredient.

- **Menu_Item_Ingredient**: Links menu items to their ingredients.

- **menu_item_id**: The menu item that uses the ingredient.
- **ingredient_id**: The ingredient used.
- **item_quantity**: The quantity of the ingredient used in the menu item.

### Database Design

The database is structured in a relational manner, with foreign key relationships connecting tables where necessary. Each entity in the system, such as staff, customers, and menu items, has its own dedicated table, ensuring data integrity and clarity.

## How to Use the API

- **Endpoints** 

- **Staff Endpoints**: Manage staff and their roles.
- **Customer Endpoints**: Handle customer information and bookings.
- **Order Endpoints**: Create, view, and manage customer orders.
- **Menu Endpoints**: Manage menu items and ingredients.

### Steps to Install

1. Clone the repository:
   
```bash
git clone https://github.com/rakholiyaragini/Restaurant_API.git
```


2. Install dependencies:

```bash
npm install
```

3. Set up environment variables: Create a .env file in the root of the project and add the following details:

```plaintext
PORT=3000
```
4. Run the server:

```bash
npm start
```
5. Open the app in your browser:
```bash
http://localhost:3008
```

### Environment 

The project requires the following environment variables:

- **PORT**: The port on which the server will run (e.g., 3000).
- **MONGODB_URL**: MongoDB connection string, provided by MongoDB Atlas or local MongoDB instance.
- **JWT_SECRET**: A secret key for signing JWT tokens.


### Usage
Once the server is running, you can interact with the API using tools like Postman. Here are the main steps to use the API:

## Example API Call

## POST /orders

```bash
{
  "customer_id": 1,
  "staff_id": 2,
  "order_menu_items": [
    {
      "menu_item_id": 3,
      "quantity": 2,
      "comments": "Extra cheese"
    }
  ]
}
```

## Folder Structure
``` bash
/RESTAURANT API
 ├── /config // Configuration files
 ├── /controllers // Logic for handling requests
 ├── /models // Mongoose models
 ├── /routes // Express.js routes
 ├── index.js // Main entry point of the application
 └── package.json // Project dependencies and scripts
 ```

**Contributor**: (https://github.com/rakholiyaragini)

If you have any Doubts or suggestions,  contact me at raginirakholiya123@gmail.com

