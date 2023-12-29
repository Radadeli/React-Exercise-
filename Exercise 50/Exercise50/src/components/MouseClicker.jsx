
export function MouseClicker() {
    function handleButtonClick(event) {
        console.log( event.currentTarget.name)
    }
    function handleImgClick(event) {
        console.log( event.target.src)
        event.stopPropagation ()
    }
    
    return(
        <div>
            <button name="one" onClick={handleButtonClick}> <img width={20} height={20} onClick={handleImgClick} src={"https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Trelew_Montaje.jpg/275px-Trelew_Montaje.jpg"}/>Click here</button>
        </div>
    )
}