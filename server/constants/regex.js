const REGEXes = {
    nameRegex: /^[a-zA-Z ]+$/,
    facebookRegex: /http(?:s)?:\/\/(?:www\.)?facebook\.com\/([a-zA-Z0-9_]+)/,
    twitterRegex: /http(?:s)?:\/\/(?:www\.)?twitter\.com\/([a-zA-Z0-9_]+)/,
    linkedinRegex: /^https:\/\/[a-z]{2,3}\.linkedin\.com\/.*$/im,
    instagramRegex: /(?:(?:http|https):\/\/)?(?:www\.)?(?:instagram\.com|instagr\.am)\/([A-Za-z0-9-_\.]+)/im,
    mobiileNumberRegex: /^[0-9]+$/
}
export default REGEXes;