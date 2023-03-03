# Adam-Sinsuat

Depedendencies:
"*"React-Redux
"*"ReduxJS Toolkit
"*"Axios
"*"SheetJS-Style

This project is about retrieving data from an api: "https://jsonplaceholder.typicode.com/posts", and then display the response data to the UI. It also features reduxjs toolkit for easy manipulation of states and data. Axios is used for API calls. And SheetJS-Style is used for designing the Excel File and for exporting it.

Steps:
  1.) Get the data from the "https://jsonplaceholder.typicode.com/posts" url using the getDataAPI slice.
  2.) Store the response data in the userData slice array of object
  3.) Display the userData's data array of object in the APIDisplay component
  4.) Export the data userData's data array of object into the ExportExcel component's excelData props
  5.) Click the ExportExcel's button component to export the data from the APIDisplay component and save it as an Excel File.


  The data from the url:
  userId, id, title, body.

Components:

  Slices:
  *getDataAPI.js - this is the slice where the data from the url: https://jsonplaceholder.typicode.com/posts, will be requested.
        
        Create a new createApi function
        export const getDataAPI = createApi({
        
        Sets the reducerPath name to "getDataAPI"
        reducerPath: "getDataAPI",
        
        Data fetching method
        baseQuery: fetchBaseQuery({
          Sets the url for for the API
          baseUrl: "https://jsonplaceholder.typicode.com/",
        }),

        Created an endpoint object
        endpoints: (builder) => ({
        
        Sets the endpoint object function name to getAllUser
        getAllUser: builder.query({
        query: () => ({
              Adds the endpoint "posts" to the baseUrl where it will get the data from.
              url: "posts",
              Set the method to GET, signifying it will be getting a data from the url
              method: "GET",
              }),
            }),
          }),
        });


  *userData.js - the slice where the array of object will be stored.
  
        Creates a new slice
        export const userDataSlice = createSlice({
    
        Sets the slice name to "user"
        name: "user",
      
        Creates an initial state
        initialState: {
      
        State array for holding the data from getDataAPI's getAllUserQuery() endpoint function
        userData: [],
        },

        List of reducer functions
        reducers: {
    
          A reducer function for pushing the data from the dispatched data from the APIDisplay component
          addUsers: (state, action) => {
        
              Pushes the payload data received from the responseInfo variable from te component APIDisplay
              to the userData state 
              state.userData.push(action.payload);
              },
            },
        })

        Add the addUsers reducer to the userDataSlice's actions
        export const { addUsers } = userDataSlice.actions;
        
        
  Displays:
  *APIDisplay.js - This is where the data pulled from the getDataAPI's reducer: getAllUserQuery, will be displayed.
                    
    variables:
    
      This is the state selector for retrieving the data from the userData state from the userData slice.
      let getUsers = useSelector(state => state.user.userData);
    
      This is the variable for using the dispatch function of the react-redux. This will be used to call
      the reducers from the getDataAPI and userData slices.
      const dispatch = useDispatch();
    
      Variable for retrieving the response data from the getDataAPI slicer getAllUserQuery.
      const responseInfo = useGetAllUserQuery();
    
      Used a useEffect to refresh the page when responseInfo now has data and to push
      those data into the addUsers reducer from the userData slice.
      useEffect(() => {

          Created an array for temporary storage of the data from responseInfo in order to change the object's name
          const newArray = [];

          Condition for checking if responseInfo has data. If it has data, it will then perform a forEach function
          where each object value will be assigned a new name. If it doesn't have any data, it will do nothing.
          responseInfo.data ? (
              _.forEach(responseInfo.data?.slice(0, 5), function (data) {
                  newArray.push({ ID: data.id, UserID: data.userId, Title: data.title, Body: data.body })
              })
          ) : "";

          Condition for checking if newArray has a data stored. If it has some data, then it will iterate
          each data and it will then call addUsers reducer from userData slice and pass each object data.
          In the addUsers reducer, it will push each object data to the userData state.
          If it doesn't have any data, it will do nothing
          newArray.length ? (
              _.forEach(newArray, function (data) {
                  dispatch(addUsers(data))
              })
          ): "";
          responseInfo.data is used as a condition for when the useEffect will activate
      }, [responseInfo.data])


      UI elements:
    
      Checks if responseInfo has any data and if it does, it will map the data to the UI, and if it doesn't
      it will return a display with a text saying "No Post Yet"
      const userList = getUsers.length ? (
         getUsers.map((user) => {
              return (
                  <React.Fragment key={user.ID}>
                      <Card variant="outlined" sx={{ my: 1 }}>
                          <CardContent>
                              <Typography textAlign="center">ID: {user.ID}</Typography>
                              <Typography textAlign="center">UserID: {user.userID}</Typography>
                              <Typography textAlign="center">Title: {user.Title}</Typography>
                              <Typography textAlign="center">Body: {user.Body}</Typography>
                          </CardContent>
                      </Card>
                  </React.Fragment>
              );
          })
      ) : (
          <p>No Post Yet</p>
      )
    
    Passes the getUsers variable to the excelData prop of the ExportExcel component
    <ExportExcel excelData={getUsers} fileName="UserData Report Sheet" />
    
    Function Component:
  
    *ExportExcel.js - This is the component for the download button as well as where the data will be converted and exported as an Excel file
  
      variables:
      
      Custom ExportExcel function
      const ExportExcel = ({ excelData}) => {}
      
      excelData is the prop for importing the getUsers object from the APIDisplay component
      
        Flattens the excelData array of object for it to be properly formatted when converting it into an Excel file.
        variable for holding the flattened excelData
        const rows = excelData.map(row => ({
        
            This the userID number of the data
            UserID: row.UserID,
            
            This is the ID numbrt of the data
            ID: row.ID,
            
            This is the Title text of the data
            Title: row.Title,
            
            This is the Body text of the data
            Body: row.Body
        }))

        Convert the rows object into a xlsx worksheet
        const worksheet = XLSX.utils.json_to_sheet(rows);
        
        Appends a new book
        const workbook = XLSX.utils.book_new();
        
        function:
        This is called whenever the download button is being pressed
        const exportToExcel = async () => {}
      
        Sets the book's name to Sheet1
        XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");

        Sets the headers value into ID, User ID, Title, and Body.
        XLSX.utils.sheet_add_aoa(worksheet, [["ID", "User ID", "Title", "Body"]], { origin: "A1" });

        Set column width for each object data
        worksheet["!cols"] = [{ width: 4 }, { width: 8 }, { width: 70 }, { width: 180 }];

        Create an XLSX file and try to save as UserData.xlsx
        XLSX.writeFile(workbook, "UserData.xlsx", { compression: true });

    UI elements:
    return (
        <>
            <Tooltip title="Download UserData">
                {/* Pressing this button will call the exportToExcel to export the excelData into an Excel File */}
                <Button variant="contained" onClick={(e) => exportToExcel(fileName)} color="primary"
                    style={{ cursor: "pointer", fontFize: 14 }}
                >Download UserData as Excel</Button>
            </Tooltip>
        </>
      )
    }

## Features

- React-Redux, it is a third-party library that allows managing application state. It can be used as a central storage area so components only need to retrieve data from the same place and since it comes from the same central storage, data can be instantaneously synced.

- Axios is a promise-based HTTP Client for node.js and the browser. It is isomorphic (= it can run in the browser and nodejs with the same codebase). On the server-side it uses the native node.js http module, while on the client (browser) it uses XMLHttpRequests.

- ReduxJS Toolkit - The Redux Toolkit package is intended to be the standard way to write Redux logic. It was originally created to help address three common concerns about Redux:
  *Configuring a Redux store is too complicated
  *I have to add a lot of packages to get Redux to do anything useful
  *Redux requires too much boilerplate code
  
- Material UI - Material UI is an open-source React component library that implements Google's Material Design. It includes a comprehensive collection of prebuilt components that are ready for use in production right out of the box. Material UI is beautiful by design and features a suite of customization options that make it easy to implement your own custom design system on top of our components.

## Run Locally

Download the repository

Go to the project directory

Install dependencies(npm):

```bash
  npm install
```

Start the webpack development server(npm):

```bash
  npm run serve
```

Build your work(npm, target ES6)

```bash
  npm run build
```

## Folder Structure

Folder name is self explanatory

    src
    |
    ├── assets
    └── components|
                  └── slicers
                  
## Documentation

[React.JS](https://reactjs.org/docs/getting-started.html)  
[React-Redux](https://react-redux.js.org/introduction/getting-started)
[ReduxJS Toolkit](https://redux-toolkit.js.org/introduction/getting-started)
[Axios](https://axios-http.com/docs/intro)

## Authors

- [@ADAMSINSUAT](https://github.com/ADAMSINSUAT)
