import { FC } from "react";
import { Header } from "./Header";

export const Layout: FC<{children: React.ReactNode}> = ({children}) => {
    return <>
    <Header />
        {children} 
    </>
}
