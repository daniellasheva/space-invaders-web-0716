function CrewMember(position){
  this.position = position;
  this.currentShip="Looking for a Rig";
}


//currentship is a string called 'looking for a rig'. You can't set a property of that
//string

  CrewMember.prototype.engageWarpDrive = function(){
    if (this.position==="Pilot" && this.currentShip!= "Looking for a Rig")  {
      this.currentShip.warpDrive = "engaged!"
    } else {
    return "had no effect"
    }
  }

  CrewMember.prototype.setsInvisibility = function(){
    if (this.position==="Defender" && this.currentShip!= "Looking for a Rig") {
      this.currentShip.cloaked = true
    } else{
    return "had no effect"
    }
  }

  CrewMember.prototype.chargePhasers = function(){
    if (this.position==="Gunner" && this.currentShip!= "Looking for a Rig") {
      this.currentShip.phasersCharge = "charged!"
    } else {
    return "had no effect"
    }
  }

// CrewMember.prototype = Object.create(Spaceship.prototype)
//
// Crewmember.prototype.constructor= Crewmember
