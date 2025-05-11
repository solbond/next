import Sidebar from "./components/Sidebar"
import Main from "./components/Main"
const Page = () => {
  return (
    <div className="w-full py-4 px-2 flex flex-row h-screen bg-background">
      <Sidebar />
      <div className="w-full h-full bg-main border-border border-[1.5px] rounded-xl p-4">
        <Main />
      </div>
    </div>
  )
}

export default Page
