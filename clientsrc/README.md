Capstone Project - LandScuber
Project Members:
  Nicholas Bynum
  David Folk
  Robert Gumeny
  Preston Hess
  Ashley Smith
  
Summary of App:
Landscüber was built to connect Customers to local Providers, and arrange on-demand services. While the foundation was designed to be scalable and include unlimited service options, the MVP product targets the landscaping industry. In this version, Customers are able to post a job with details such as yard size and a custom price, then any Provider is able to claim and complete the job. 

In addition to the technical considerations, Landscüber was developed with social distancing and the gig-economy in mind. This application allows Customers to remotely schedule services as well as communicate additional job details through a live chat function, effectively eliminating the need for face-to-face interactions. Providers are empowered to earn additional income, while managing their own schedule. 

From a business perspective, we focused on creating an effective conversion pipeline that starts with the landing page and continues throughout the application. Specifically, details such as the customer reviews on the landing page are known to foster trust - which increases the chance of converting a new user. Other details like allowing Customers to rate their Providers, offers important feedback to the business, as well as another point of engagement for the users. 

Tech Highlights:
Integration with Auth0 for secure login.
Utilizing Sockets we created a live chat feature that allows the Customer and Service Provider to communicate instantly for the duration of the service period, eliminating the need to exchange personal information.
The Service Provider can get directions provided by Google Maps isntantly through the Job page.
Live status updates are provided through all stages of the job from intitalizatin through acceptance to completion.

Technologies Used:
On the front-end LandScuber was built using Vue.js, Bootstrap, Sass, JQuery, Popper.js, Sweetalert2, Vuex and Axios.
On the back-end we used Node.js, Express, Socket.io, Mongoose, and MongoDB
We integrated Auth0 to manage authentication services, and are hosted on Heroku.
