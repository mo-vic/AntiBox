import { Storage } from "@plasmohq/storage"
import type { PlasmoCSConfig } from "plasmo"

export const config: PlasmoCSConfig = {
  matches: ["https://bbs.uestc.edu.cn/*"]
}

window.addEventListener("load", async () => {
  const storage = new Storage()
  const idText = await storage.get("id")
  const smallAvatarText = await storage.get("smallAvatar")
  const middleAvatarText = await storage.get("middleAvatar")

  var myID = document.querySelector("#toptb > div.y > strong > a")
  if (myID != null) {
    if (idText != "") {
      myID.text = idText
    }
  }

  var mySmallAvatar = document.querySelector("#toptb > div.y > div > a > img")
  if (mySmallAvatar != null) {
    if (smallAvatarText != "") {
      mySmallAvatar.src = smallAvatarText
    }
  }

  var myMiddleAvatar = document.querySelector("#fastpostform > table > tbody > tr > td.pls > div > img")

  if (myMiddleAvatar != null) {
    if (middleAvatarText != "") {
      myMiddleAvatar.src = middleAvatarText
    }
  }
})
