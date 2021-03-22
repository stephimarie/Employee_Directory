import React, { Component } from "react";
import API from "../utils/API";
import Container from "../components/container";
import PageHeader from "../components/pageHeader";
import EmployeesTable from "../components/EmployeeTable";

class EmployeeDirectory extends Component {
    state = {
        search: "",
        employees: [],
        nameSort: "ascending",
        genderSort: "ascending",
        ageSort: "ascending",
        phoneSort: "ascending",
        emailSort: "ascending",
        addressSort: "ascending",
        matchedEmployees: [],
      }; 
        // When this component mounts, search the Random User API
  componentDidMount() {
    this.getEmployees();
  }
  getEmployees = () => {
    API.getEmployees()
      .then((res) => {
        const results = res.data.results;
        const employeeArray = [];
        for (let i = 0; i < results.length; i++) {
          const row = {
            picture: results[i].picture.medium,
            name: `${results[i].name.first} ${results[i].name.last}`,
            gender: results[i].gender,
            age: results[i].dob.age,
            phone: results[i].phone,
            email: results[i].email,
            address: `${results[i].location.street.number} ${results[i].location.street.name}. ${results[i].location.city}, ${results[i].location.state} ${results[i].location.postcode}`,
          };
          employeeArray.push(row);
        }
        console.log(employeeArray);

        this.setState({
          employees: employeeArray,
          search: "",
          matchedEmployees: [],
        });
      })
      .catch((err) => console.log(err));
  };


}

