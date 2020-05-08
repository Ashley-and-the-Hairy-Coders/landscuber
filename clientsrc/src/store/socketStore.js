import io from "socket.io-client"

let socket = {}

export const socketStore = {
  actions: {
    initializeSocket({ commit, dispatch }) {

      socket = io("https://landscuber.herokuapp.com/")
      // socket = io("//localhost:3000")
      socket.on("CONNECTED", data => {
        console.log("Socket connected")
      })

      socket.on("newJob", job => {
        commit("addJob", job)
      })

      socket.on("jobUpdated", data => {
        commit("updateJobs", data)
        dispatch("getAllJobs")
      })

      socket.on("newMessage", data => {
        dispatch("getJob", data)
      })

    },
    joinRoom({ commit, dispatch }, roomName) {
      socket.emit("dispatch", { action: "JoinRoom", data: roomName })
    },
    leaveRoom({ commit, dispatch }, roomName) {
      socket.emit("dispatch", { action: "LeaveRoom", data: roomName })
    }
  }
}