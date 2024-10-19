import React, { useState } from 'react';
import "../style/adminMenu.css";
import AdminHeader from './AdminHeader';

function AdminMenu() {
    const [menuItem, setMenuItem] = useState({
        title: '',
        price: '',
        description: '',
        ingredients: '',
        image: null
    });
    const [menuItems, setMenuItems] = useState([]);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setMenuItem({ ...menuItem, [name]: value });
    };

    const handleImageChange = (event) => {
        setMenuItem({ ...menuItem, image: event.target.files[0] });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (menuItem.title.trim() && menuItem.price.trim()) {
            setMenuItems([...menuItems, menuItem]);
            setMenuItem({ title: '', price: '', description: '', ingredients: '', image: null }); 
        }
    };

    return (
        <>
            <div className='admin-menu'>
                <AdminHeader />
                <div className="admin-menu-container">
                    <h2>Add Menu Item</h2>
                    <form onSubmit={handleSubmit} className="menu-form">
                        <div className="form-group">
                            <label htmlFor="title">Menu Item Title</label>
                            <input
                                type="text"
                                id="title"
                                name="title"
                                value={menuItem.title}
                                onChange={handleInputChange}
                                className="form-control"
                                placeholder="Enter menu item title"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="price">Price</label>
                            <input
                                type="number"
                                id="price"
                                name="price"
                                value={menuItem.price}
                                onChange={handleInputChange}
                                className="form-control"
                                placeholder="Enter price"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="description">Description</label>
                            <textarea
                                id="description"
                                name="description"
                                value={menuItem.description}
                                onChange={handleInputChange}
                                className="form-control"
                                placeholder="Enter description"
                            ></textarea>
                        </div>
                        <div className="form-group">
                            <label htmlFor="ingredients">Ingredients</label>
                            <textarea
                                id="ingredients"
                                name="ingredients"
                                value={menuItem.ingredients}
                                onChange={handleInputChange}
                                className="form-control"
                                placeholder="Enter ingredients"
                            ></textarea>
                        </div>
                        <div className="form-group">
                            <label htmlFor="image">Image</label>
                            <input
                                type="file"
                                id="image"
                                name="image"
                                onChange={handleImageChange}
                                className="form-control"
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">Add Menu Item</button>
                    </form>

                  
                </div>
            </div>
        </>
    );
}

export default AdminMenu;
