import React, { createContext, useContext } from "react";

const idContext = createContext();

const idProvider = ({children}) => {
    const [id, setId] = useState();

    return (
        <idContext.Provider value={[id, setId]}>
            {children}
        </idContext.Provider>
    )
}

const useId = () => useContext(idContext);

export { useId, idProvider }