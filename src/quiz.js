const quiz = {
    id:1,
    title: "First example quiz",
    questions: [
        {
            id:1,
            question:"How many items are there?",
            answers: [5,7,6],
            multiple_choice: true
        },
        {
            id:2,
            question:"Is he afraid of darkness",
            answers: [2,3]
        },
        {
            id:3,
            question:"Which animal has the paws?",
            answers: [8,9,10,1,4]
        },
        {
            id:4,
            question:"How many galaxies are there in the universe?",
            answers: [5,6,7,1]
        }
    ],
    answers: [
        {
            id:1,
            answer:"None of the answers given"
        },
        {
            id:2,
            answer:"Yes"
        },
        {
            id:3,
            answer:"No"
        },
        {
            id:4,
            answer:"All answers are correct"
        },
        {
            id:5,
            answer:"100"
        },
        {
            id:6,
            answer:"500"
        },
        {
            id:7,
            answer:"1000"
        },
        {
            id:8,
            answer:"Cow"
        },
        {
            id:9,
            answer:"Chicken"
        },
        {
            id:10,
            answer:"Cat"
        }
    ]
    
}
export default quiz;