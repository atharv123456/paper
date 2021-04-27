class Paper{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
			restitution :0.8,
            density:1.2,
            friction :0.9,
			}
		this.x=x;
		this.y=y;
		this.r=r
		this.image=loadImage("paper.png")
		this.body=Bodies.circle(this.x, this.y, this.r, options)
		World.add(world, this.body);
	}

	display()
	{
		var paperPos=this.body.position;	
		push()
		translate(paperPos.x, paperPos.y);
		// rectMode(CENTER);
		rotate(this.body.angle)
		fill(255,0,255)
		imageMode(CENTER);
		ellipseMode(CENTER);
		image(this.image, 0,0,this.r*2, this.r*2)
		pop()
 }
}