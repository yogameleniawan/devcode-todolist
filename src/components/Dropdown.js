import Dropdown from 'react-bootstrap/Dropdown';

const DropdownFilter = () => {
    return (
        <Dropdown>
            <Dropdown.Toggle data-cy="todo-sort-button" className="text-xl text-gray-400 my-8 px-3 mx-2 rounded-full border-sodivd border-gray-300 border hover:bg-transparent hover:text-gray-400 ">
                <i className='bx bx-sort-alt-2 text-2xl'></i>
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item>
                    <div data-cy="sort-latest" className="hover:cursor-pointer  hover:rounded-md">
                        <div className="flex  items-center justify-between ">
                            <div className="flex items-center">
                                <i className='text-lg bx bx-sort-down text-blue-400 mx-2'></i>
                                <p className="text-lg">Terbaru</p>
                            </div>
                            <i className='bx bx-check text-lg'></i>
                        </div>
                    </div>
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item>
                    <div data-cy="sort-oldest" className="hover:cursor-pointer hover:rounded-md">
                        <div className="flex  items-center justify-between ">
                            <div className="flex items-center">
                                <i className='text-lg bx bx-sort-down text-blue-400 mx-2'></i>
                                <p className="text-lg">Terlama</p>
                            </div>
                        </div>
                    </div>
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item>
                    <div data-cy="sort-az" className="hover:cursor-pointer  hover:rounded-md">
                        <div className="flex  items-center justify-between ">
                            <div className="flex items-center">
                                <i className='text-lg bx bx-sort-a-z text-blue-400 mx-2'></i>
                                <p className="text-lg">A - Z</p>
                            </div>
                        </div>
                    </div>
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item>
                    <div data-cy="sort-za" className="hover:cursor-pointer  hover:rounded-md">
                        <div className="flex  items-center justify-between ">
                            <div className="flex items-center">
                                <i className='text-lg bx bx-sort-z-a text-blue-400 mx-2'></i>
                                <p className="text-lg">Z - A</p>
                            </div>
                        </div>
                    </div>
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item>
                    <div data-cy="sort-unfinished" className="hover:cursor-pointer  hover:rounded-md">
                        <div className="flex items-center justify-between ">
                            <div className="flex items-center">
                                <i className='text-lg bx bx-sort-z-a text-blue-400 mx-2'></i>
                                <p className="text-lg">Z - A</p>
                            </div>
                        </div>
                    </div>
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}

export default DropdownFilter;