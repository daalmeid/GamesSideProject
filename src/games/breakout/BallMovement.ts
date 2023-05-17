import { IBallObject, IPaddleObjectProps } from "./data";

export function BallMovement(
	context: CanvasRenderingContext2D,
	ballObject: IBallObject,
	paddle: IPaddleObjectProps) {
	if (ballObject.stopped == true)
	{
		ballObject.y = paddle.y - ballObject.rad - paddle.height / 2;
		ballObject.x = paddle.x + paddle.width / 2;
		ballObject.dx = 0;
		ballObject.dy = 0;
	}
	const data = new Ball(ballObject.x, ballObject.y, ballObject.rad);
	data.draw(context);
	ballObject.x += ballObject.dx;
	ballObject.y += ballObject.dy;
}

export function UpdateStoppedBallPosition(
	context: CanvasRenderingContext2D,
	ballX: number,
	ballY: number,
	ballRad: number) {
	const data = new Ball(ballX, ballY, ballRad);
	data.draw(context);
}

class Ball {
	
	x: number;
	y: number;
	rad: number;
	
	constructor(x: number, y: number, rad: number) {
		this.x = x;
		this.y = y;
		this.rad = rad;
	}

	draw(context: CanvasRenderingContext2D) {
		context.beginPath();
		context.fillStyle = "red";
		context.arc(this.x, this.y, this.rad, 0, 2 * Math.PI);
		context.strokeStyle = "black";
		context.lineWidth = 2;
		context.fill();
		context.stroke()
	}
}