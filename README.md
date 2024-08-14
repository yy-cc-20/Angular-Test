# Angular-Test
---

## Table of Contents
- [Features](#features)
- [Technology Used](#technology-used)
- [Installation](#installation)
- [Design Pattern](#design-pattern)
- [Database Design](#database-design)
- [API Endpoints](#api-endpoints)

# Features
- Login
- Forget Password (Account Recovery)
- View My Profile
- Change Password
- View Product List
- View Product Details

# Technology Used
- Frontend: Angular
- Backend: .NET
- Database: MySQL
- Database first approach


# Installation
Create Database
- Find the database migration files at `./Database_Migration` directory
- Run the sql script to create database 'angular-test' in mysql database
- Run the sql script to insert sample data into the database
- Open `./Angular_Test.API/appsetting.json` to change mysql connection string to connect your mysql database

Install Required Package to `Angular_Test.API` Project
```
Install-Package Microsoft.EntityFrameworkCore
Install-Package Microsoft.EntityFrameworkCore.Tools
Install-Package AutoMapper
Install-Package Pomelo.EntityFrameworkCore.MySql
Install-Package PasswordGenerator
```

Install Required Package to `Entities` Project
```
Install-Package Microsoft.EntityFrameworkCore
```

# Design Pattern
Use data transfer objects to map between models and api request/response.

# Database Design
user
- id: char(36) (PK)
- username: varchar(45) (not null, unique)
- password: varchar(45) (not null)
- email: varchar(45) (not null, unique)

product
- id: char(36) (PK)
- name: varchar(45) (not null)
- description: varchar(2000) (not null)
- image_path: varchar(200) (not null)

*Product picture will be retrieved from internet.

product_variance
- id: char(36) (PK)
- info: varchar(45) (not null, unique)
- price: decimal(6,0) (not null)
- product_id: char(36)  (FK) (not null)

# API End Points
- Frontend URL:
- Backend URL: `https://localhost:7046/api`

## Feature: Login
Description: Check the username and password are correct.

API End Point: `POST /user/login`

Request Body:
```
{
  username: string,
  password: string
}
```
Response Body:
```
{
  user_id: string,
  username: string
}
```

## Feature: Forget Password
Description: Send temporary password to user's email.

API End Point: `POST /user/forgetpassword`

Request Body:
```
{
  username: string
}
```
Response Status: `204 No Content`


## Feature: My Profile
Description: Retrieve user info.

API End Point: `GET /user/[id]`

Response Body:
```
{
  username: string,
  email: string
}
```

## Feature: Change Password
Description: Verify current password and change to new password.

API End Point: `POST /user/changepassword`

Request Body:
```
{
  user_id: string,
  current_password: string,
  new_password: string
}

```
Response Body: `204 No Content`

## Feature: Products
Description: Retrieve list of products and find price range of each product.

API End Point: `GET /product`

Response Body:
```
{
  {
    id: string,
    name: string,
    description: string,
    image_path: string,
    lower_price_range: number,
    upper_price_range: number
  },
  {
    id: string,
    name: string,
    description: string,
    image_path: string,
    lower_price_range: number,
    upper_price_range: number
  },
  {
    id: string,
    name: string,
    description: string,
    image_path: string,
    lower_price_range: number,
    upper_price_range: number
  }
}

```

## Feature: Product Details
Description: Retrieve product details by id.

API End Point: `GET /product/[id]`

Response Body:
```
{
  id: string,
  name: string,
  description: string,
  image_path: string,
  product_variance_list: 
  {
    {
      id: string,
      info: string,
      price: number,
    },
    {
      id: string,
      info: string,
      price: number,
    },
    {
      id: string,
      info: string,
      price: number,
    },
  }
}
```