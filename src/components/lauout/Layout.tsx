import React, {FC, ReactNode, useState} from 'react';
import Navbar from "../navbar/Navbar";
import s from './Layout.module.css'

type PropsType = {
    children: ReactNode
}
const Layout: FC<PropsType> = ({children}) => {
    const [open, setOpen] = useState(false)
    const handleClose = () => setOpen(false)
    const handleOpen = () => setOpen(true)

    return (<>
            <Navbar open={open} handleOpen={handleOpen} handleClose={handleClose}/>
            <div className={s.line}></div>
            <div>
                {children}
            </div>
        </>
    );
};

export default Layout;