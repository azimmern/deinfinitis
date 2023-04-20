function loadManuscriptImage(id)
{
    //"id" is an ID variable for a manuscript page-image that lives inside our folder structure
    // We need to use string-concatenation, string-trimming, and string-interpolation to tell the img element
    //<img id="manuscriptImage" src=""> 
    // what path to use to find that image in our folder structure.
    // 
    // So if id = "add_6782_f1"
    // Then we need "loadManuscriptImage" to break that up into two things:
    //
    // 1. const ms = "add_6782" (i.e. we need to clip/trim the first part off of id)
    // 
    // 2. const page = "add_6782_f1.jpg"  (i.e. we need to concatenate id +.jpg)
    //
    //and then return this string
    // "/mss-page-images/"+$mn+"/"+"$page"".
    // Ideally, we're calling the function at the "src=' '" in the img element.

}

function loadManuscriptThumbnail(id)
{
    // same thing but for the thumbnail img element <img id="manuscriptThumbnail" src="">
    //Break up id into:
    // 1. const ms
    // 2. const tn
    // And then return "/mss-page-images/$mn/thumbnails/$tn"

}

function loadManuscriptTranscription(id)
{
    // similar but now we're loading text data
    // This is going to get harder due to fragments and layout issues
    // Presumably, we'll need to go to a json file for text-fragments and use a for-loop to iterate
    // through all the fragments for that page-image.

}

function loadManuscriptCommentary(id)
{
    // less difficult perhaps, assuming the commentaries are at page-image-level
    // a little more difficult if they're at fragment level, but feasible.

}