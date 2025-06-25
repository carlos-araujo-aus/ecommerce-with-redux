import { useDispatch, useSelector } from 'react-redux';
import { calculateSuperCoins } from './CartSlice';
import './SuperCoin.css';

const SuperCoin = () => {

    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.cartItems)
    const superCoins = useSelector(state => state.cart.superCoins);

    const handleCalculateSuperCoins = () => {
        dispatch(calculateSuperCoins());
    };
  
    return (
        <>
            <div className="super-coins" style={{textAlign:'center'}}>
                <h2 className="super-coins-title">Super Coins</h2>
                <button 
                className="super-coins-btn"                    
                onClick={handleCalculateSuperCoins}
                >
                Calculate Super Coins
                </button>
                {
                    superCoins > 0 && (
                        <p className="super-coins-result">
                            You will earn {superCoins} super coins with this purchase.
                        </p>
                    )
                }
            </div>
        </>
    )
}

export default SuperCoin;