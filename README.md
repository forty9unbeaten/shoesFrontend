# React + APIs in a Nutshell

Now that you've created an API with Django Rest Framework (DRF), let's put that API to use!

## IMPORTANT

This repository is designed to be used with:
[Django REST API](https://github.com/forty9unbeaten/djangoRESTapiShoes)

## Django REST API & React

You all remember [React](https://reactjs.org/)...right? Well. it's just the tool we need for accessing the data from our API. In this assessment, we'll create a Single Page Application (SPA) that fetches data from our backend API and displays it on our React frontend.

## Your Task

For this assessment, we will be creating a new React frontend and reusing our backend from Django ReST Framework: APIs in a Nutshell

### Frontend

Create a new react app. You'll want to use something like Facebook's [Create React App](https://github.com/facebook/create-react-app/blob/master/README.md).

Please check the documentation, because this project's documentation is frequently updated. You can use either npm or yarn as your package manager, it's up to your personal preference.

This react app will be relatively simple. We don't need to worry about using Redux, and we just need to create one component to handle everything we need.

#### Requirements

-   Uses [fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) to get data from your Django Rest Framework API → [AJAX FAQ](https://reactjs.org/docs/faq-ajax.html)
-   Displays all instances of Shoe on a single page
-   Each attribute of a given Shoe is displayed:
    -   size
    -   brand name
    -   manufacturer
    -   color
    -   material
    -   shoe_type
    -   fasten_type

### Backend

Our backend API is already functional, but we do need to make some changes before it will talk to our frontend. The frontend will be displaying shoes, so be sure to add at least 5 new instances of shoe to your backend.

In addition, we'll need to worry about [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) DRF has a [documentation page](https://www.django-rest-framework.org/topics/ajax-csrf-cors/#cors) on how to handle CORS via a python package called [django-cors-headers](https://github.com/ottoyiu/django-cors-headers/)

Use this package to allow your frontend to fetch data.
