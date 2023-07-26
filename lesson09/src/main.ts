/// utility types

// partial

interface Assignment{
    studentId: string,
    title: string,
    grade: number,
    verified?: boolean
}

const updateAssigment = (assign: Assignment, propsToUpdate: Partial<Assignment>): Assignment =>{
    return {...assign, ...propsToUpdate}
}

const assign1: Assignment = {
    studentId: "compsci123",
    title: "final project",
    grade: 0,

}

console.log(updateAssigment(assign1,{grade: 95}))
const assignGraded: Assignment = updateAssigment(assign1, {grade: 95})

// required and readonly

const recordAssignment = (assign:
    Required<Assignment>): Assignment => {
        return assign
    }
const assignVerified: Readonly<Assignment> = {
    ...assignGraded, verified: true
}

recordAssignment({...assignGraded, verified: true})

// Record
const hexColorMap: Record<string, string> ={
    red: 'FF0000',
    green: '000FF00',
    blue: '0000FF'
}

type Students = 'Sara' | 'Kelly'
type LetterGrades = "A" | "B" | "C" | "D" | "U"

const finalGrades: Record<Students, LetterGrades> = {
    Sara: "B",
    Kelly: "U"
}

interface Grades {
    assign1: number,
    assign2: number,
}

const gradeData: Record<Students, Grades> ={
    Sara: {assign1: 85, assign2: 93},
    Kelly: {assign1: 76, assign2: 15}
}

// pick and omit

type Assignresult = Pick<Assignment, "studentId" | "grade">

const score: Assignresult = {
    studentId: "k123",
    grade: 75
}

type AssignPreview = Omit<Assignment, "grade" | "verified">

const preview: AssignPreview = {
    studentId: "k123",
    title: "final project"

}

// exclude and extract

type adjustedGrade = Exclude<LetterGrades, "U">

type highGrades = Extract<LetterGrades, "A" | "B">

// nonnullable

type AllPossibleGrades = "Dave" | "John" | null | undefined

type NamesOnly = NonNullable<AllPossibleGrades>

// ReturnType
 //type newAssign = {title: string, points: number}

 const createNewAssign = (title: string, points: number)=>{
    return {title, points}
 }
 type NewAssign = ReturnType<typeof createNewAssign>
 const tsAssign: NewAssign = createNewAssign("Utility Types", 100)
 console.log(tsAssign)

 // paramaeters

 
