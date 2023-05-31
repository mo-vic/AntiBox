import { Storage } from "@plasmohq/storage"
import icon from "data-base64:~assets/icon.png"
import { useStorage } from "@plasmohq/storage/hook"

import "~base.css"
import "~style.css"

function IndexPopup() {
  const [storedIdText, setIdText] = useStorage("id", (v) => v === undefined ? "movic": v)
  const [storedSmallAvatarText, setSmallAvatarText] = useStorage("smallAvatar", (v) => v === undefined ? "https://bbs.uestc.edu.cn/uc_server/data/avatar/000/25/90/51_avatar_small.jpg": v)
  const [storedMiddleAvatarText, setMiddleAvatarText] = useStorage("middleAvatar", (v) => v === undefined ? "https://bbs.uestc.edu.cn/uc_server/data/avatar/000/25/90/51_avatar_middle.jpg": v)

  return (
    <div className="flex min-h-fit min-w-fit flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-10 w-auto"
          src={icon}
          alt="AntiBox Configuration"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          AntiBox Configuration
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <div>
          <label htmlFor="id" className="block text-sm font-medium leading-6 text-gray-900">
            id
          </label>
          <div className="mt-2">
            <input
              id="id"
              name="id"
              type="text"
              autoComplete="off"
              value={storedIdText}
              required
              onChange={(e) => setIdText(e.target.value)}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <label htmlFor="smallAvatar" className="block text-sm font-medium leading-6 text-gray-900">
            avatar
          </label>
          <div className="mt-2">
            <input
              id="smallAvatar"
              name="smallAvatar"
              type="text"
              autoComplete="off"
              value={storedSmallAvatarText}
              required
              onChange={(e) => setSmallAvatarText(e.target.value)}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <label htmlFor="middleAvatar" className="block text-sm font-medium leading-6 text-gray-900">
            Avatar
          </label>
          <div className="mt-2">
            <input
              id="middleAvatar"
              name="middleAvatar"
              type="text"
              autoComplete="off"
              value={storedMiddleAvatarText}
              required
              onChange={(e) => setMiddleAvatarText(e.target.value)}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <button
            onClick={async () => {
              var idInput = document.getElementById("id")
              var idText = ""
              if (idInput != null) {
                idText = idInput.value
              }

              if (idText == "") {
                alert("id cannot be empty!")
                return
              }

              var smallAvatarInput = document.getElementById("smallAvatar")
              var smallAvatarText = ""
              if (smallAvatarInput != null) {
                smallAvatarText = smallAvatarInput.value
              }

              if (smallAvatarText == "") {
                alert("small avatar cannot be empty!")
                return
              }

              var middleAvatarInput = document.getElementById("middleAvatar")
              var middleAvatarText = ""
              if (middleAvatarInput != null) {
                middleAvatarText = middleAvatarInput.value
              }

              if (middleAvatarText == "") {
                alert("middle Avatar cannot be empty!")
                return
              }
              
              const storage = new Storage()
 
              await storage.set("id", idText)
              await storage.set("smallAvatar", smallAvatarText)
              await storage.set("middleAvatar", middleAvatarText)
              alert("Update Successfully~")
            }}
            type="button"
            className="flex w-full mt-3.5 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  )
}

export default IndexPopup
