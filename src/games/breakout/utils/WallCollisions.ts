import { IBallObject } from "../data";

export default function WallCollisions(ballObject: IBallObject, canvas: HTMLCanvasElement) {

	if (ballObject.y - ballObject.rad <= 0)
		ballObject.dy *= -1;
	if (ballObject.x - ballObject.rad <= 0
			|| ballObject.x + ballObject.rad >= canvas.width)
		ballObject.dx *= -1;
}