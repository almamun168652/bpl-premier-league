import PropTypes from 'prop-types';

const Cart = ({perCart}) => {
    const {name , image} = perCart;
    return (
        <div className='flex gap-6 items-center justify-between bg-[#000000c0] p-4 mb-2'>
            <img className='w-12 h-12 rounded-full' src={image} alt="" />
            <h1 className='font-semibold'>{name}</h1>
            <img className='h-10 w-10' src="https://cdn-icons-png.flaticon.com/512/6559/6559073.png" alt="" />
        </div>
    );
};

Cart.propTypes = {
    perCart: PropTypes.object.isRequired,
}

export default Cart;