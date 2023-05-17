export interface IBallObject
{
	x: number,
	y: number,
	dx: number,
	dy: number,
	rad: number,
	speed: number,
	stopped: boolean,
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
	y: number,
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

export const GameData: IGameData = {
	ballObject: {
		x: 20,
		y: 200,
		dx: 5,
		dy: 5,
		rad: 10,
		speed: 10,
		stopped: false,
	},
	brickObject: {
		x: 0.5,
		y: 50,
		width: 800 / 10 - 1,
		height: 20,
		density: 2,
		colors: ["blue", "lightblue"],
	},
	player: {
		name: "Dhaval",
		lives: 5,
		score: 0,
		level: 1,
	},
	paddleObjectProps: {
		x: 100,
		y: window.innerHeight - 20,
		width: 100,
		height: 20,
		colors:  ["orange", "#FFA62B"],
	}
}