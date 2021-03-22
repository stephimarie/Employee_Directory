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
  sortName = () => {
    if (this.state.nameSort === "ascending") {
      console.log("descending name sort clicked");
      let employees = this.state.employees.sort((a, b) => {
        if (a.name > b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      });
      let matchedEmployees = this.state.matchedEmployees.sort((a, b) => {
        if (a.name > b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      });
      this.setState({
        employees: employees,
        matchedEmployees: matchedEmployees,
        nameSort: "descending",
      });
    } else {
      console.log("ascending name sort clicked");
      let employees = this.state.employees.sort((a, b) => {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      });
      let matchedEmployees = this.state.matchedEmployees.sort((a, b) => {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      });
      this.setState({
        employees: employees,
        matchedEmployees: matchedEmployees,
        nameSort: "ascending",
      });
    }
  };
  sortGender = () => {
    if (this.state.genderSort === "ascending") {
      console.log("descending gender sort clicked");
      let employees = this.state.employees.sort((a, b) => {
        if (a.gender > b.gender) {
          return -1;
        }
        if (a.gender < b.gender) {
          return 1;
        }
        return 0;
      });
      let matchedEmployees = this.state.matchedEmployees.sort((a, b) => {
        if (a.gender > b.gender) {
          return -1;
        }
        if (a.gender < b.gender) {
          return 1;
        }
        return 0;
      });

      this.setState({
        employees: employees,
        matchedEmployees: matchedEmployees,
        genderSort: "descending",
      });
    } else {
      console.log("ascending gender sort clicked");
      let employees = this.state.employees.sort((a, b) => {
        if (a.gender < b.gender) {
          return -1;
        }
        if (a.gender > b.gender) {
          return 1;
        }
        return 0;
      });
      let matchedEmployees = this.state.matchedEmployees.sort((a, b) => {
        if (a.gender < b.gender) {
          return -1;
        }
        if (a.gender > b.gender) {
          return 1;
        }
        return 0;
      });
      this.setState({
        employees: employees,
        matchedEmployees: matchedEmployees,
        genderSort: "ascending",
      });
    }
  };
  sortAge = () => {
    if (this.state.ageSort === "ascending") {
      console.log("descending age sort clicked");
      let employees = this.state.employees.sort((a, b) => b.age - a.age);
      let matchedEmployees = this.state.matchedEmployees.sort(
        (a, b) => b.age - a.age
      );
      this.setState({
        employees: employees,
        matchedEmployees: matchedEmployees,
        ageSort: "descending",
      });
    } else {
      console.log("ascending age sort clicked");
      let employees = this.state.employees.sort((a, b) => a.age - b.age);
      let matchedEmployees = this.state.matchedEmployees.sort(
        (a, b) => a.age - b.age
      );
      this.setState({
        employees: employees,
        matchedEmployees: matchedEmployees,
        ageSort: "ascending",
      });
    }
  };
  sortPhone = () => {
    if (this.state.phoneSort === "ascending") {
      console.log("descending phone sort clicked");
      let employees = this.state.employees.sort(
        (a, b) => b.phone.replace(/[()-]/g, "") - a.phone.replace(/[()-]/g, "")
      );
      let matchedEmployees = this.state.matchedEmployees.sort(
        (a, b) => b.phone.replace(/[()-]/g, "") - a.phone.replace(/[()-]/g, "")
      );
      this.setState({
        employees: employees,
        matchedEmployees: matchedEmployees,
        phoneSort: "descending",
      });
    } else {
      console.log("ascending phone sort clicked");
      let employees = this.state.employees.sort(
        (a, b) => a.phone.replace(/[()-]/g, "") - b.phone.replace(/[()-]/g, "")
      );
      let matchedEmployees = this.state.matchedEmployees.sort(
        (a, b) => a.phone.replace(/[()-]/g, "") - b.phone.replace(/[()-]/g, "")
      );
      this.setState({
        employees: employees,
        matchedEmployees: matchedEmployees,
        phoneSort: "ascending",
      });
    }
  };
  sortEmail = () => {
    if (this.state.emailSort === "ascending") {
      console.log("descending email sort clicked");
      let employees = this.state.employees.sort((a, b) => {
        if (a.email > b.email) {
          return -1;
        }
        if (a.email < b.email) {
          return 1;
        }
        return 0;
      });
      let matchedEmployees = this.state.matchedEmployees.sort((a, b) => {
        if (a.email > b.email) {
          return -1;
        }
        if (a.email < b.email) {
          return 1;
        }
        return 0;
      });
      this.setState({
        employees: employees,
        matchedEmployees: matchedEmployees,
        emailSort: "descending",
      });
    } else {
      console.log("ascending email sort clicked");
      let employees = this.state.employees.sort((a, b) => {
        if (a.email < b.email) {
          return -1;
        }
        if (a.email > b.email) {
          return 1;
        }
        return 0;
      });
      let matchedEmployees = this.state.matchedEmployees.sort((a, b) => {
        if (a.email < b.email) {
          return -1;
        }
        if (a.email > b.email) {
          return 1;
        }
        return 0;
      });
      this.setState({
        employees: employees,
        matchedEmployees: matchedEmployees,
        emailSort: "ascending",
      });
    }
  };
  sortAddress = () => {
    if (this.state.addressSort === "ascending") {
      console.log("descending address sort clicked");
      let employees = this.state.employees.sort((a, b) => {
        if (a.address > b.address) {
          return -1;
        }
        if (a.address < b.address) {
          return 1;
        }
        return 0;
      });
      let matchedEmployees = this.state.matchedEmployees.sort((a, b) => {
        if (a.address > b.address) {
          return -1;
        }
        if (a.address < b.address) {
          return 1;
        }
        return 0;
      });
      this.setState({
        employees: employees,
        matchedEmployees: matchedEmployees,
        addressSort: "descending",
      });
    } else {
      console.log("ascending address sort clicked");
      let employees = this.state.employees.sort((a, b) => {
        if (a.address < b.address) {
          return -1;
        }
        if (a.address > b.address) {
          return 1;
        }
        return 0;
      });
      let matchedEmployees = this.state.matchedEmployees.sort((a, b) => {
        if (a.address < b.address) {
          return -1;
        }
        if (a.address > b.address) {
          return 1;
        }
        return 0;
      });
      this.setState({
        employees: employees,
        matchedEmployees: matchedEmployees,
        addressSort: "ascending",
      });
    }
  };
  genderFilterMale = () => {
    console.log("male filter clicked");
    if (this.state.employees.length < 20) {
      this.getEmployees();
      let maleEmployees = this.state.employees.filter(
        (employee) => employee.gender === "male"
      );
      console.log(maleEmployees);
      this.setState({
        employees: maleEmployees,
        matchedEmployees: [],
        search: "",
      });
    }
    let maleEmployees = this.state.employees.filter(
      (employee) => employee.gender === "male"
    );
    console.log(maleEmployees);
    this.setState({
      employees: maleEmployees,
      matchedEmployees: [],
      search: "",
    });
  };
  genderFilterFemale = () => {
    console.log("female filter clicked");
    let femaleEmployees = [];
    if (this.state.employees.length < 20) {
      this.getEmployees();
      femaleEmployees = this.state.employees.filter(
        (employee) => employee.gender === "female"
      );
      console.log(femaleEmployees);
      this.setState({
        employees: femaleEmployees,
        matchedEmployees: [],
        search: "",
      });
    }
    femaleEmployees = this.state.employees.filter(
      (employee) => employee.gender === "female"
    );
    console.log(femaleEmployees);
    this.setState({
      employees: femaleEmployees,
      matchedEmployees: [],
      search: "",
    });
  };






}

