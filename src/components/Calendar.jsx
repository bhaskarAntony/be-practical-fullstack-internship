import React, { useState } from 'react';
import '../styles/days.css';
import Card from 'react-bootstrap/Card';

const data = [
    {
      week: "Week 1: Project Assignment and Kick-off",
      days: [
        {
          title: "Day 1: Project Assignment and Introduction",
          content: [
            "You will be assigned a full-stack project by the Be Practical Tech Solution team.",
            "Meet your mentor and the back-end development team to understand the project's goals, features, and expected outcomes."
          ]
        },
        {
          title: "Day 2-3: Project Architecture Review",
          content: [
            "Dive into the project's architecture, understanding how the front-end and back-end components will interact.",
            "Identify and document key endpoints, data sources, and APIs that your front-end will utilize."
          ]
        },
        {
          title: "Day 4-5: User Stories and Requirements",
          content: [
            "Collaborate with the back-end team to define user stories and project requirements.",
            "Document these requirements clearly to ensure a shared understanding of the project scope."
          ]
        },
        {
          title: "Day 6-7: Initial Documentation",
          content: [
            "Begin your project documentation, including:",
            "A project overview describing the mission and vision.",
            "Detailed user stories and acceptance criteria.",
            "Preliminary wireframes or design concepts illustrating the user interface."
          ]
        }
      ]
    },
    {
      week: "Week 2-3: Front-End Development",
      days: [
        {
          title: "Day 8-21: Development",
          content: [
            "Begin crafting the front-end of your assigned project. Your focus will be on creating a user-friendly, responsive front-end application.",
            "Collaborate closely with the back-end development team to ensure seamless integration between the front-end and their APIs."
          ]
        },
        {
          title: "Day 22-23: Testing and Debugging",
          content: [
            "Thoroughly test your front-end application, identifying and fixing any issues. Pay special attention to user experience and ensuring the user interface works flawlessly.",
            "Conduct rigorous testing to verify that the front-end communicates effectively with the back-end."
          ]
        },
        {
          title: "Day 24-26: Documentation",
          content: [
            "Keep your project documentation up-to-date:",
            "Record any issues encountered during development and your solutions.",
            "Highlight any complex technical challenges and how they were addressed.",
            "Document the tools, libraries, and frameworks used during front-end development."
          ]
        }
      ]
    },
    {
      week: "Week 4: Presentation and Project Handover",
      days: [
        {
          title: "Day 27: Final Testing and Refinements",
          content: [
            "Perform a final round of testing and make any necessary refinements to your front-end application.",
            "Verify that the front-end is fully functional and performs effectively with the back-end."
          ]
        },
        {
          title: "Day 28-29: Project Presentation and Documentation Completion",
          content: [
            "Prepare to present your front-end project to the internship group:",
            "Showcase its features, functionality, and user interface.",
            "Discuss any challenges faced during development and the creative solutions you applied.",
            "Highlight the successful collaboration between front-end and back-end teams.",
            "Submit the finalized documentation, encompassing the entire project journey, from assignment to completion. Include a comprehensive walkthrough of your front-end application and its interactions with the back-end."
          ]
        }
      ]
    }
  ];

const Calendar = () => {
    const [selectedDay, setSelectedDay] = useState(null);

  const handleDayClick = (day) => {
    setSelectedDay(day);
  };

  return (
    <div className="schedule-container">
      {data.map((week, weekIndex) => (
        <div key={weekIndex} className="week">
          <h3>{week.week}</h3>
          {week.days.map((day, dayIndex) => (
            <div
              key={dayIndex}
              className={`day-card ${selectedDay === day ? 'active' : ''}`}
              onClick={() => handleDayClick(day)}
            >
              <h4>{day.title}</h4>
              <ul>
                {/* {day.content.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                )} */}
              </ul>
            </div>
          ))}
        </div>
      ))}
      {selectedDay && (
        <div className="selected-day-popup">
          <div className="popup-content">
            <h2>{selectedDay.title}</h2>
            <ul>
              {/* {selectedDay.content.map((item, itemIndex) => (
                <li key={itemIndex}>{item}</li>
              )} */}
            </ul>
            <button onClick={() => setSelectedDay(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Calendar;
