import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import DeleteModal from "../components/DeleteModal";
import DropdownFilter from "../components/Dropdown";
import FormModal from "../components/FormModal";
import image from './../assets/img/todo-empty-state.png';

const Activity = () => {
    const titleInput = useRef(null);

    const [show, setShow] = useState(false);

    const [showDelete, setShowDelete] = useState(false);

    const [editTitle, setEditTitle] = useState(false);

    const handleClose = () => setShow(false);

    const handleShow = () => setShow(true);

    const handleCloseDelete = () => setShowDelete(false);

    const handleShowDelete = () => setShowDelete(true);

    const handleEditTitle = () => {
        setEditTitle(!editTitle);
    }

    const onChangeTitle = (e) => {
        const html = e.target.innerHTML;
        console.log(html)
    }

    const handleInputBlur = event => {
        setEditTitle(!editTitle);
    };

    return (
        <>
            <div className="container flex flex-col">
                <div className="flex justify-between">
                    <div className="flex items-center">
                        <Link to="/" data-cy="todo-back-button" className="text-4xl pr-5 text-black"><i className='bx bxs-chevron-left'></i></Link>
                        {
                            editTitle ? <input ref={titleInput} onChange={onChangeTitle} onBlur={handleInputBlur} type="text" data-cy="todo-title" className="font-bold text-4xl pr-5 bg-transparent focus:outline-none focus:border-b-2 focus:border-b-gray-800" value="Activity" autoFocus /> : <h1 onClick={handleEditTitle} type="text" data-cy="todo-title" className="font-bold text-4xl py-8 pr-5 focus:outline-none" >Activity</h1>
                        }
                        <button data-cy="todo-title-edit-button" className="text-xl text-gray-400" onClick={handleEditTitle}><i className='bx bx-pencil'></i></button>
                    </div>
                    <div className="flex">
                        <DropdownFilter></DropdownFilter>
                        <button onClick={handleShow} data-cy="todo-add-button" className="font-bold text-lg main-color my-8 px-10 rounded-full text-white before:content-['+'] before:text-xl"> Tambah</button>
                    </div>
                </div>
                {/* <div data-cy="todo-empty-state" className="flex justify-center">
            <img src={image} alt="Todo Empty State" loading="lazy" />
        </div> */}
                <div className="flex">
                    <div data-cy="todo-item-1" className="bg-white rounded-lg shadow-xl p-5 w-full text-start flex justify-between">
                        <div className="flex items-center">
                            <input data-cy="todo-item-checkbox" type="checkbox" className="ml-5 w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                            <div data-cy="todo-item-priority-indicator" className="ml-5 w-2 h-2 bg-red-500 rounded-full"></div>
                            <h2 data-cy="todo-item-title" className="ml-5 font-bold text-lg">Daftar Belanja Bulanan </h2>
                            <button onClick={handleShow} data-cy="todo-item-edit-button" className="ml-5 text-xl text-gray-400"><i className='bx bx-pencil'></i></button>
                        </div>
                        <div className="flex">
                            <button onClick={handleShowDelete} data-cy="todo-item-delete-button" className="ml-5 text-xl text-gray-400"><i className='bx bx-trash'></i></button>
                        </div>
                    </div>
                </div>
            </div>
            <FormModal show={show} handleClose={handleClose} />
            <DeleteModal show={showDelete} handleClose={handleCloseDelete}></DeleteModal>
        </>
    )
}

export default Activity;