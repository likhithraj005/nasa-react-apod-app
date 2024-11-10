
export default function Footer(props) {
    const {handleToggleModel, data} = props

    return (
        <footer>
            <div className="bgGradient"></div>
            <div>
                <h2>{data?.title}</h2>
                <h1>APOD PROJECT</h1>
                <h1>One of the most popular websites at NASA is the Astronomy Picture of the Day. In fact, this website is one of the most popular websites across all federal agencies.</h1>
            </div>
            <button onClick={handleToggleModel}>
                <i className="fa-solid fa-circle-info"></i> 
            </button>
        </footer>
    )
}
