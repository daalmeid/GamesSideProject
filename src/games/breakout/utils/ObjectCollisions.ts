import { IBallObject, IPaddleObjectProps, IBrickObject } from "../data";

export function PaddleCollisions(ballObject: IBallObject, paddle: IPaddleObjectProps ) {

	if (ballObject.x >= paddle.x && ballObject.x <= paddle.x + paddle.width
			&& ballObject.y + ballObject.rad >= paddle.y)
		ballObject.dy *= -1;
	else if ((ballObject.x < paddle.x || ballObject.x > paddle.x + paddle.width)
		&& ballObject.y + ballObject.rad >= paddle.y)
	{
		ballObject.stopped = true;
	}
}

export function BrickCollisions(ballObject: IBallObject, brick: IBrickObject ) {

	return (ballObject.x >= brick.x && ballObject.x <= brick.x + brick.width
				&& ballObject.y - ballObject.rad <= brick.y + brick.height && ballObject.y + ballObject.rad >= brick.y )
}