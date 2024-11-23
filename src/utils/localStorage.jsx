// localStorage.setItem(employees)
const employees =[
  {
    id:1,
    firstName:"Ali Ahmad",
    email:"e@e.com",
    password:"123",
    taskCounts:{
    active:2,
    newTask:1,
    completed:1,
    failed:0,
    },
    tasks:[
      {
        active:true,
        newTask:false,
        completed:false,
        failed:false,
        taskDesign:"Design",
        taskTitle:"Make A UI Design",
        taskDescription:"Redsign the uI for better UX.",
        taskDate:"20-4-24",
        category:"Dev"
      },
      {
        active:false,
        newTask:true,
        completed:false,
        failed:false,
        taskDesign:"Design",
        taskTitle:"Make A UI Design",
        taskDescription:"Redsign the uI for better UX.",
        taskDate:"20-4-24",
        category:"Dev"
      },
      {
        active:false,
        newTask:false,
        completed:true,
        failed:false,
        taskDesign:"Design",
        taskTitle:"Make A UI Design",
        taskDescription:"Redsign the uI for better UX.",
        taskDate:"20-4-24",
        category:"Dev"
      }
    ]
  },
  {
    id:1,
    firstName:"Ahmad",
    email:"e2@e.com",
    password:"123",
    taskCounts:{
    active:2,
    newTask:1,
    completed:1,
    failed:0,
    },
    tasks:[
      {
        active:true,
        newTask:false,
        completed:false,
        failed:false,
        taskDesign:"Design",
        taskTitle:"Make A UI Design",
        taskDescription:"Redsign the uI for better UX.",
        taskDate:"20-4-24",
        category:"Dev"
      },
      {
        active:false,
        newTask:true,
        completed:false,
        failed:false,
        taskDesign:"Design",
        taskTitle:"Make A UI Design",
        taskDescription:"Redsign the uI for better UX.",
        taskDate:"20-4-24",
        category:"Dev"
      },
      {
        active:false,
        newTask:false,
        completed:true,
        failed:false,
        taskDesign:"Design",
        taskTitle:"Make A UI Design",
        taskDescription:"Redsign the uI for better UX.",
        taskDate:"20-4-24",
        category:"Dev"
      }
    ]
  },
  {
    id:1,
    firstName:"Mahad",
    email:"e3@e.com",
    password:"123",
    taskCounts:{
    active:2,
    newTask:1,
    completed:1,
    failed:0,
    },
    tasks:[
      {
        active:true,
        newTask:false,
        completed:false,
        failed:false,
        taskDesign:"Design",
        taskTitle:"Make A UI Design",
        taskDescription:"Redsign the uI for better UX.",
        taskDate:"20-4-24",
        category:"Dev"
      },
      {
        active:false,
        newTask:true,
        completed:false,
        failed:false,
        taskDesign:"Design",
        taskTitle:"Make A UI Design",
        taskDescription:"Redsign the uI for better UX.",
        taskDate:"20-4-24",
        category:"Dev"
      },
      {
        active:false,
        newTask:false,
        completed:true,
        failed:false,
        taskDesign:"Design",
        taskTitle:"Make A UI Design",
        taskDescription:"Redsign the uI for better UX.",
        taskDate:"20-4-24",
        category:"Dev"
      }
    ]
  },
  {
    id:1,
    firstName:"Abdullah",
    email:"e4@e.com",
    password:"123",
    taskCounts:{
    active:2,
    newTask:1,
    completed:1,
    failed:0,
    },
    tasks:[
      {
        active:true,
        newTask:false,
        completed:false,
        failed:false,
        taskDesign:"Design",
        taskTitle:"Make A UI Design",
        taskDescription:"Redsign the uI for better UX.",
        taskDate:"20-4-24",
        category:"Dev"
      },
      {
        active:false,
        newTask:true,
        completed:false,
        failed:false,
        taskDesign:"Design",
        taskTitle:"Make A UI Design",
        taskDescription:"Redsign the uI for better UX.",
        taskDate:"20-4-24",
        category:"Dev"
      },
      {
        active:false,
        newTask:false,
        completed:true,
        failed:false,
        taskDesign:"Design",
        taskTitle:"Make A UI Design",
        taskDescription:"Redsign the uI for better UX.",
        taskDate:"20-4-24",
        category:"Dev"
      }
    ]
  },
  {
    id:1,
    firstName:"Ali",
    email:"e@e.com",
    password:"123",
    taskCounts:{
    active:2,
    newTask:1,
    completed:1,
    failed:0,
    },
    tasks:[
      {
        active:true,
        newTask:false,
        completed:false,
        failed:false,
        taskDesign:"Design",
        taskTitle:"Make A UI Design",
        taskDescription:"Redsign the uI for better UX.",
        taskDate:"20-4-24",
        category:"Dev"
      },
      {
        active:false,
        newTask:true,
        completed:false,
        failed:false,
        taskDesign:"Design",
        taskTitle:"Make A UI Design",
        taskDescription:"Redsign the uI for better UX.",
        taskDate:"20-4-24",
        category:"Dev"
      },
      {
        active:false,
        newTask:false,
        completed:true,
        failed:false,
        taskDesign:"Design",
        taskTitle:"Make A UI Design",
        taskDescription:"Redsign the uI for better UX.",
        taskDate:"20-4-24",
        category:"Dev"
      }
    ]
  }
]
const admins = [
  {
    id:1,
    email:"admin@me.com",
    password:123
  }
]
export const setLocalStorage = () =>{
  localStorage.setItem("employees",JSON.stringify(employees))
  localStorage.setItem("admin",JSON.stringify(admins))
}
export const getLocalStorage = () =>{
  const employee=JSON.parse(localStorage.getItem("employees",employees))
  const admin=JSON.parse(localStorage.getItem("admin",admins))
  return {employee,admin}
  
}