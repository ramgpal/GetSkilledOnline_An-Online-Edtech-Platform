
# GetSkilledOnline Online Education Platform (MERN App)

## Project Description

GetSkilledOnline is a fully functional ed-tech platform that enables users to create, consume, and rate educational content. The platform is built using the MERN stack, which includes ReactJS, NodeJS, MongoDB, and ExpressJS. GetSkilledOnline aims to provide:

- A seamless and interactive learning experience for students, making education more accessible and engaging.
- A platform for instructors to showcase their expertise and connect with learners across the globe.

## System Architecture

The platform follows a client-server architecture with three main components:

- **Front End**: ReactJS for dynamic, responsive user interfaces.
- **Back End**: NodeJS and ExpressJS for APIs handling user authentication, course management, and content processing.
- **Database**: MongoDB for flexible and scalable data storage.

## Front-end

### Pages

**For Students:**

- **Homepage**: Introduction and links to courses.
- **Course List**: List of available courses with descriptions and ratings.
- **Wishlist**: Display of wishlist courses.
- **Cart Checkout**: Course purchase completion.
- **Course Content**: Course materials including videos.
- **User Details**: Student account details.
- **User Edit Details**: Edit account details.

**For Instructors:**

- **Dashboard**: Overview of courses, ratings, and feedback.
- **Insights**: Course metrics and analytics.
- **Course Management**: Create, update, delete courses, manage content and pricing.
- **View and Edit Profile Details**: Edit account details.

**Frameworks and Tools**:

- ReactJS, CSS, Tailwind, Redux.

## Back-end

### Features and Functionalities

- **User Authentication**: Email/password sign-up, login, OTP verification, password reset.
- **Course Management**: CRUD operations for courses and content management.
- **Payment Integration**: Razorpay for handling payments.
- **Cloud Media Management**: Cloudinary for media storage.
- **Markdown Formatting**: For course content.

### Frameworks and Tools:

- Node.js, Express.js, MongoDB, JWT, Bcrypt, Mongoose.

### Data Models

- **Student schema**: Name, email, password, course details.
- **Instructor schema**: Name, email, password, course details.
- **Course schema**: Course name, description, instructor details, media content.

## API Design

RESTful API using Node.js and Express.js, with JSON for data exchange.

### Sample Endpoints

- **/api/auth/signup (POST)**: Create a new user account.
- **/api/auth/login (POST)**: Log in and generate JWT token.
- **/api/courses (GET)**: List all courses.
- **/api/courses/:id (GET)**: Get course details by ID.
- **/api/courses (POST)**: Create a new course.
- **/api/courses/:id (PUT)**: Update a course by ID.
- **/api/courses/:id (DELETE)**: Delete a course by ID.

### Sample Requests and Responses

- **GET /api/courses**: List of all courses.
- **POST /api/courses**: Create a new course.
- **PUT /api/courses/:id**: Update a course by ID.
- **DELETE /api/courses/:id**: Delete a course by ID.

## Deployment

Set up the hosting environment and infrastructure, create deployment scripts and configuration files.

## Future Enhancements

- Interactive features for students and instructors.
- Advanced analytics for instructors and admin.
- Expanded payment options.
- Enhanced user management and security.

---

GetSkilledOnline provides an immersive learning experience for students and a platform for instructors to showcase their expertise, supported by a robust and scalable technical infrastructure.
