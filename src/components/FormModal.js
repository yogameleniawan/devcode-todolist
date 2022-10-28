import { Form, Modal } from "react-bootstrap";
import Select from 'react-select';

const FormModal = ({ show, handleClose }) => {

    const colourOptions = [
        { value: 'veryhigh', label: 'Very High', color: '#ED4C5C' },
        { value: 'high', label: 'High', color: '#F8A541' },
        { value: 'medium', label: 'Medium', color: '#00A790' },
        { value: 'low', label: 'Low', color: '#428BC1' },
        { value: 'verylow', label: 'Very Low', color: '#8942C1' },
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

    return (
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
    )
}

export default FormModal;