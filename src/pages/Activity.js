import { useState } from "react";
import { Link } from "react-router-dom";
import image from './../assets/img/todo-empty-state.png';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Select from 'react-select';
const Activity = () => {
    const [open, setOpen] = useState(false);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const colourOptions = [
        { value: 'veryhigh', label: 'Very High', style: { color: 'red' } },
        { value: 'high', label: 'High' },
        { value: 'medium', label: 'Medium' },
        { value: 'low', label: 'Low' },
        { value: 'verylow', label: 'Very Low' },
    ];

    const dot = (color = 'transparent') => ({
        alignItems: 'center',
        display: 'flex',
      
        ':before': {
          backgroundColor: 'red',
          borderRadius: 20,
          content: '" "',
          display: 'block',
          marginRight: 10,
          height: 15,
          width: 15,
        },
      });

    const customStyles = {
        menu: (provided, state) => ({
            ...provided,
            width: 200,
            borderBottom: '1px dotted pink',
            color: 'black',
        }),
        option: (provided, state) => {
            return { ...provided, ...dot() };
        },
        singleValue: (provided, state) => {
          return { ...provided, ...dot() };
        }
      }
    
    const handleOpen = () => {
        setOpen(!open);
    }

    return (
        <div className="container flex flex-col">
            <div className="flex justify-between">
                <div className="flex items-center">
                    <Link to="/" data-cy="todo-back-button" className="text-4xl text-black"><i className='bx bxs-chevron-left'></i></Link>
                    <h1 data-cy="todo-title" className="font-bold text-4xl py-10 px-5">Activity</h1>
                    <button data-cy="todo-title-edit-button" className="text-xl text-gray-400"><i className='bx bx-pencil'></i></button>
                </div>
                <div className="flex">
                    <button onClick={handleOpen} data-cy="todo-sort-button" className="text-xl text-gray-400 my-8 px-3 mx-2 rounded-full border-solid border-gray-300 border"><i className='bx bx-sort-alt-2 text-2xl'></i></button>
                    <div id="dropdown" className={open ? 'absolute top-52 z-10 w-52 bg-white rounded-lg divide-y divide-gray-100 shadow dark:bg-gray-700' : 'hidden'}>
                        <ul data-cy="sort-parent" className="rounded-lg border-2 border-gray-200 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefault">
                            <li data-cy="sort-latest" className="hover:cursor-pointer hover:bg-gray-200 hover:rounded-md">
                                <div className="flex p-3 items-center justify-between border-b-2 border-b-gray-200">
                                    <div className="flex items-center">
                                        <i className='text-lg bx bx-sort-down text-blue-400 mx-2'></i>
                                        <p className="text-lg">Terbaru</p>
                                    </div>
                                    <i className='bx bx-check text-lg'></i>
                                </div>
                            </li>
                            <li data-cy="sort-oldest" className="hover:cursor-pointer hover:bg-gray-200 hover:rounded-md">
                                <div className="flex p-3 items-center justify-between border-b-2 border-b-gray-200">
                                    <div className="flex items-center">
                                        <i className='text-lg bx bx-sort-down text-blue-400 mx-2'></i>
                                        <p className="text-lg">Terlama</p>
                                    </div>
                                </div>
                            </li>
                            <li data-cy="sort-az" className="hover:cursor-pointer hover:bg-gray-200 hover:rounded-md">
                                <div className="flex p-3 items-center justify-between border-b-2 border-b-gray-200">
                                    <div className="flex items-center">
                                        <i className='text-lg bx bx-sort-a-z text-blue-400 mx-2'></i>
                                        <p className="text-lg">A - Z</p>
                                    </div>
                                </div>
                            </li>
                            <li data-cy="sort-za" className="hover:cursor-pointer hover:bg-gray-200 hover:rounded-md">
                                <div className="flex p-3 items-center justify-between border-b-2 border-b-gray-200">
                                    <div className="flex items-center">
                                        <i className='text-lg bx bx-sort-z-a text-blue-400 mx-2'></i>
                                        <p className="text-lg">Z - A</p>
                                    </div>
                                </div>
                            </li>
                            <li data-cy="sort-unfinished" className="hover:cursor-pointer hover:bg-gray-200 hover:rounded-md">
                                <div className="flex p-3 items-center justify-between ">
                                    <div className="flex items-center">
                                        <i className='text-lg bx bx-sort-z-a text-blue-400 mx-2'></i>
                                        <p className="text-lg">Z - A</p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
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
                        <button data-cy="todo-item-edit-button" className="ml-5 text-xl text-gray-400"><i className='bx bx-pencil'></i></button>
                    </div>
                    <div className="flex">
                        <button data-cy="todo-item-delete-button" className="ml-5 text-xl text-gray-400"><i className='bx bx-trash'></i></button>
                    </div>
                </div>
            </div>
            <Modal data-cy="modal-add" show={show} onHide={handleClose} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title data-cy="modal-add-title" className="text-lg font-bold">Tambah Item List</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label data-cy="modal-add-name-title">Nama List Item</Form.Label>
                            <Form.Control data-cy="modal-add-name-input" type="text" placeholder="Nama List Item" />
                        </Form.Group>
                        <Form.Group className="mb-3 w-44" controlId="exampleForm.ControlInput1">
                            <Form.Label data-cy="modal-add-priority-title">Priority</Form.Label>
                            <Select
                                data-cy="modal-add-priority-dropdown"
                                className="basic-single"
                                classNamePrefix="select"
                                defaultValue={colourOptions[0]}
                                isSearchable={true}
                                name="color"
                                options={colourOptions}
                                styles={customStyles}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                <button onClick={handleClose} data-cy="modal-add-save-button" className="font-bold text-lg main-color py-3 px-10 rounded-full text-white"> Simpan</button>
            </Modal.Footer>
        </Modal>
        </div>
    )
}

export default Activity;