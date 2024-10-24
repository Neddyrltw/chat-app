import SearchInput from "./SearchInput";
import Conversations from "./Conversations";

const Sidebar = () => {
  return (
    <div>
      <SearchInput />
      <Conversations />
      <div className="divider px-3"></div>
      <LogoutButton />
    </div>
  )
}

export default Sidebar
