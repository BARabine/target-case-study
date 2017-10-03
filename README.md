# Target Case Study

## Description

myRetail is a rapidly growing company with HQ in Richmond, VA and over 200 stores across the east coast. The company’s annual revenue last year was $5 billion and growing at the rate of 10% year over year. myRetail sells general merchandise products, including a fast growing fresh grocery segment. The stores average 80,000 sq. ft. in size and carry around 20,000 products. myRetail wants to provide a multi-channel experience for its customers online.

myRetail is comparing solution options for the online grocery store. Create a web application that does the following:

* Use the provided design docs, desktop.psd and mobile.psd, as general guidelines to create the user interface.
* Use the provided json file, item-data.json, to populate the title, images and price.
* The client side code can be backbone, angular or another framework of your choice. React (additional library’s such as Redux are welcome). Use node to run the application.
* Show the add to cart button only if the item is available online, purchasingChannelCode equals 0 or 1.
* Show the pick up in store only if the item is available instore, purchasingChannelCode equals 0 or 2.
* Create a carousel to scroll through the images

### Deliverables
* Test your code - simulate functional testing needs by generating test scripts (automation test cases preferred).
* Build your code and package using gulp, grunt or other tools of your choice.
* Provide approach to deploy code in live environment - continuous delivery flow diagram will suffice.
* Store code in a public git repository like GitHub, GitLab, BitBucket, or Visual Studio Team Services and forward link to Staffing Specialist and Recruiter.


## How to run

* Clone this repository
* Install dependencies with `npm install`
* Run the web server in development mode with `npm start`
* Open [http://localhost:3000](http://localhost:3000) to view it in the browser

### How to run tests

* Run `npm run test`

### Development workflow
There are many opinions about the best-practice workflow to incorporate development code into a production environment, but the approach described by [https://www.atlassian.com/continuous-delivery/continuous-delivery-workflows-with-feature-branching-and-gitflow](Atlassian) seems to make the most sense to me.  They use an approach called 'branch-per-issue workflow,' where, as the name suggests, each developer would create a branch for each issue or feature they work on, and do all the implementation and testing on that branch.  When complete, they submit a pull request to have it merged into the staging or QA environment for more testing before getting released to production.
