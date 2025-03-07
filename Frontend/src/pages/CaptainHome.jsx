import React from 'react'
import CaptainDetails from '../components/CaptainDetails'
import RidePopUp from '../components/RidePopUp'
import ConfirmRidePopUp from '../components/ConfirmRidePopUp'

const CaptainHome = () => {

  const [ridePopUpPanel, setridePopUpPanel] = useState(true)
  const [confirmRidePopupPanel, setconfirmRidePopupPanel] = useState(false)

  const ridePopUpPanelRef = useRef(null) 
  const confirmRidePopupPanelRef = useRef(null) 

  useGSAP(function () {
    if (ridePopUpPanel) {
      gsap.to(ridePopUpPanelRef.current, {
        transform: 'translateY(0)'
      })
    } else {
      gsap.to(ridePopUpPanelRef.current, {
        transform: 'translateY(100%)'
      })
    }
  }, [ridePopUpPanel])

  useGSAP(function () {
    if (confirmRidePopupPanel) {
      gsap.to(confirmRidePopupPanelRef.current, {
        transform: 'translateY(0)'
      })
    } else {
      gsap.to(confirmRidePopupPanelRef.current, {
        transform: 'translateY(100%)'
      })
    }
  }, [confirmRidePopupPanel])

  return (
    <div className='h-screen'>
      <div className='fixed p-6 top-0 flex items-center justify-between w-screen'>
        <img className='w-16' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
        <Link to='/home' className='h-10 w-10 bg-white flex items-center justify-center rounded-full'>
          <i class="ri-logout-box-r-line"></i>
        </Link>
      </div>
      <div className='h-3/5'>
        <img className='h-full w-full object-cover' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-o_2s3RDzPvv5OSRUe8lqiRp_FqtBExlQvA&s" alt="" />
      </div>
      <div className='h-2/5 p-6'>
        <CaptainDetails />
      </div>
      <div ref={ridePopUpPanelRef} className='fixed w-full bottom-0 translate-y-full z-10 bg-white px-3 py-10 pt-12' >
        <RidePopUp setRidePopUpPanel={setridePopUpPanel} setConfirmRidePopupPanel={setConfirmRidePopupPanel} />
      </div>
      <div ref={confirmRidePopupPanelRef} className='fixed h-screen w-full bottom-0 translate-y-full z-10 bg-white px-3 py-10 pt-12' >
        <ConfirmRidePopUp setConfirmRidePopupPanel={setConfirmRidePopupPanel} setRidePopUpPanel={setridePopUpPanel}/>
      </div>
    </div>
  )
}

export default CaptainHome
