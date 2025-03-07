import React from 'react'

const LocationSearchPanel = (props) => {
  console.log(props);
  

  //sample array for location
  const locations = [
    "24B near Kapoor's cafe,Sheriyans coding school,bhopal",
    "22C near malhotra's cafe,Sheriyans coding school,bhopal",
    "20B near Singh's cafe,Sheriyans coding school,bhopal",
    "18A near Sharma's cafe,Sheriyans coding school,bhopal",
  ]

  return (
    <div>
      {/* this is just a sample data */}
      {
        location.map(function(elem){
          return <div key={idx} onClick={()=>{
            props.setVehiclePanel(true)
            props.setPanelOpen(false)
          }}  className='flex gap-4 items-center my-2 justify-start'>
              <h2 className='bg-[#eee] h-8 w-12 flex items-center justify-center rounded-full'><i className="ri-map-pin-fill text-xl"></i></h2>
              <h4 className='text-lg font-medium'>{elem}</h4>
            </div>
        })
      }
    </div>
    )
}

export default LocationSearchPanel