/*********       layout for every page "root component"     ********/
import React from 'react'
import Header from '../Header/index';
import { Col, Row, Container } from 'react-bootstrap';
import './style.css';
import { SidebarData } from './SidebarData'
import { SvgIcon } from '@mui/material';
/**
* @author
* @function Layout
**/

const Layout = (props) => {
    return (
        <>
            <Header />
            {
                props.sidebar ?
                    <Container fluid>
                        <Row>
                            <div className='sidebar'>
                                <ul className='sidebarList'>
                                    {SidebarData.map((val, key) => {
                                        return (
                                            <li
                                                key={key}
                                                className='row'
                                                id={window.location.pathname == val.link ? "active" : ""}
                                                onClick={() => {
                                                    window.location.pathname = val.link
                                                }} >
                                                <div id="icon">{val.icon}</div>
                                                <div id="title" >{val.title}</div>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>

                            <Col md={10} style={{ marginLeft: 'auto', paddingTop: '60px' }}>
                                {props.children}
                            </Col>
                        </Row>
                    </Container>
                    :
                    props.children
            }
        </>
    )
}

export default Layout



function HomeIcon(props) {
    return (
        <SvgIcon {...props}>
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
        </SvgIcon>
    );
}






// function Sidebar() {
//     return (
//         <div className='sidebar'>
//             <ul>
//                 {SidebarData.map((val, key) => {
//                     return <li key={key} onClick={() => { window.location.pathname = val.link }}>                      
//                         <div>{val.icon}</div>
//                         <div>{val.title}</div>
//                     </li>

//                 })}
//             </ul>
//         </div>

//     )
// }