#Sixteen Bars API
#Instructions:
You can make reqest to any of the routes below and get back either specific or multiple JSON objects. The root url is sixteen-bars.herokuapp.com.

###For Example [Example API call][https://sixteen-bars.herokuapp.com/api/poems]
 a GET request to sixteen-bars.herokuapp.com/api/poems would return all JSON objects for poems.

---
#Routes:
| PATH          |  METHOD | USE                    |
| ------------- |:-------:| ----------------------:|
| /api/poems/   | POST    | Posting a new Poem     |
| /api/poems/   | GET     | Get all Poem           |
| /api/poems/:id| GET     | Shows individual Poem  |
| /api/poems/:id| DELETE  | Deletes individual Poem|
| /api/poems/:id| PUT     | Edits individual Poem  |

##WIP Routes:
These routes are implented in the "addingPassportToBackend" branch but not yet implented into master

| PATH                   | METHOD | USE                     |
| ---------------------- |:------:| -----------------------:|
| /auth/facebook         | GET    | Passport-Facebook Auth  |
| /auth/facebook/callback| GET    | Passport-Facebook Auth  |
---

##Middleware/Technologies:
1. Passport-facebook - For authentication via Facebook.
2. method-override - To give us access to restful methods(more than just GET AND POST).
3. bodyParser - To allow the api to recieve form data.
4. Cors - Resolved issue with the angualr front-end pulling data, Not comepletey sure of the extent of what it's doing.

---

#Known Issues:

1. Authentication with facebook via Passport is not functional.
