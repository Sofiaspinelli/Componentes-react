import React from 'react';
import TopBar from './TopBar';
import ContentRowTop from './ContentRowTop';
import ColumnMovie from './ColumnMovie';
import Footer from './Footer';
import Table from 'react-bootstrap/Table';
import Col from 'react-bootstrap/Col';


function ContentWrapper(){
    return (
        <React.Fragment>
            {/*<!-- Content Wrapper -->*/}
            <div id="content-wrapper" className="d-flex flex-column">
                {/*<!-- Main Content -->*/}
                <div id="content">
                    <TopBar />
                    <ContentRowTop />
                    
                    <Table striped bordered hover size="sm">
                    
                        <Col>  <ColumnMovie /></Col>
                    
                    
                    </Table>
                    <Footer />
                </div>
            </div>    
            
        </React.Fragment>
    )
}
export default ContentWrapper;