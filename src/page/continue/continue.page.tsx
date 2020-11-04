import React from "react";
import { useHistory } from "react-router-dom";

export const Continue = () => {
    
    const history = useHistory();
    
    const handleClick = () => {
      history.push("/home");
    };

      return(
          <div>
              <button className="button" onClick={handleClick}>Home</button>
          </div>
      );
    };