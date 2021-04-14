class Slingshot{
    constructor(BodyA,pointB){
        var options ={
       bodyA:BodyA,
       pointB:pointB,
       stiffness:0.04,
       length:10
        }
        this.pointB=pointB
        this.Slingshot = Constraint.create(options)
        World.add(world,this.Slingshot)
    }
    fly(){
      this.Slingshot.BodyA=null
    }
    display(){
      if(this.Slingshot.BodyA){
  var pointA =this.Slingshot.bodyA.position
  var pointB =this.pointB
  line (pointA.x,pointA.y,pointB.x,pointB.y)
      }
    }
    }
