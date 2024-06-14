# Programming Bootcamp Platform - Express Server

This repository contains the backend code for the Programming Bootcamp Platform, built using Node.js, Express, and MongoDB. The platform allows users to join various programming bootcamps, manage their profiles, and handle authentication.

## Table of Contents

- [Technologies Used](#technologies-used)
- [Schemas](#schemas)
  - [User Schema](#user-schema)
  - [Event Schema](#event-schema)
- [Routes](#routes)
  - [User Routes](#user-routes)
  - [Event Routes](#event-routes)
  - [Auth Routes](#auth-routes)
- [Installation](#installation)
- [Usage](#usage)
- [Contact Us](#contact-us)

## Technologies Used

- **Node.js**
- **Express.js**
- **MongoDB**
- **Mongoose**

## Schemas

### User Schema

```javascript
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    contact: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
