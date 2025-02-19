import { Button } from "@/components/ui/button";
import Service from "@/Shared/Service";
import { useUser } from "@clerk/clerk-react";
import React from "react";
import { useNavigate } from "react-router-dom";

const OwnersDetail = ({ carDetail }) => {

  const {user} = useUser()

  const navigate = useNavigate()

  const OnMessageOwnerButtonClick = async () => {
    const userId = user.primaryEmailAddress.emailAddress.split('@')[0] ; 

    const ownerUserId = carDetail?.createdBy?.split('@')[0] ;

    // Create current user id 

      try {
        
        await Service.CreateSendBirdUser(
            userId, 
            user?.fullName , 
            user?.imageUrl
        ).then(resp => {
          console.log(resp)
        })
      } catch (error) {
          console.log('On message owner button click: ', error || error.message) 
      }

    // owner user id 

    try{
       
      await Service.CreateSendBirdUser(
        ownerUserId, 
        carDetail?.userName , 
        carDetail?.userImageUrl
    ).then(resp => {
      console.log(resp)
    })
    }catch(error){
      console.log('owner user id error: ', error)
    }

    // create channel 

    try{
      await Service.CreateSendBirdChannel([userId, ownerUserId], carDetail?.listingTitle)
      .then(resp => {
        console.log(resp)
        console.log('Channel created')

        navigate('/profile')
      })
    }catch(error){
      console.log('Channel create error: ', error || error.response)
    }

  }

 

  return (
    <div className="p-10 border rounded-xl shadow-md mt-7">
      <h2 className="font-medium text-2xl mb-3">Owner</h2>

      {/* Flex container for image and details */}
      <div className="flex items-center gap-4">
        {/* Owner Image */}
        <img
          src={carDetail?.userImageUrl}
          className="w-[70px] h-[70px] rounded-full"
          alt="Owner"
        />
        
        {/* Owner Details */}
        <div>
          <h2 className="font-bold text-xl">{carDetail?.userName}</h2>
          <h2 className="text-gray-500">{carDetail?.createdBy}</h2>
        </div>
      </div>

      {/* Message Button */}

      <Button 
        className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white cursor-pointer"
        onClick={OnMessageOwnerButtonClick}
      >Message Owner</Button>
    </div>
  );
};

export default OwnersDetail;
