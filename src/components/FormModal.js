import { useRef, useState } from "react";
import { Form, Modal, Spinner } from "react-bootstrap";
import { useDispatch } from "react-redux";
import Select from 'react-select';
import { createTodo, updateDataTodo } from "../store/actions/todo";

const FormModal = ({ show, handleClose, type, activity_group_id, edit }) => {

    const priority = useRef();
    const titleInput = useRef();
    const [title, setTitle] = useState();
    const [isSubmit, setIsSubmit] = useState(false);
    const dispatch = useDispatch();

    const colourOptions = [
        { value: 'very-high', label: 'Very High', color: '#ED4C5C' },
        { value: 'high', label: 'High', color: '#F8A541' },
        { value: 'normal', label: 'Medium', color: '#00A790' },
        { value: 'low', label: 'Low', color: '#428BC1' },
        { value: 'very-low', label: 'Very Low', color: '#8942C1' },
    ];

    const customStyles = {
        menu: (provided, state) => ({
            ...provided,
            width: 200,
            borderBottom: '1px dotted pink',
            color: 'black',
        }),
        option: (styles, { data }) => {
            return {
                ...styles,
                alignItems: 'center',
                display: 'flex',

                ':before': {
                    backgroundColor: data.color,
                    borderRadius: 20,
                    content: '" "',
                    display: 'block',
                    marginRight: 10,
                    height: 15,
                    width: 15,
                },
            };
        },
        singleValue: (styles, { data }) => {
            return {
                ...styles,
                alignItems: 'center',
                display: 'flex',
                ':before': {
                    backgroundColor: data.color,
                    borderRadius: 20,
                    content: '" "',
                    display: 'block',
                    marginRight: 10,
                    height: 15,
                    width: 15,
                },
            };
        }
    }

    const handleSubmit = () => {
        setIsSubmit(true)
        switch (type) {
            case "add":
                dispatch(createTodo({ activity_group_id: activity_group_id, title: titleInput.current.value })).then((data) => {
                    dispatch(updateDataTodo({ title: titleInput.current.value, priority: priority.current.props.value.value, is_active: true, id: data.id })).then(() => {
                        setIsSubmit(false)
                        handleClose()
                        setTitle("")
                    })
                });
                break;
            case "edit":
                dispatch(updateDataTodo({ title: titleInput.current.value, priority: priority.current.props.value.value, is_active: edit.is_active, id: edit.id })).then(() => {
                    setIsSubmit(false)
                    handleClose()
                    setTitle("")
                })
                break;
            default:
                break;
        }
    }

    const handleChangeTitle = (e) => {
        setTitle(e.target.value);
    }

    return (
        <Modal data-cy="modal-add" show={show} onHide={handleClose} size="lg">
            <Modal.Header closeButton>
                <Modal.Title data-cy="modal-add-title" className="text-lg font-bold">{type === 'add' ? 'Tambah' : 'Edit'} Item List</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label data-cy="modal-add-name-title">Nama List Item</Form.Label>
                        <Form.Control ref={titleInput} defaultValue={edit === undefined ? title : edit.title} onChange={(e) => handleChangeTitle(e)} data-cy="modal-add-name-input" type="text" placeholder="Nama List Item" />
                    </Form.Group>
                    <Form.Group className="mb-3 w-44" controlId="exampleForm.ControlInput1">
                        <Form.Label data-cy="modal-add-priority-title">Priority</Form.Label>
                        <Select
                            ref={priority}
                            data-cy="modal-add-priority-dropdown"
                            className="basic-single"
                            classNamePrefix="select"
                            defaultValue={edit === undefined ? colourOptions[0] : colourOptions[colourOptions.findIndex(x => x.value === edit.priority)]}
                            isSearchable={true}
                            name="color"
                            options={colourOptions}
                            styles={customStyles}
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                {isSubmit ? <div className="font-bold text-lg main-color py-3 px-10 rounded-full text-white"><Spinner animation="border" variant="light" /></div> : <button onClick={() => handleSubmit()} data-cy="modal-add-save-button" className="font-bold text-lg main-color py-3 px-10 rounded-full text-white disabled:opacity-50" disabled={edit === undefined ? title === undefined : edit.title === ""}> Simpan</button>}
            </Modal.Footer>
        </Modal>
    )
}

export default FormModal;