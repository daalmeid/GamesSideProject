export interface IBallObject
{
	x: number,
	y: number,
	dx: number,
	dy: number,
	rad: number,
	speed: number,
}

export interface IBrickObject
{
	x: number,
	y: number,
	width: number,
	height: number,
	density: number,
	colors: string[],
}

export interface IPlayer
{
	name: string,
	lives: number,
	score: number,
	level: number,
}

export interface IPaddleObjectProps {
	x: number,
	width: number,
	height: number,
	colors: string[],
}

export interface IGameData
{
	ballObject: IBallObject;
	brickObject: IBrickObject;
	player: IPlayer;
	paddleObjectProps: IPaddleObjectProps;
}

export class GameData {
	
	ballObject: IBallObject;
	brickObject: IBrickObject;
	player: IPlayer;
	paddleObjectProps: IPaddleObjectProps;

	constructor(ball: IBallObject, brick: IBrickObject, player: IPlayer, paddleProps: IPaddleObjectProps)
	{
		this.ballObject = ball;
		this.brickObject = brick;
		this.player = player;
		this.paddleObjectProps = paddleProps;
	}
}