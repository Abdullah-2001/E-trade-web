import { useEffect, useState } from "react"

const Timer = () => {

    const [days, setDays] = useState("")
    const [hours, setHours] = useState("")
    const [min, setMin] = useState("")
    const [sec, setSec] = useState("")

    useEffect(() => {
        let dest = new Date("dec 31, 2022 12:00:00").getTime();
        setInterval(() => {
            let now = new Date().getTime();
            let diff = dest - now;
            setDays(Math.floor(diff / (1000 * 60 * 60 * 24)))
            setHours(Math.floor(diff % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)))
            setMin(Math.floor(diff % (1000 * 60 * 60) / (1000 * 60)))
            setSec(Math.floor(diff % (1000 * 60) / (1000)))
        }, 1000)
    }, [])

    return (
        <div style={{ display: "flex", flexDirection: "column", margin: "30px 0" }}>
            <div style={{ display: "flex" }}>
                <div className='day-container'>
                    <div className='day'>
                        <p>{days < 10 ? "0" + days : days}</p>
                    </div>
                    <p className='title'>DAYS</p>
                </div>
                <div className='hour-container'>
                    <div className='hour'>
                        <p>{hours < 10 ? "0" + hours : hours}</p>
                    </div>
                    <p className='title'>HOURS</p>
                </div>
                <div className='min-container'>
                    <div className='min'>
                        <p>{min < 10 ? "0" + min : min}</p>
                    </div>
                    <p className='title'>MINS</p>
                </div>
                <div className='sec-container'>
                    <div className='sec'>
                        <p>{sec < 10 ? "0" + sec : sec}</p>
                    </div>
                    <p className='title'>SEC</p>
                </div>
            </div>
        </div>
    )
}

export default Timer