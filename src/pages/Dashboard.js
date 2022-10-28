import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import DeleteModal from '../components/DeleteModal';
import Endpoint from '../services/Endpoint';
import image from './../assets/img/activity-empty-state.png';
import { create } from './../store/actions/activity';

const Dashboard = () => {
    const activity = useSelector(state => state.activity);
    const dispatch = useDispatch();

    const [showDelete, setShowDelete] = useState(false);

    const handleCloseDelete = () => setShowDelete(false);

    const handleShowDelete = () => setShowDelete(true);

    const createActivity = () => {
        dispatch(create({ title: 'Tes', email: 'yogameleniawan@gmail.com' })).then((data) => {
            console.log(data)
        }).catch(e => {
            console.log(e);
        });
    }

    useEffect(() => {
        console.log(activity)
    }, [])

    return (
        <div className="container flex flex-col">
            <div className="flex justify-between">
                <h1 data-cy="activity-title" className="font-bold text-4xl py-10">Activity</h1>
                <button data-cy="activity-add-button" className="font-bold text-lg main-color my-8 px-10 rounded-full text-white before:content-['+'] before:text-xl" onClick={createActivity}> Tambah</button>
            </div>
            {/* <div data-cy="activity-empty-state" className="flex justify-center">
                <img src={image} alt="Activity Empty State" loading="lazy" />
            </div> */}
            <div className="flex flex-wrap gap-4">
                <div data-cy="activity-item-1" className="bg-white rounded-lg shadow-xl p-4 w-60 text-start">
                    <Link to="/detail" className="text-black">
                        <h2 data-cy="activity-item-title" className="font-bold text-lg mb-24">Daftar Belanja Bulanan </h2>
                    </Link>
                    <div className="z-10 flex justify-between align-center">
                        <p data-cy="activity-item-delete-button" className="text-sm text-gray-500">5 Oktober 2022</p>
                        <button onClick={handleShowDelete} data-cy="activity-item-date" className="text-xl text-gray-500"><i className='bx bx-trash'></i></button>
                    </div>
                </div>
            </div>
            <DeleteModal show={showDelete} handleClose={handleCloseDelete}></DeleteModal>
        </div>
    )
}

export default Dashboard;
