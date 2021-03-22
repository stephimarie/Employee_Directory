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
                </Column>
            </Row>
        </div>
    );
}