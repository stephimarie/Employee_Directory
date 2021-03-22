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
}

