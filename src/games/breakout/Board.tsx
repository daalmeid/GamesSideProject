import { useEffect, useRef, useState } from "react";
import { BallMovement } from "./BallMovement";
import { GameData } from "./data";
import WallCollisions from "./utils/WallCollisions";
import Paddle from "./Paddle";
import BrickCreation from "./Brick";
import useWindowDimensions, {WindowDims} from "./hooks/useWindowDimensions";
import { PaddleCollisions } from "./utils/ObjectCollisions";


function GameDataUpdate(canvas: HTMLCanvasElement) {

	// GameData.ballObject.x = 20;
	// GameData.ballObject.y = 200;
	// GameData.ballObject.dx = 5;
	// GameData.ballObject.dy = 5;
	// GameData.ballObject.rad = 10;
	// GameData.ballObject.speed = 10;

	GameData.brickObject.width = canvas.width / 6;
	// GameData.brickObject.height = 20;
	// GameData.brickObject.density = 2;
	// GameData.brickObject.colors = ["blue", "lightblue"];

	// GameData.player.name = "Dhaval";
	// GameData.player.lives =  5;
	// GameData.player.score =  0;
	// GameData.player.level =  1;

	GameData.paddleObjectProps.width = canvas.width / 6;
	GameData.paddleObjectProps.y = canvas.height - 30;
	// GameData.paddleObjectProps.height = 20;
}

export default function Board() {

	const canvasRef = useRef<HTMLCanvasElement | null>(null);
	const windowSize: WindowDims = useWindowDimensions();
	let brokenBrickList: boolean[] = Array(12).fill(false);

	useEffect(() => {
		function render() {
			if (canvasRef.current !== null) {
				const canvas = canvasRef.current;
				GameDataUpdate(canvas);
				const context = canvas?.getContext('2d');
				if (context == null) 
					throw new Error('Could not get context');

				context.clearRect(0, 0, canvas.width, canvas.height);
				
				if (brokenBrickList.find((broken) => broken === false) === undefined)
				brokenBrickList = Array(12).fill(false);

				// Handles ball movements
				BallMovement(context,GameData.ballObject, GameData.paddleObjectProps);

				// Handles ball and wall collisions
				WallCollisions(GameData.ballObject, canvas);

				PaddleCollisions(GameData.ballObject, GameData.paddleObjectProps);

				//Handles paddle movement
				Paddle(context, canvas, GameData.paddleObjectProps, GameData.ballObject);

				BrickCreation(context, brokenBrickList);
				//Animation
				requestAnimationFrame(render);
			}
		}
		render();
	}, []);

	return (<canvas
	  id="canvas"
	  height={windowSize.height - 100}
	  width={windowSize.width - 20}
	  ref={canvasRef}
	  onMouseMove={(event) => 
		GameData.paddleObjectProps.x = event.clientX - GameData.paddleObjectProps.width / 2 - 5}
	  tabIndex={0}
	  onKeyDown={(event) => {
		console.log("Here: " + event.key + "!");
		if (event.key === " " && GameData.ballObject.stopped === true)
		{
			GameData.ballObject.dx = 4;
			GameData.ballObject.dy = -4;
			GameData.ballObject.stopped = false;
		}
	  }}
	/>)
}
