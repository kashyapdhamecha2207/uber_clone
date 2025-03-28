import React from 'react'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../components/LocationSearchPanel';
import VehiclePanel from '../components/VehiclePanel';
import ConfirmRide from '../components/ConfirmRide';
import LookingForDriver from '../components/LookingForDriver';
import WaitingForDrivers from '../components/WaitingForDrivers';

const Home = () => {
  const [pickup, setPickup] = useState('')
  const [destination, setDestination] = useState('')
  const [panelOpen, setPanelOpen] = useState(false)
  const vehiclePanelRef = useRef(null)
  const confirmRidePanelRef = useRef(null)
  const vehicleFoundRef = useRef(null)
  const WaitingForDriverRef = useRef(null)

  const panelRef = useRef(null)
  const panelCloseRef = useRef(null)
  const [vehiclePanel, setvehiclePanel] = useState(false)
  const [ConfirmRidePanel, setConfirmRidePanel] = useState(false)

  const [vehicleFound, setVehicleFound] = useState(false)
  const [waitingForDriver, setWaitingForDriver] = useState(false)

  const submitHandler = () => {
    e.preventDefault()
  }

  useGSAP(function () {
    if (panelOpen) {
      gsap.to(panelRef.current, {
        height: '70%',
        padding: 24
        // opacity: 1
      })
      gsap.to(panelCloseRef.current, {
        opacity: 1,
      })
    }
    else {
      gsap.to(panelRef.current, {
        height: '0%',
        padding: 20
        // opacity: 0
      })
      gsap.to(panelCloseRef.current, {
        opacity: 0
      })
    }
  }, [panelOpen])

  useGSAP(function () {
    if (vehiclePanel) {
      gsap.to(vehiclePanelRef.current, {
        transform: 'translateY(0)'
      })
    } else {
      gsap.to(vehiclePanelRef.current, {
        transform: 'translateY(100%)'
      })
    }
  }, [vehiclePanel])

  useGSAP(function () {
    if (ConfirmRidePanel) {
      gsap.to(ConfirmRidePanelRef.current, {
        transform: 'translateY(0)'
      })
    } else {
      gsap.to(ConfirmRidePanelRef.current, {
        transform: 'translateY(100%)'
      })
    }
  }, [confirmRidePanel])

  useGSAP(function () {
    if (vehicleFound) {
      gsap.to(vehicleFoundRef.current, {
        transform: 'translateY(0)'
      })
    } else {
      gsap.to(vehicleFoundRef.current, {
        transform: 'translateY(100%)'
      })
    }
  }, [vehicleFound])

  useGSAP(function () {
    if (WaitingForDriver) {
      gsap.to(WaitingForDriverRef.current, {
        transform: 'translateY(0)'
      })
    } else {
      gsap.to(WaitingForDriverRef.current, {
        transform: 'translateY(100%)'
      })
    }
  }, [WaitingForDriver])

  return (
    <div className='h-screen relative overflow-hidden'>
      <img className='w-16 absolute left-5 top-5' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
      <div className='h-screen w-screen'>
        <img className='h-full w-full object-cover' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-o_2s3RDzPvv5OSRUe8lqiRp_FqtBExlQvA&s" alt="" />
      </div>
      <div className='bg-white flex flex-col justify-end h-screen absolute top-0 w-full'>
        <div className='h-[30%] p-5 bg-white relative'>
          <h5 ref={panelCloseRef} onClick={() => {
            setPanelOpen(false);
          }} className='absolute opacity-0 right-6 top-6 text-2xl'>
            <i className="ri-arrow-down-wide-line"></i>
          </h5>
          <h4 className='text-3xl font-semibold'>Find a trip</h4>
          <form onSubmit={(e) => {
            submitHandler(e)
          }}>
            <div className='line absolute h-16 w-1 top-[45%] left-5 bg-gray-700 rounded-full'></div>
            <input
              onClick={() => {
                setPanelOpen(true);
              }}
              value={pickup}
              onChange={(e) => {
                setPickup(e.target.value);
              }}
              className='bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-5'
              type="text"
              placeholder='Add a pick-up location'
            />
            <input
              onClick={() => {
                setPanelOpen(true);
              }}
              value={pickup}
              onChange={(e) => {
                setDestination(e.target.value);
              }}
              className='bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-3'
              type="text"
              placeholder='Enter your destination'
            />
          </form>
        </div>
        <div ref={panelRef} className='fixed w-full bottom-0 translate-y-full z-10 bg-white px-3 py-10 pt-12' >
          <LocationSearchPanel setPanelOpen={setPanelOpen} setvehiclePanel={setVehiclePanel} />
        </div>
      </div>
      <div ref={vehiclePanelRef} className='fixed w-full bottom-0 translate-y-full z-10 bg-white px-3 py-10 pt-12'>
        <VehiclePanel setConfirmRidePanel={setConfirmRidePanel} setvehiclePanel={setVehiclePanel} />
      </div>
      <div ref={confirmRidePanelRef} className='fixed w-full bottom-0 translate-y-full z-10 bg-white px-3 py-6 pt-12'>
        <ConfirmRide setConfirmRidePanel={setConfirmRidePanel} setVehicleFound={setVehicleFound} />
      </div>
      <div ref={waitingForDriverRef} className='fixed w-full bottom-0 z-10 bg-white px-3 py-6 pt-12'>
        <WaitingForDriver waitingForDriver={waitingForDriver} />
      </div>
    </div>
  )
}

export default Home;
