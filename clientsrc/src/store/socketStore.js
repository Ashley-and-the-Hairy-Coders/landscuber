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
        commit("addPostedJob", job)
      })

      socket.on("jobUpdated", data => {
        if (data.jobStatus == "accepted") {
          commit("addAcceptedJob", data)
          commit("removePostedJob", data)
        }
        if (data.jobStatus == "active") {
          commit("addActiveJob", data)
          commit("removeAcceptedJob", data)
        }
        if (data.jobStatus == "completed") {
          commit("addCompletedJob", data)
          commit("removeActiveJob", data)
        }
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