import './newProduct.css';
import app from '../../firebase';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../apiCall';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const NewProduct = () => {
    document.title = 'Wolmart | Add Product';
    const dispatch = useDispatch();
    const [file, setFile] = useState(null);
    const [inputs, setInputs] = useState({});
    const [category, setCategory] = useState([]);

    const handleChange = (e) => {
        setInputs(prev => {
            return {...prev, [e.target.name]:e.target.value}
        })
    };

    const handleCategory = (e) => {
        setCategory(e.target.value.split(','));
    };

    const handleClick = (e) => {
        e.preventDefault();
        const fileName = new Date().getTime() + file.name;
        const storage = getStorage(app)
        const storageRef = ref(storage, fileName);
        const uploadTask = uploadBytesResumable(storageRef, file);

        // Register three observers:
        // 1. 'state_changed' observer, called any time the state changes
        // 2. Error observer, called on failure
        // 3. Completion observer, called on successful completion
        uploadTask.on(
            'state_changed', 
            (snapshot) => {
                // Observe state change events such as progress, pause, and resume
                // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
                switch (snapshot.state) {
                case 'paused':
                    console.log('Upload is paused');
                    break;
                case 'running':
                    console.log('Upload is running');
                    break;
                default:
                }
            }, 
            (error) => {
                // Handle unsuccessful uploads
            }, 
            () => {
                // Handle successful uploads on complete
                // For instance, get the download URL: https://firebasestorage.googleapis.com/...
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    const product = {...inputs, img: downloadURL, categories: category};
                    addProduct(product, dispatch);
                    // console.log('File available at', downloadURL);
                });
            }
        );
    };

    console.log(file);

    return (
        <div className='newProduct'>
            <h1 className="newProductTitle">New Product</h1>
            <form action="" className="newProductForm">
                <div className="newProductItem">
                    <label>Image</label>
                    <input type='file' id='file' onChange={(e) => setFile(e.target.files[0])} />
                </div>
                <div className="newProductItem">
                    <label>Title</label>
                    <input name='title' type='text' placeholder='Apple Airpods' onChange={handleChange} />
                </div>
                <div className="newProductItem">
                    <label>Description</label>
                    <input name='desc' type='text' placeholder='description' onChange={handleChange} />
                </div>
                <div className="newProductItem">
                    <label>Price</label>
                    <input name='price' type='number' placeholder='100' onChange={handleChange} />
                </div>
                <div className="newProductItem">
                    <label>Categories</label>
                    <input name='categories' type='text' placeholder='Jeans, Skirts' onChange={handleCategory} />
                </div>
                <div className="newProductItem">
                    <label>Stock</label>
                    <select name='inStock' onChange={handleChange}>
                        <option value='true'>Yes</option>
                        <option value='false'>No</option>
                    </select>
                </div>
                <button onClick={handleClick} className="newProductButton">Create</button>
            </form>
        </div>
    );
};

export default NewProduct;
