import React, { Component } from "react";
// import pic1 from '../img/img_1.jpeg';
// import pic2 from '../img/img_2.jpeg';
// import pic3 from '../img/img_3.jpeg';

// const empTableHeader = () => {
//   return (
//     <thead>
//       <tr>
//         <td>Name</td>
//         <td>Age</td>
//         <td>Designation</td>
//       </tr>
//     </thead>
//   )
// }

// const empTableBody = () =>{
//   this.state.empData.map((index, data) => {
//     return(
//       <tr>
//         <td>{data.name}</td>
//         <td>{data.age}</td>
//         <td>{data.designation}</td>
//       </tr>
//     )
//   })
// }
export class App extends Component {
  state = {
    name: "John Doe",
    age: 22,
    dob: `'08/26/2000'`,
    salary: `20,000`,
    designation: "Communications Manager",
    image: "employee_1.jpg",
    // image: "https://www.dreamstime.com/profile-picture-caucasian-male-employee-posing-office-happy-young-worker-look-camera-workplace-headshot-portrait-smiling-image190186649",
    department: "PR",
    // empData: [
    //   {
    //     name: "John Doe",
    //     age: 22,
    //     dob: `'08/26/2000'`,
    //     salary: `20,000`,
    //     designation: "Communications Manager",
    //     image: "https://www.dreamstime.com/profile-picture-caucasian-male-employee-posing-office-happy-young-worker-look-camera-workplace-headshot-portrait-smiling-image190186649",
    //     department: "PR",
    //   },
    //   {
    //     name: "Arnold Laurence",
    //     age: 23,
    //     dob: `'08/06/1999'`,
    //     salary: `21,000`,
    //     designation: "Engineering Technician (EngTech)",
    //     image: "https://www.dreamstime.com/profile-picture-smiling-male-employee-posing-workplace-close-up-headshot-portrait-smiling-caucasian-businessman-look-image190961990",
    //     department: "Engineering",
    //   },
    //   {
    //     name: "Paul Williams",
    //     age: 21,
    //     dob: `'10/11/2001'`,
    //     salary: `22,000`,
    //     designation: "Marketing analyst",
    //     image: "https://www.istockphoto.com/photo/headshot-portrait-of-smiling-businessman-talk-on-video-call-gm1303206558-394732209",
    //     department: "Marketing",
    //   }
    // ]
  }

  extraInfo = () => {
    alert("Name: " + this.state.name + "\n Age: " + this.state.age + "\n Date of Birth: " + this.state.dob + "\n Salary: " + this.state.salary + "\n Designation: " + this.state.salary + "\n Department: " + this.state.department)
  }
  render() {
    // this.state.empData.map((data)=>{
    //   console.log(data.name)
    // })
    return (
      <div className="divStyle">
        <div>
          <img src={this.state.image} alt="Bonus"></img>
          <h1 onMouseOver={this.extraInfo}>{this.state.name}</h1>
          <h1>{this.state.designation}</h1>
        </div>
      </div>
      // <table>
      //   <thead>
      //     <tr>
      //       <th>Name</th>
      //       <th>Image</th>
      //       <th>Designation</th>
      //     </tr>
      //   </thead>
      //   <tbody>
      //     {this.state.empData.map((data, index) => {
      //       return(

      //         <tr key={index} style={{padding:'10px'}}>
      //         <td onMouseOver={this.extraInfo}>{data.name}</td>
      //         <td><img src={data.image} alt={"Bonus"}></img></td>
      //         <td>{data.designation}</td>
      //       </tr>
      //       )
      //     })}
      //   </tbody>
      // </table>
    )
  }
}

export default App;