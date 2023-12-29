import React, { useState } from 'react';
import { Col, Dropdown, DropdownMenu, DropdownToggle, Row } from 'reactstrap';

//import images
import github from "../assets//brands/github.png";
import bitbucket from "../assets//brands/bitbucket.png";
import dribbble from "../assets//brands/dribbble.png";
import dropbox from "../assets//brands/dropbox.png";
import mail_chimp from "../assets//brands/mail_chimp.png";
import slack from "../assets//brands/slack.png";
// import { Link } from 'react-router-dom';
import "./Dropdown.css";
import "./Dropdown.scss";

const WebAppsDropdown = () => {
    const [isWebAppDropdown, setIsWebAppDropdown] = useState(false);
    const toggleWebAppDropdown = () => {
        setIsWebAppDropdown(!isWebAppDropdown);
    };
    return (
        <React.Fragment>
            <Dropdown isOpen={isWebAppDropdown} toggle={toggleWebAppDropdown} className="topbar-head-dropdown ms-1 header-item">
                <DropdownToggle tag="button" type="button" className="btn btn-icon btn-topbar btn-ghost-secondary rounded-circle">
                    <i className='bx bx-category-alt fs-22'></i>
                </DropdownToggle>
                <DropdownMenu className="dropdown-menu-lg p-0 dropdown-menu-end">
                    <div className="p-3 border-top-0 border-start-0 border-end-0 border-dashed border">
                        <Row className="align-items-center">
                            <Col>
                                <h6 className="m-0 fw-semibold fs-15"> Web Apps </h6>
                            </Col>
                            <div className="col-auto">
                                <a href="#" className="btn btn-sm btn-soft-info"> View All Apps
                                    <i className="ri-arrow-right-s-line align-middle"></i></a>
                            </div>
                        </Row>
                    </div>

                    <div className="p-2">
                        <div className="row g-0">
                            <Col>
                                <a className="dropdown-icon-item" href="#">
                                    <img src={github} alt="Github" />
                                    <span>GitHub</span>
                                </a>
                            </Col>
                            <Col>
                                <a className="dropdown-icon-item" href="#">
                                    <img src={bitbucket} alt="bitbucket" />
                                    <span>Bitbucket</span>
                                </a>
                            </Col>
                            <Col>
                                <a className="dropdown-icon-item" href="#">
                                    <img src={dribbble} alt="dribbble" />
                                    <span>Dribbble</span>
                                </a>
                            </Col>
                        </div>

                        <div className="row g-0">
                            <Col>
                                <a className="dropdown-icon-item" href="#">
                                    <img src={dropbox} alt="dropbox" />
                                    <span>Dropbox</span>
                                </a>
                            </Col>
                            <Col>
                                <a className="dropdown-icon-item" href="#">
                                    <img src={mail_chimp} alt="mail_chimp" />
                                    <span>Mail Chimp</span>
                                </a>
                            </Col>
                            <Col>
                                <a className="dropdown-icon-item" href="#">
                                    <img src={slack} alt="slack" />
                                    <span>Slack</span>
                                </a>
                            </Col>
                        </div>
                    </div>
                </DropdownMenu>
            </Dropdown>
        </React.Fragment>
    );
};

export default WebAppsDropdown;