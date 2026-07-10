enum Direction { 
    Up,
    Down,
    Right,
    Left
}

function doSomething(KeyPressed: Direction){
    if(KeyPressed == Direction.Down) return
}

doSomething(Direction.Down)