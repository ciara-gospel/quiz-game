import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const DataContext = createContext();

export const UseData = ({ children }) => {
    const [tabQuestion, setQuestions] = useState([]);
    const [tabResponse, setTabResponse] = useState([]);
    return(
        <DataContext.Provider
        value={{tabQuestion, tabResponse, setTabResponse, setQuestions}}
        >
           {children}
        </DataContext.Provider>
    );
};

UseData.propTypes = {
    children: PropTypes.node.isRequired
}