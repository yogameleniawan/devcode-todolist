import { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { useDispatch } from 'react-redux';
import { filterData } from '../store/actions/todo';

const DropdownFilter = () => {
    const [type, setType] = useState();
    const dispatch = useDispatch();

    const changeFilter = (type) => {
        dispatch(filterData(type));
        setType(type)
    }

    return (
        <Dropdown>
            <div data-cy="todo-sort-button">
                <Dropdown.Toggle className="text-xl text-gray-400 my-8 px-3 py-2 mx-2 rounded-full border-sodivd border-gray-300 border hover:bg-transparent hover:text-gray-400 ">
                    <i className='bx bx-sort-alt-2 text-2xl'></i>
                </Dropdown.Toggle>
            </div>

            <Dropdown.Menu className="w-64">
                <Dropdown.Item>
                    <div onClick={() => changeFilter('sort-latest')} data-cy="sort-latest" className="hover:cursor-pointer  hover:rounded-md">
                        <div className="flex  items-center justify-between ">
                            <div className="flex items-center">
                                <i className='text-lg bx bx-sort-down text-blue-400 mx-2'></i>
                                <p className="text-lg">Terbaru</p>
                            </div>
                            {type === 'sort-latest' ? <i className='bx bx-check text-lg'></i> : ''}
                        </div>
                    </div>
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item>
                    <div onClick={() => changeFilter('sort-oldest')} data-cy="sort-oldest" className="hover:cursor-pointer hover:rounded-md">
                        <div className="flex  items-center justify-between ">
                            <div className="flex items-center">
                                <i className='text-lg bx bx-sort-down text-blue-400 mx-2'></i>
                                <p className="text-lg">Terlama</p>
                            </div>

                            {type === 'sort-oldest' ? <i className='bx bx-check text-lg'></i> : ''}
                        </div>
                    </div>
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item>
                    <div onClick={() => changeFilter('sort-az')} data-cy="sort-az" className="hover:cursor-pointer  hover:rounded-md">
                        <div className="flex  items-center justify-between ">
                            <div className="flex items-center">
                                <i className='text-lg bx bx-sort-a-z text-blue-400 mx-2'></i>
                                <p className="text-lg">A - Z</p>
                            </div>
                            {type === 'sort-az' ? <i className='bx bx-check text-lg'></i> : ''}
                        </div>
                    </div>
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item>
                    <div onClick={() => changeFilter('sort-za')} data-cy="sort-za" className="hover:cursor-pointer  hover:rounded-md">
                        <div className="flex items-center justify-between ">
                            <div className="flex items-center">
                                <i className='text-lg bx bx-sort-z-a text-blue-400 mx-2'></i>
                                <p className="text-lg">Z - A</p>
                            </div>
                            {type === 'sort-za' ? <i className='bx bx-check text-lg'></i> : ''}
                        </div>
                    </div>
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item>
                    <div onClick={() => changeFilter('sort-unfinished')} data-cy="sort-unfinished" className="hover:cursor-pointer  hover:rounded-md">
                        <div className="flex items-center justify-between ">
                            <div className="flex items-center">
                                <i className='text-lg bx bx-sort-alt-2 text-blue-400 mx-2'></i>
                                <p className="text-lg">Belum Selesai</p>
                            </div>
                            {type === 'sort-unfinished' ? <i className='bx bx-check text-lg'></i> : ''}
                        </div>
                    </div>
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}

export default DropdownFilter;