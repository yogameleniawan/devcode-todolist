import { useLayoutEffect, useRef, useState } from "react";
import { Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import DeleteModal from "../components/DeleteModal";
import DropdownFilter from "../components/Dropdown";
import FormModal from "../components/FormModal";
import { updateData } from "../store/actions/activity";
import { getTodo, updateDataTodo } from "../store/actions/todo";
import image from './../assets/img/todo-empty-state.png';

const Activity = () => {
    const todo = useSelector(state => state.todos);
    const dispatch = useDispatch();
    const location = useLocation();
    const titleInput = useRef(null);

    const [show, setShow] = useState(false);
    const [type, setType] = useState(false);
    const [title, setTitle] = useState(location.state.item.title);
    const [editItem, setEditItem] = useState([]);
    const [deleteItem, setDeleteItem] = useState([]);
    const [onLoad, setOnLoad] = useState(false);
    const [showDelete, setShowDelete] = useState(false);
    const [editTitle, setEditTitle] = useState(false);

    const handleClose = () => setShow(false);

    const handleShow = (type, item) => {
        setShow(true)
        setType(type)
        setEditItem(item)
    };

    const handleShowDelete = (item) => {
        setShowDelete(true)
        setDeleteItem(item)
    };

    const handleCloseDelete = () => setShowDelete(false);
    const handleEditTitle = () => {
        setEditTitle(!editTitle);
    }

    const onChangeTitle = (e) => {
        setTitle(e.target.value)
    }

    const handleInputBlur = event => {
        setEditTitle(!editTitle);

        dispatch(updateData({ title: title, id: location.state.item.id.toString() }))
    };

    const handleCheck = (item) => {
        dispatch(updateDataTodo({ title: item.title, priority: item.priority, is_active: !item.is_active, id: item.id })).then(() => {
        })
    }

    useLayoutEffect(() => {
        setOnLoad(true)
        dispatch(getTodo(location.state.item.id.toString())).then(() => {
            setOnLoad(false)
        });
    }, [])

    return (
        <>
            <div className="container flex flex-col">
                <div className="flex justify-between">
                    <div className="flex items-center">
                        <Link to="/" data-cy="todo-back-button" className="text-4xl pr-5 text-black"><i className='bx bxs-chevron-left'></i></Link>
                        {
                            editTitle ? <input ref={titleInput} onChange={onChangeTitle} onBlur={handleInputBlur} type="text" data-cy="todo-title" className="font-bold text-4xl pr-5 bg-transparent focus:outline-none focus:border-b-2 focus:border-b-gray-800" value={title} autoFocus /> : <h1 onClick={handleEditTitle} type="text" data-cy="todo-title" className="font-bold text-4xl py-8 pr-5 focus:outline-none" >{title}</h1>
                        }
                        <button data-cy="todo-title-edit-button" className="text-xl text-gray-400" onClick={handleEditTitle}><i className='bx bx-pencil'></i></button>
                    </div>
                    <div className="flex">
                        <DropdownFilter></DropdownFilter>
                        <button onClick={() => handleShow('add')} data-cy="todo-add-button" className="font-bold text-lg main-color my-8 px-10 rounded-full text-white before:content-['+'] before:text-xl"> Tambah</button>
                    </div>
                </div>
                {
                    todo.length === 0 ?
                        <div data-cy="todo-empty-state" className="flex justify-center hover:cursor-pointer" onClick={() => { handleShow('add') }}>
                            <img src={image} alt="Todo Empty State" loading="lazy" />
                        </div> :
                        <div className="flex flex-col gap-2 items-center">
                            {
                                onLoad ? <Spinner animation="border" variant="primary" /> :
                                    todo.map((item, key) => (
                                        <div key={key} data-cy="todo-item-1" className="bg-white rounded-lg shadow-xl p-5 w-full text-start flex justify-between">
                                            <div className="flex items-center">
                                                <input onChange={() => { handleCheck(item) }} checked={!item.is_active} data-cy="todo-item-checkbox" type="checkbox" className="ml-5 w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                                <div data-cy="todo-item-priority-indicator" className={item.priority === 'very-high' ? 'ml-5 w-2 h-2 rounded-full very-high' : item.priority === 'high' ? 'ml-5 w-2 h-2 rounded-full high' : item.priority === 'normal' ? 'ml-5 w-2 h-2 rounded-full medium' : item.priority === 'low' ? 'ml-5 w-2 h-2 rounded-full low' : 'ml-5 w-2 h-2 rounded-full very-low'}></div>
                                                <h2 data-cy="todo-item-title" className={!item.is_active ? 'line-through ml-5 font-bold text-lg text-gray-400' : 'ml-5 font-bold text-lg'}>{item.title} </h2>
                                                <button onClick={() => handleShow('edit', item)} data-cy="todo-item-edit-button" className="ml-5 text-xl text-gray-400"><i className='bx bx-pencil'></i></button>
                                            </div>
                                            <div className="flex">
                                                <button onClick={() => handleShowDelete(item)} data-cy="todo-item-delete-button" className="ml-5 text-xl text-gray-400"><i className='bx bx-trash'></i></button>
                                            </div>
                                        </div>
                                    ))
                            }
                        </div>
                }
            </div>
            <FormModal show={show} type={type} edit={editItem} activity_group_id={location.state.item.id} handleClose={handleClose} />
            <DeleteModal show={showDelete} item={deleteItem} type="todo" handleClose={handleCloseDelete}></DeleteModal>
        </>
    )
}

export default Activity;