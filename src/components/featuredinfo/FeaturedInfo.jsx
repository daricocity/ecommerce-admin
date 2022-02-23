import './featuredInfo.css';
import { userRequest } from '../../utils';
import { useEffect, useState } from 'react';
import ArrowUpward from '@material-ui/icons/ArrowUpward'
import ArrowDownward from '@material-ui/icons/ArrowDownward';

const FeacturedInfo = () => {
    const [perc, setPerc] = useState(0);
    const [income, setIncome] = useState([]);

    useEffect(() => {
        const getIncome = async () => {
            try {
                const res = await userRequest.get('orders/income');
                setIncome(res.data);
                setPerc((res.data[1].total*100) / res.data[0].total - 100);
            } catch {}
        };
        getIncome();
    }, [])

    return (
        <div className='featured'>
            <div className="featuredItem">
                <span className="featuredTitle">Revenue</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">${income[1]?.total || 2309}</span>
                    <span className="featuredMoneyRate">
                        {Math.floor(perc)  || '11.4'}%{" "}
                        {perc < 0 ? <ArrowDownward className='featuredIcon negative'/> : <ArrowUpward className='featuredIcon'/>}
                    </span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Sales</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$3,451</span>
                    <span className="featuredMoneyRate">-31.4 <ArrowDownward className='featuredIcon negative'/> </span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Cost</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$200</span>
                    <span className="featuredMoneyRate"> +12<ArrowUpward className='featuredIcon'/></span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>
        </div>
    )
};

export default FeacturedInfo;