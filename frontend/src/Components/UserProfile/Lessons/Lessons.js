import React, { useState, useEffect } from "react"
import LessonCard from "./LessonCard/LessonCard"
import {
	LessonsContainer,
	LessonsBox,
	LessonsBtn,
	LessonsBtnBox,
	Title,
} from "../../../Assets/Styles/UserProfile/Lessons.styles"
import { useSelectedOptions } from "../../../Context/SelectedOptionsContext"
import { useLogin } from "../../../Context/LoginContext"
import axios from "axios"

function Lessons() {
	const [selectedFilter, setSelectedFilter] = useState("All")
	const { user } = useLogin()
	console.log("Zalogowany użytkownik w Lessons:", user)

	const { lessons, setLessons } = useSelectedOptions()

	const filterLessons = () => {
		const now = new Date()
		let filtered = lessons

		if (user.role === "TUTOR") {
			filtered = lessons.filter(lesson => lesson.tutorEmail === user.email)
		} else if (user.role === "STUDENT") {
			filtered = lessons.filter(lesson => lesson.studentEmail === user.email)
		}

		switch (selectedFilter) {
			case "Upcoming":
				return filtered
					.filter(lesson => new Date(lesson.lessonDate) > now)
					.sort((a, b) => new Date(a.lessonDate) - new Date(b.lessonDate))
			case "Completed":
				return filtered
					.filter(lesson => new Date(lesson.lessonDate) <= now)
					.sort((a, b) => new Date(b.lessonDate) - new Date(a.lessonDate))
			default:
				return filtered.sort(
					(a, b) => new Date(b.lessonDate) - new Date(a.lessonDate)
				)
		}
	}

	const handleFilterChange = filter => {
		setSelectedFilter(filter)
	}
	useEffect(() => {
		const fetchLessons = async () => {
			try {
				const token = localStorage.getItem("token")
				const response = await axios.get(
					"http://localhost:8080/lessons/user-lessons",
					{
						headers: { Authorization: `Bearer ${token}` },
					}
				)
				setLessons(response.data)
			} catch (error) {
				console.error("Błąd podczas pobierania lekcji:", error)
			}
		}

		fetchLessons()
	}, [])

	useEffect(() => {
		filterLessons()
	}, [selectedFilter, lessons])

	return (
		<LessonsContainer>
			<Title>Moje lekcje</Title>
			<LessonsBtnBox>
				<LessonsBtn
					onClick={() => handleFilterChange("All")}
					$isActive={selectedFilter === "All"}>
					Wszystkie
				</LessonsBtn>
				<LessonsBtn
					onClick={() => handleFilterChange("Upcoming")}
					$isActive={selectedFilter === "Upcoming"}>
					Nadchodzące
				</LessonsBtn>
				<LessonsBtn
					onClick={() => handleFilterChange("Completed")}
					$isActive={selectedFilter === "Completed"}>
					Zakończone
				</LessonsBtn>
			</LessonsBtnBox>
			<LessonsBox>
				{filterLessons().map(lessonData => (
					<LessonCard
						key={lessonData.id}
						lessonData={lessonData}
						loggedInUser={user}
					/>
				))}
			</LessonsBox>
		</LessonsContainer>
	)
}

export default Lessons
