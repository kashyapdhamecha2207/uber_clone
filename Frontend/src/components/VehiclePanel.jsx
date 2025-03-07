import React from 'react'

const VehiclePanel = (props) => {
  return (
    <div>
      <h5 className='p-1 text-center w-[93%] absolute top-0' onClick={()=>{
          props.setVehiclePanel(false)
        }} ><i className="text-3xl text-gray-200 ri-arrow-down-wide-fill"></i></h5>
        <h3 className='text-2xl font-semibold mb-5'>Choose a Vehicle</h3>
        <div onClick={()=>{
            props.setConfirmRidePanel(true)
        }} className='flex border-2 active:border-black mb-2 rounded-xl w-full p-3 items-center justify-between'>
          <img className='h-10' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_538,w_956/v1688398971/assets/29/fbb8b0-75b1-4e2a-8533-3a364e7042fa/original/UberSelect-White.png" alt="" />
          <div className='ml-2 w-1/2'>
            <h4 className='font-medium text-sm'>UberGo <span><i className="ri-user-3-fill"></i>4</span></h4>
            <h5 className='font-medium text-sm'>2 mins away</h5>
            <p className='font-normal text-xs text-grey-600'>affordable, compact rides</p>
          </div>
          <h2 className='text-lg font-semibold'>$192.20</h2>
        </div>
        <div onClick={()=>{
            props.setConfirmRidePanel(true)
        }} className='flex border-2 active:border-black mb-2 rounded-xl w-full p-3 items-center justify-between'>
          <img className='h-10' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_384,w_576/v1648178001/assets/c2/362140-9bdc-43ac-b149-d73610fcd9b2/original/Uber_Moto_558x372_pixels_Desktop.png" alt="" />
          <div className='-ml-2 w-1/2'>
            <h4 className='font-medium text-sm'>Moto <span><i className="ri-user-3-fill"></i>1</span></h4>
            <h5 className='font-medium text-sm'>3 mins away</h5>
            <p className='font-normal text-xs text-grey-600'>affordable, motorcycle rides</p>
          </div>
          <h2 className='text-lg font-semibold'>$65.17</h2>
        </div>
        <div onClick={()=>{
            props.setConfirmRidePanel(true)
        }} className='flex border-2 active:border-black mb-2 rounded-xl w-full p-3 items-center justify-between'>
          <img className='h-10' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png" alt="" />
          <div className='ml-2 w-1/2'>
            <h4 className='font-medium text-sm'>Uber Auto <span><i className="ri-user-3-fill"></i>3</span></h4>
            <h5 className='font-medium text-sm'>3 mins away</h5>
            <p className='font-normal text-xs text-grey-600'>affordable auto rides</p>
          </div>
          <h2 className='text-lg font-semibold'>$118.17</h2>
        </div>
    </div>
  )
}

export default VehiclePanel
