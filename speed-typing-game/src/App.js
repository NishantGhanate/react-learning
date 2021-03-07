import useWordGame from "./hooks/useWordGame"

function App(){
    const  {
        textBoxRef, 
        text,
        isTimeRunning,
        timeRemaining,
        wordCount,
        startGame,
        handleChange 
    } = useWordGame(5)

    return(
        <div>
            <h1>Speeeddd typing boi</h1>
            <textarea 
                ref={textBoxRef}
                onChange={handleChange}
                value={text}
                disabled={!isTimeRunning}
            />
            <h4>Time remmaining {timeRemaining} </h4>
            <button onClick={startGame} disabled={isTimeRunning}>
                Start
            </button>
            <h1>Word count : {wordCount} </h1>
        </div>
    )
}

export default App