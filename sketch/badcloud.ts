let badCloudImg1: p5.Image;
let badCloudImg2: p5.Image;
let badCloudImg3: p5.Image;
class BadCloud {

    public badCloud: [p5.Image, p5.Image, p5.Image];
    public badCloudImg: p5.Image;
    private x: number;
    public y: number;
    private width: number;
    private height: number;
    private r: number;
    /*  private time: number; */


    public constructor(x: number, y: number, width: number, height: number) {

        this.badCloud = [badCloudImg1, badCloudImg2, badCloudImg3];
        this.badCloudImg = random(this.badCloud);
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.r = 38;
        /* this.time = 0; */
    }

    public update() {
        /* this.time += deltaTime;
        if (this.time > 6000) {
        } */
        this.move();
    }


    public checkCollisionWithFlower(flower: Flower) {
        var d = dist(this.x, this.y, flower.endOfStem.x, flower.endOfStem.y);
        if (d < this.r + flower.r) {

            flower.currentFlower = listOfFlowers.flower25;
        }
    }

    public spawnRandomBadClouds() {
    }

    private move() {
        this.y = this.y + 0.5;
    }

    public draw() {
        push();
        imageMode(CENTER);
        image(this.badCloudImg, this.x, this.y, this.width, this.height);
        pop();
        push();
        noFill();
        noStroke();
        ellipseMode(CENTER);
        ellipse(this.x, this.y, this.r * 2, this.r * 2);
        pop();

    }

    /*   public getY() {
          return this.y;
      } */
}