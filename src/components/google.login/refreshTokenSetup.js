export const refreshTokenSetup = (res) => {
    let refreshTiming = (res.tokenObj.expires_in || 3600- 5 * 60) *1000;
    const refreshToken = async() => {
        const newAuthRes = await res.reloaduthReponse();
        refreshTiming = (res.tokenObj.expires_in || 3600- 5 * 60) *1000;
        console.log('newAuthRes:', newAuthRes);
        //Save new token
        console.log('new auth Token', newAuthRes.id_token);
        //etup other timer after the first one
        setTimeout(refreshToken,refreshTiming);

    };
    //Set first refresh timer
    setTimeout(refreshToken,refreshTiming);
};