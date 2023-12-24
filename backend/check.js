const images = [        {
    "fieldname": "subMenuImages",
    "originalname": "google-map-image.png",
    "encoding": "7bit",
    "mimetype": "image/png",
    "destination": "uploads/",
    "filename": "subMenuImages-1703400280170-300477415",
    "path": "uploads\\subMenuImages-1703400280170-300477415",
    "size": 1066170
},
{
    "fieldname": "subMenuImages",
    "originalname": "imageForSignIn.jpg",
    "encoding": "7bit",
    "mimetype": "image/jpeg",
    "destination": "uploads/",
    "filename": "subMenuImages-1703400280184-660818231",
    "path": "uploads\\subMenuImages-1703400280184-660818231",
    "size": 34770
},
{
    "fieldname": "subMenuImages",
    "originalname": "beautiful-home-2.jpg",
    "encoding": "7bit",
    "mimetype": "image/jpeg",
    "destination": "uploads/",
    "filename": "subMenuImages-1703400280185-475383355",
    "path": "uploads\\subMenuImages-1703400280185-475383355",
    "size": 8531
},
{
    "fieldname": "subMenuImages",
    "originalname": "beautiful-home-1.jpg",
    "encoding": "7bit",
    "mimetype": "image/jpeg",
    "destination": "uploads/",
    "filename": "subMenuImages-1703400280185-420940606",
    "path": "uploads\\subMenuImages-1703400280185-420940606",
    "size": 3102917
}]

const imagePath = images.map((image)=>{
    return image.filename
})

console.log(imagePath)