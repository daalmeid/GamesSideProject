import { UpdateStoppedBallPosition } from "./BallMovement";
import { IBallObject, IPaddleObjectProps } from "./data";

export default function Paddle(
context: CanvasRenderingContext2D,
canvas: HTMLCanvasElement,
paddleProps: IPaddleObjectProps,
ballObject: IBallObject) {

	class Paddle {
		x: number;
		y: number;
		height: number;
		width: number;
		colors: string[];
	
		constructor(arg: IPaddleObjectProps) {
			this.x = arg.x;
			this.y = arg.y;
			this.height = paddleProps.height;
			this.width = paddleProps.width;
			this.colors = paddleProps.colors;
		}
	
		move() {
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

	let paddle = new Paddle(paddleProps);
	paddle.move();
	if (paddleProps.x <= 0)
		paddleProps.x = 0;
	else if (paddleProps.x + paddleProps.width >= canvas.width)
		paddleProps.x = canvas.width - paddleProps.width / 2;
	if (ballObject.stopped)
		UpdateStoppedBallPosition(
			context,
			paddleProps.x + paddleProps.width / 2,
			paddleProps.y - ballObject.rad - paddleProps.height / 2,
			ballObject.rad);
}