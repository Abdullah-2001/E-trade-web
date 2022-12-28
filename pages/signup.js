import Image from "next/image";
import { Router, useRouter } from "next/router";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from '../styles/Signup.module.css'

const Signup = () => {

    const [step, setStep] = useState(1)
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")

    function next() {
        if (step === 1) {
            if (firstName === "" || lastName === "") {
                setStep(step)
            } else {
                setStep(step + 1)
            }
        }
        if (step === 2) {
            if (email === "" || password === "") {
                setStep(step)
            } else {
                setStep(step + 1)
            }
        }
        if (step === 3) {
            if (phoneNumber === "") {
                setStep(step)
            } else {
                setStep(step + 1)
            }
        }
    }

    function back() {
        if (step > 1) {
            setStep(step - 1)
        }
    }

    function register() {
        console.log({ firstName, lastName, email, password, phoneNumber });
    }

    return (
        <Container fluid>
            <Row>
                <Col md={6}>
                    <img width="100%" src='https://img.freepik.com/free-vector/ecommerce-campaign-concept-illustration_114360-8432.jpg?w=2000'></img>
                </Col>
                <Col md={6}>
                    <h1>Register user</h1>
                    <div className={styles.card_wrapper}>
                        {step === 1 ? (
                            <>
                                <label style={{ marginRight: 15 }}>First Name</label>
                                <input type="text" placeholder="Enter your first name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                                <br />
                                <br />
                                <label style={{ marginRight: 15 }}>Last Name</label>
                                <input type="text" placeholder="Enter your last name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                            </>
                        ) : step === 2 ? (
                            <>
                                <label style={{ marginRight: 15 }}>Email</label>
                                <input type="text" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                <br />
                                <br />
                                <label style={{ marginRight: 15 }}>Password</label>
                                <input type="text" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} />
                            </>
                        ) : step === 3 ? (
                            <>
                                <label style={{ marginRight: 15 }}>Phone number</label>
                                <input type="text" placeholder="Enter your phone number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                            </>
                        ) : ""}
                    </div>
                    <br />
                    <br />
                    <button onClick={back} disabled={step === 1}>Back</button>
                    <button onClick={next} disabled={step === 3}>Next</button>
                    {step === 3 && <button className={styles.register} onClick={register}>Register</button>}
                </Col>
            </Row>
        </Container>
    )
}

export default Signup;