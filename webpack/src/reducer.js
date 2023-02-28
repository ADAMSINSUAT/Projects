import * as actions from './actionType';

const initState = {
    count: 0,
    index: 0,
    newEmpData: [],
    ClassEmpData: [
        {
            id: 1,
            name: "Adam Keizzer Sinsuat",
            age: 23,
            dob: new Date(`08/06/1999`).toDateString(),
            email: "adamsinsuat@gmail.com",
            occ: "MS Tech Solutions Trainee",
            contactno: "09676075119",
        },
        {
            id: 2,
            name: "John Michael Rasalan",
            age: 23,
            dob: new Date(`06/26/1986`).toDateString(),
            email: "thiefmage34@gmail.com",
            occ: "ASP.NET Developer",
            contactno: "09797791868",
        },
        {
            id: 3,
            name: "Axela Alonde",
            age: 25,
            dob: new Date(`07/18/1997`).toDateString(),
            email: "axelaalonde@gmail.com",
            occ: "ASP.NET Developer",
            contactno: "09778191868",
        },
        {
            id: 4,
            name: "Leah Solamillo",
            age: 25,
            dob: new Date(`07/18/1997`).toDateString(),
            email: "leahs@gmail.com",
            occ: "ASP.NET Developer",
            contactno: "09778197890",
        }
    ],
    FunctionEmpData: [
        {
            id: 1,
            name: "Adam Keizzer Sinsuat",
            age: 23,
            dob: new Date(`08/06/1999`).toDateString(),
            email: "adamsinsuat@gmail.com",
            occ: "MS Tech Solutions Trainee",
            contactno: "09676075119",
        },
        {
            id: 2,
            name: "John Michael Rasalan",
            age: 23,
            dob: new Date(`06/26/1986`).toDateString(),
            email: "thiefmage34@gmail.com",
            occ: "ASP.NET Developer",
            contactno: "09797791868",
        },
        {
            id: 3,
            name: "Axela Alonde",
            age: 25,
            dob: new Date(`07/18/1997`).toDateString(),
            email: "axelaalonde@gmail.com",
            occ: "ASP.NET Developer",
            contactno: "09778191868",
        },
        {
            id: 4,
            name: "Leah Solamillo",
            age: 25,
            dob: new Date(`07/18/1997`).toDateString(),
            email: "leahs@gmail.com",
            occ: "ASP.NET Developer",
            contactno: "09778197890",
        }
    ]
};

const reducer = (state = initState, action) => {
    switch (action.type) {
        case actions.CLASSUPDATE:
            return { ...state, ClassEmpData: action.payload };
        case actions.FUNCTIONUPDATE:
            return { ...state, FunctionEmpData: action.payload };
        default:
            return state;
    }
    return state;
}

export default reducer;