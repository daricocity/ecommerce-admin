import './home.css';
// import {userData} from '../../data';
import { userRequest } from '../../utils';
import Chart from '../../components/chart/Chart';
import {useState, useMemo, useEffect} from 'react';
import WidgetSm from '../../components/widgetSm/WidgetSm';
import WidgetLg from '../../components/widgetLg/WidgetLg';
import FeacturedInfo from '../../components/featuredinfo/FeaturedInfo';

const Home = () => {

    const [userStats, setUserStats] = useState([]);
    const MONTHS = useMemo(() => ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],[]);
    useEffect(() => {
        const getStats = async () => {
            try {
                const res = await userRequest.get('/users/stats');
                res.data.map((item) =>
                    setUserStats((prev) => [
                        ...prev,
                        {name: MONTHS[item._id - 1], 'Active User': item.total}
                    ])
                )
            } catch {}
        };
        getStats();
    }, [MONTHS])

    return (
        <div className='home'>
            <FeacturedInfo/>
            <Chart data={userStats} title='User Analytics' dataKey='Active User' grid />
            <div className='homeWidgets'>
                <WidgetSm/>
                <WidgetLg/>
            </div>
        </div>
    )
};

export default Home;
