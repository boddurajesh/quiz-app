import React, { useState } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "../components/Home"
import QuizStepper from "../components/quiz/QuizStepper"
import Quiz from "../components/quiz/Quiz"
import Admin from "../components/Admin"
import AddQuestion from "../components/question/AddQuestion"
import UpdateQuestion from "../components/question/UpdateQuestion"
import QuizResult from "../components/quiz/QuizResults"
import GetAllQuiz from "../components/quiz/GetAllQuiz"
import Navbar1 from "../components/layout/NavBar1"
import Login from "./Login"
import Register from "./Register"
import Navbar from "../components/layout/NavBar"
import ViewUser from "./ViewUsers"

function App() {
	return (
		<main className="container mt-5 mb-5">
			<Router>
				
				<Routes>
				    <Route path="/" element={<Navbar1 />} />
					<Route path="/navbar" element={<Navbar />} />
					<Route path="/login" element={<Login />} />
					<Route path="/viewUsers" element={<ViewUser />} />
					<Route path="/register" element={<Register />} />
					<Route path="/quiz-stepper" element={<QuizStepper />} />
					<Route path="/take-quiz" element={<Quiz />} />
					<Route path="/admin" element={<Admin />} />

					<Route path="/create-quiz" element={<AddQuestion />} />
					<Route path="/update-quiz/:id" element={<UpdateQuestion />} />
					<Route path="/all-quizzes" element={<GetAllQuiz />} />
					<Route path="/quiz-result" element={<QuizResult />} />
				</Routes>
			</Router>

			
		</main>
	)
}

export default App
