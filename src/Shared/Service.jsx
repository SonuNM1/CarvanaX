
import axios from 'axios' ; 

const SendBirdApplicationId = import.meta.env.VITE_SENDBIRD_APP_ID ; 

const SendBirdApiToken = import.meta.env.VITE_SENDBIRD_API_TOKEN ; 

const FormatResult = (resp) => {
    let result = {}; // Using object for better performance
    let finalResult = [];

    resp.forEach((item) => {
        const listingId = item.carListing?.id;

        // If listingId is invalid, skip the item
        if (!listingId) return;

        if (!result[listingId]) {
            result[listingId] = {
                car: item.carListing,
                images: []  // Initialize empty images array
            };
        }

        // console.log("Listing ID:", listingId, "Result Object:", result[listingId]);

        // Check if carImages is an object and has an imageUrl
        if (item.carImages && item.carImages.imageUrl) {
            result[listingId].images.push(item.carImages.imageUrl); // Push imageUrl to images array
        }
    });

    // Convert the result object into an array
    Object.values(result).forEach((item) => {
        finalResult.push({
            ...item.car,
            images: item.images || []  // Ensure images is always an array
        });
    });

    return finalResult;
};

const CreateSendBirdUser = (userId, nickName, profileUrl) => {

    return axios.post('https://api-'+SendBirdApplicationId+'.sendbird.com/v3/users', {
        user_id : userId,
        nickname: nickName,
        profile_url: profileUrl,
        issue_access_token: false
    }, {
        headers: {
            'Content-Type': 'application/json', 
            'Api-Token': SendBirdApiToken
        }
    })
}

const CreateSendBirdChannel = (users, title) => {
    return axios.post('https://api-'+SendBirdApplicationId+'.sendbird.com/v3/group_channels', {
        user_ids: users,
        is_distinct: true, 
        name: title,  
    }, {
        headers: {
            'Content-Type': 'application/json',
            'Api-Token': SendBirdApiToken
        }
    })
}

export default {
    FormatResult,
    CreateSendBirdUser,
    CreateSendBirdChannel
};
