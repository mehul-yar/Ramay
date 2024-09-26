

import React, { useState } from 'react';
import Cosmic from '../Assets/cosmic.png';
import Key from '../Assets/key.png';
import Bucket from '../Assets/bucket.png';
import KeyLogo from '../Assets/keyLogo.png';
import { Button, Dropdown, Menu, Drawer } from 'antd';
import { DownOutlined, AlignRightOutlined, LeftOutlined } from '@ant-design/icons';
import './NavBar.css';

export default function Navbar() {
    const [drawerVisible, setDrawerVisible] = useState(false);
    const [isSubMenuOpen, setIsSubMenuOpen] = useState(false); // Track if submenu is open
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 640); // Track small screen size

    // Track window resize to detect small screen
    React.useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 640);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Define the menu items for the dropdown
    const menu = (
        <Menu>
            <Menu.Item key="1">
                <a href="#item1">Item 1</a>
            </Menu.Item>
            <Menu.Item key="2">
                <a href="#item2">Item 2</a>
            </Menu.Item>
            <Menu.Item key="3">
                <a href="#item3">Item 3</a>
            </Menu.Item>
        </Menu>
    );

    // Handle opening and closing of the drawer
    const showDrawer = () => {
        setDrawerVisible(true);
    };

    const onClose = () => {
        setDrawerVisible(false);
        setIsSubMenuOpen(false); // Reset to main menu when closing
    };

    // Handle switching to the submenu
    const openSubMenu = () => {
        setIsSubMenuOpen(true);
    };

    // Handle going back to the main menu
    const goBackToMainMenu = () => {
        setIsSubMenuOpen(false);
    };

    return (
        <div className="z-20 sticky shadow-md top-0 flex bg-gradient-to-r from-sky-300 to-white items-center p-4 h-20">
            {/* Logo Section */}
            <div className="justify-center mb-6 w-48 h-14">
                <img className="w-40 h-24 m-4" src={Cosmic} alt="Cosmic Logo" />
            </div>

            {/* Button Section */}
            <div className="grow h-14 flex justify-center items-center space-x-4">
                {/* Dropdown Button - Show only on large screens */}
                {!isSmallScreen && (
                    <Dropdown overlay={menu} trigger={['click']}>
                        <Button className="bg-transparent border-white border-1 shadow-md">
                            Location <DownOutlined />
                        </Button>
                    </Dropdown>
                )}

                {/* Conditionally show Search Button for large screens */}
                {!isSmallScreen && (
                    <Button className="flex items-center space-x-4 shadow-lg">
                        <span>Search a product</span>
                        <img src={KeyLogo} alt="Search Icon" />
                    </Button>
                )}
            </div>

            {/* Number Section */}
            <div className="flex w-44 h-20 items-center justify-end"> {/* Ensure menu icon is aligned right */}
                <div className="flex">
                    {/* Hide Key and Bucket icons on small screens */}
                    {!isSmallScreen && (
                        <>
                            <img className="mx-2 border rounded-md border-yellow-700" src={Key} alt="Key Icon" />
                            <img className="mx-2 border rounded-md border-yellow-700" src={Bucket} alt="Bucket Icon" />
                        </>
                    )}
                    <AlignRightOutlined className="rounded-md px-2 border border-yellow-700" onClick={showDrawer} />
                </div>
            </div>

            {/* Drawer Component */}
            <Drawer
                title={isSubMenuOpen ? "Submenu" : "Menu"}
                placement="right"
                onClose={onClose}
                visible={drawerVisible}
                width={300}
                className="custom-drawer"
            >
                <div className={`drawer-content ${isSubMenuOpen ? 'drawer-open-submenu' : ''}`}>
                    {/* Main Menu */}
                    <div className="drawer-menu">
                        {/* Location dropdown in menu for small screens */}
                        {isSmallScreen && (
                            <div className="mb-4">
                                <Dropdown overlay={menu} trigger={['click']}>
                                    <Button className="w-full bg-transparent border-gray-400 border-1">
                                        Location <DownOutlined />
                                    </Button>
                                </Dropdown>
                            </div>
                        )}

                        {/* Search bar in menu for small screens */}
                        {isSmallScreen && (
                            <div className="mb-4">
                                <Button className="flex items-center space-x-4 shadow-lg w-full ">
                                    <span>Search a product</span>
                                    <img src={KeyLogo} alt="Search Icon" />
                                </Button>
                            </div>
                        )}

                        <ul className="space-y-2">
                            <li>
                                <h4 className="font-bold">Trending</h4>
                                <ul className="space-y-2">
                                    <li><a href="#content1">Content 1</a></li>
                                    <li><a href="#content2">Content 2</a></li>
                                    <li><a onClick={openSubMenu} style={{ cursor: 'pointer' }}>Content 3</a></li>
                                </ul>
                            </li>
                            <hr className="border-t-1 border-gray-600" />
                            <li>
                                <h4 className="font-bold">Digital Content & Devices</h4>
                                <ul className="space-y-2">
                                    <li><a href="#content4">Content 4</a></li>
                                    <li><a href="#content5">Content 5</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>

                    {/* Submenu */}
                    <div className="drawer-submenu">
                        <Button onClick={goBackToMainMenu} icon={<LeftOutlined />} className="mb-4">
                            Back
                        </Button>
                        <ul className="space-y-2">
                            <li><a href="#content3-1">Submenu Content 11</a></li>
                            <li><a href="#content3-2">Submenu Content 12</a></li>
                            <li><a href="#content3-3">Submenu Content 13</a></li>
                            <li><a href="#content3-4">Submenu Content 14</a></li>
                        </ul>
                    </div>
                </div>
            </Drawer>
        </div>
    );
}
