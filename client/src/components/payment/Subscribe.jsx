import './payment.css';

const Subscribe = () => {
    return(
        <>
        <div className="subscribeContainer">
            <h1>Subscription</h1>
            <div className="subscribebox">
                <div className="subscribeHead">
                    <p>Pro Pack - $99.00</p>
                </div>
                <div className="subscribeContent">
                    <p>Join pro pack and get access to all content.
                    All-in-one platform for creating engaging.
                    </p>
                    <h3>$99 Only</h3>
                </div>
                <div className="subscribeBtn">
                    <button>Buy Now</button>
                </div>
            </div>
        </div>
        </>
    )
}

export default Subscribe;