// Code your solution in this file!
const distanceFromHqInBlocks = (x) => {
    return (Math.abs(42-x))
}

const distanceFromHqInFeet = (x) => {

  return  (Math.abs((42-x)*264))
}

const distanceTravelledInFeet = (x,y) => {
    return (Math.abs(x-y)*264)
}
const calculatesFarePrice = (x,y) => {
    let dist = Math.abs(x-y)*264;
   if (dist>=400 && dist<=2000) {
            return ((dist - 400)*.02)
        }
        else if (dist<400) {
            return 0
        }
        else if (dist>=2001 && dist <2500) {return 25}
        else {return 'cannot travel that far'}
    }
     


