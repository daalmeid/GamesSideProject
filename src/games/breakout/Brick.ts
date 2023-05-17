import { GameData, IBrickObject } from "./data";
import { BrickCollisions } from "./utils/ObjectCollisions";

export default function BrickCreation(context: CanvasRenderingContext2D, brokenBrickList: boolean[]) {
	
	class SingleBrick {

		x: number;
		y: number;
		width: number;
		height: number;
		density: number;
		colors: string[];
		broke: boolean;
	
		constructor(xPos: number, yPos: number, arg: IBrickObject) {
			this.x = arg.x + xPos ;
			this.y = arg.y + yPos;
			this.width = arg.width;
			this.height = arg.height;
			this.density = arg.density;
			this.colors = arg.colors;
			this.broke = false;
		}
	
		draw() {
			context.beginPath();
			context.rect(this.x, this.y, this.width, this.height);
			context.fillStyle = this.colors[0];
			context.strokeStyle = this.colors[1];
			context.lineWidth = 1;
			// context.shadowBlur = 0;
			context.shadowColor = "blue";
			context.strokeRect(this.x, this.y, this.width, this.height);
			context.fill();
		}
	}


	for (let i = 0; i < 12; i++) {
		if (brokenBrickList[i] === false)
		{
			let newBrick = new SingleBrick(
				GameData.brickObject.x + (i % 6 * GameData.brickObject.width),
				GameData.brickObject.y + (Math.floor( i / 6) * GameData.brickObject.height),
				GameData.brickObject);
			if (!BrickCollisions(GameData.ballObject, newBrick))
				newBrick.draw();
			else
			{
				brokenBrickList[i] = true;
				GameData.ballObject.dy *= -1;
			}

		}
	}
}
