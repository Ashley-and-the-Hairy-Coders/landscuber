import io from "socket.io-client"

let socket = {}

export const socketStore = {
  actions: {
    initializeSocket({ commit, dispatch }) {

      socket = io("//localhost:3000")
      socket.on("CONNECTED", data => {
        console.log("Socket connected")
      })

      socket.on("newJob", job => {
        commit("addJob", job)
        console.log("newJob working")
      })

      socket.on("jobUpdated", data => {
        commit("updateJobs", data)
        console.log("editJob working")
      })
    },
    joinRoom({ commit, dispatch }, roomName) {
      socket.emit("dispatch", { action: "JoinRoom", data: roomName })
      console.log("Joined room:", roomName)
    },
    leaveRoom({ commit, dispatch }, roomName) {
      socket.emit("dispatch", { action: "LeaveRoom", data: roomName })
      console.log("Left room:", roomName)
    }
  }
}