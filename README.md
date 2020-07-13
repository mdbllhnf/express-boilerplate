# Express Boilerplate

A fast and robust ExpressJS boilerplate for building highly scalable APIs.

# Installation
```sh
# Go to project directory
cd path/to/project/directory

# Create the .env file if it's not already created
cp .env.example .env

# Install the dependencies
npm install

# Run on development
npm run dev

# Run on production
npm start
```
# Endpoints documentation

## GET /
Responds with a JSON containing a welcome message.

### Parameters
|name|type|data type|required|default|description|
|--|--|--|--|--|--|
|visitor|query|string|no|Anonymous|The visitor's name|

### Examples
The request:
```sh
curl -X 'base_url?visitor=John'
```
The response:
```JSON
{
    "message": "Hey John ! Welcome to Express Boilerplate."
}
```

# Author

@mdbllhnf <mdbllhnf@gmail.com>
Founder of [Bitweaks Solutions](https://www.bitweaks.com)

# Licence

MIT