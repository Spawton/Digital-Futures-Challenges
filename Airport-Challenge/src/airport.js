class Airport {
  constructor(capacity = 5) {
    this.capacity = capacity; //set initial capacity
    this.landedPlanes = [];//set place for planes to be listed inside

  }
  add(input) {
    this.landedPlanes.push(input);
  }
  checkID(input) {
    if (input.id === "Plane1") return true
  }
  isAirportFull() {
    if (this.landedPlanes.length === this.capacity) return true
  }
  isLanded() {
    return this.landedPlanes.includes(planeID);
  }
  planeTakeOff(planeID) {

    let indexNumber = this.landedPlanes.findIndex((landedPlaneID) => {
      return landedPlaneID == planeID;
    });

    if (indexNumber === -1) {
      let message = `${planeID} Error- Plane is not in Airport!`;
      return message;
    }
    else {
      this.landedPlanes.splice(indexNumber, 1);
      let message = `${planeID} has now taken off and isn't in the airport any longer`;
      return message;
    }


  }
}
module.exports = Airport;
