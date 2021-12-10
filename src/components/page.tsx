
import { findByLabelText } from "@testing-library/react";
import { FC } from "react";





const Page: FC = ({children})=>{

    return(
        <div className="page">
            {children}
        </div>
    )
}

export default Page