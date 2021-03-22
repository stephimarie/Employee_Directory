import React from "react";
import "../emplytable.css";


function EmployeeTable(props) {
    return (
        <div>
            <Row>
                <Column size="sm-7"></Column>
                <Column size="sm-5">
                    <div className="input-icons">
                        <IconContext.Provider
                            value={{
                                color: "grey",
                                className: "icon",
                            }}
                        >
                            <i>
                                <FiSearch />
                            </i>
                        </IconContext.Provider>
                        <input 
                        value={props.search}
                        className="input-field"
                        type="text"
                        onChange={props.filterTable}
                        placeholder="Search.."
                        ></input>
                    </div>
                    <IconContext.Provider
                        value={{
                            color: "grey",
                            className: "button-icon",
                        }}
                    >
                        <button
                            className="icon-button"
                            onClick={props.refreshTableFunction}
                        >
                            <FiRefreshCcw />
                            Refresh
                        </button>
                    </IconContext.Provider>
                    <div className="dropdown">
                        <IconContext.Provider
                            value={{
                                color: "grey",
                                className: "button-icon",
                            }}
                        >
                            <button className="dropdown-button">
                                <FiFilter />
                                Filter
                            </button>
                        </IconContext.Provider>
                        <div class="dropdown-content">
                            <li onClick={props.genderFilterMale}>Male</li>
                            <li onClick={props.genderFilterFemale}>Female</li>
                        </div>

                    </div>
                </Column>
            </Row>
        </div>
    );
}