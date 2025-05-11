import React from 'react'
import { Box } from '@mui/material'
import Header from './layout/components/header/header'
import Footer from './layout/components/footer/footer'
import './app.css';

type AppProps = {
    children: React.ReactNode
}

const App = ({ children }: AppProps) => {
    return (
        <React.Fragment>
            <div className="parallax" style={{ overflowX: "hidden" }}>
                <Header />
                <Box sx={{ marginTop: "85px" }}>
                    {children}
                </Box>
                <Footer />
            </div>
        </React.Fragment>
    )
}

export default App