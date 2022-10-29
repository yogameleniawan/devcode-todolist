import moment from 'moment';
import { useEffect, useState } from 'react';
import { Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import DeleteModal from '../components/DeleteModal';
import image from './../assets/img/activity-empty-state.png';
import { create, getActivities } from './../store/actions/activity';

const Dashboard = () => {
    const activity = useSelector(state => state.activity);
    const dispatch = useDispatch();

    const [showDelete, setShowDelete] = useState(false);
    const [deleteItem, setDeleteItem] = useState([]);
    const [process, setProcess] = useState(false);

    const handleCloseDelete = () => setShowDelete(false);

    const handleShowDelete = (item) => {
        setShowDelete(true)
        setDeleteItem(item)
    };

    const createActivity = () => {
        setProcess(true)
        dispatch(create({ title: 'New Activity', email: 'yogameleniawan@gmail.com' })).then((data) => {
            localStorage.setItem("activities", activity)
            setProcess(false)
        }).catch(e => {
            console.log(e);
        });
    }

    useEffect(() => {
        if (activity.length === 0) {
            dispatch(getActivities());
        }
    }, [activity, dispatch])

    return (
        <div className="container flex flex-col">
            <div className="flex justify-between">
                <h1 data-cy="activity-title" className="font-bold text-4xl py-10">Activity</h1>
                <div data-cy="activity-add-button" >
                    {process ? <button className="font-bold text-lg main-color my-8 px-10 rounded-full text-white"><Spinner animation="border" variant="light" /></button> : <button className="font-bold text-lg main-color my-8 px-10 rounded-full text-white before:content-['+'] before:text-xl before:px-2" onClick={createActivity}>Tambah</button>}
                </div>
            </div>
            {
                activity.length === 0 ? <div data-cy="activity-empty-state" className="flex justify-center">
                    <img src={image} alt="Activity Empty State" loading="lazy" onClick={createActivity} className="hover: cursor-pointer" />
                </div> : <div className="flex flex-wrap gap-5">
                    {
                        activity.map((item, key) => (
                            <div data-cy="activity-item" className="bg-white rounded-lg shadow-xl p-4 w-60 text-start" key={key}>
                                <div data-cy="activity-item-title">
                                    <Link to={"/detail/" + item.id} state={{ item: item }} className="text-black">
                                        <h2 className="font-bold text-lg mb-24">{item.title} </h2>
                                    </Link>
                                </div>
                                <div className="z-10 flex justify-between align-center">
                                    <p data-cy="activity-item-delete-button" className="text-sm text-gray-500">{moment(item.created_at).locale('id', require('moment/locale/id')).format('D MMMM yyyy')}</p>
                                    <div data-cy="activity-item-date">
                                        <button onClick={() => handleShowDelete(item)} className="text-xl text-gray-500"><i className='bx bx-trash'></i></button>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            }
            <DeleteModal show={showDelete} item={deleteItem} type="activity" handleClose={handleCloseDelete}></DeleteModal>
        </div>
    )
}

export default Dashboard;
