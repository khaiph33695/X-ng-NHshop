/* eslint-disable @typescript-eslint/no-explicit-any */

import useCart from '@/common/hooks/useCart'
import { ChangeEvent } from 'react'
import { NavLink } from 'react-router-dom'

const CartPage = () => {
    const { data, mutate,  calculateTotal, isLoading, isError } = useCart()
    if (isLoading) return <p>Loading...</p>
    if (isError) return <p>Error</p>

    return (
        <div className='container'>
            <table className='w-full'>
                <thead>
                    <tr>
                        <th>Stt</th>
                        <th>Tên sản phẩm</th>
                        <th>Giá</th>
                        <th>Số lượng</th>
                        <th>Tổng giá</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {data?.products.map((product: any, index: number) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td className='border border-gray-200 px-4 py-2'>{product.name}</td>
                            <td className='border border-gray-200 px-4 py-2'>{product.price}</td>
                            <td className='border border-gray-200 px-4 py-2'>
                                <button
                                    className='py-2 px-4 bg-slate-400 rounded'
                                    onClick={() =>
                                        mutate({
                                            action: 'DECREMENT',
                                            productId: product.productId
                                        })
                                    }
                                >
                                    -
                                </button>
                                <span className='px-4'>{product.quantity}</span>
                                <button
                                    className='py-2 px-4 bg-emerald-400 rounded'
                                    onClick={() =>
                                        mutate({
                                            action: 'INCREMENT',
                                            productId: product.productId
                                        })
                                    }
                                >
                                    +
                                </button>
                            </td>
                            <td className='border border-gray-200 px-4 py-2'>{product.price * product.quantity}</td>
                            <td className='border border-gray-200 px-4 py-2'>
                                <button
                                    className='py-2 px-4 bg-red-500 text-white rounded-sm'
                                    onClick={() =>
                                        mutate({
                                            action: 'REMOVE',
                                            productId: product.productId
                                        })
                                    }
                                >
                                    Xóa
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <p className='mt-4'>Total: ${calculateTotal()}</p>
            <NavLink to='/order' className='mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded'>
                CheckOut
            </NavLink>
        </div>
    )
}

export default CartPage
