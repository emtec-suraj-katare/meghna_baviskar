import React, { useState, Fragment } from 'react';
import {Button, Table} from 'react-bootstrap';
import data from './mock-data.json';
import './CSS/post.css';
import ReadOnlyRow from './ReadOnlyRow';
import EditableRow from './EditableRow';

const AddHotel = () => {
    
    const [posts, setPosts] = useState(data);
    const [addFormData, setAddFormData] = useState({
        id: '',
        name: '',
        address: '',
        rating: '',
        email: ''
    });

    const [editFormData, setEditFormData] = useState({
        id: "",
        name: "",
        address: "",
        rating: "",
        email: ""
    })

    const [editPostId, setEditPostId] = useState(null);

    const handlAddFormChange = (e) => {
        e.preventDefault();

        const fieldName = e.target.getAttribute('name');
        const fieldValue = e.target.value;

        const newFormData = { ...addFormData};
        newFormData[fieldName ] = fieldValue;

        setAddFormData(newFormData);
    };

    const handleEditFormChange = (e) =>{
        e.preventDefault();

        const fieldName = e.target.getAttribute('name');
        const fieldValue = e.target.value;

        const newFormData = { ...editFormData };
        newFormData[fieldName] = fieldValue;

        setEditFormData(newFormData);
    }

    const handleAddFormSubmit = (e) =>{
        e.preventDefault();

        const newPost = {
            id: addFormData.id,
            name: addFormData.name,
            address: addFormData.address,
            rating: addFormData.rating,
            email: addFormData.email
        };

        const newPosts = [...posts, newPost];
        setPosts(newPosts);
    };

    const handleEditFormSubmit = (e) =>{
        e.preventDefault();

        const editedPost = {
            id: editFormData.id,
            name: editFormData.name,
            address: editFormData.address,
            rating: editFormData.rating,
            email: editFormData.email
        }

        const newPosts = [ ...posts];

        const index = posts.findIndex((post)=> post.id === editPostId)
        newPosts[index] = editedPost;

        setPosts(newPosts);
        setEditPostId(null)
    };

    const handleEditClick = (e, post) =>{
        e.preventDefault();

        setEditPostId(post.id)

        const formValues = {
            id: post.id,
            name: post.name,
            address: post.address,
            rating: post.rating,
            email: post.email
        }

        setEditFormData(formValues)
    }

    const handleCancelClick = () =>{
        setEditPostId('id')
    }

    const handleDeleteClick = (postId) =>{
        const newPosts = [ ...posts];

        const index = posts.findIndex((post) => post.id === postId);

        newPosts.splice(index, 1);

        setPosts(newPosts)

    }

  return (
    <div>
        <h1>Restaurant Update</h1>

      <div className="container">
        <form handleEditFormSubmit={handleEditFormSubmit}>
       <Table striped bordered hover size="sm">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Rating</th>
                    <th>Email</th>
                    <th>Actions</th>
                </tr>
            </thead>

            <tbody>
               {posts.map((post) => (
                <Fragment>
                    {editPostId === post.id ? (<EditableRow 
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}/>) :
                     ( <ReadOnlyRow post={post} 
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}/>)}
                   
                </Fragment>
               ))}
            </tbody>
            </Table>
        </form>
    </div>
    </div>
  )
}

export default AddHotel
