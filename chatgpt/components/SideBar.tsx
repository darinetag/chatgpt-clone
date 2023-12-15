import NewChat from "./NewChat";

function SideBar() {
  return (
    <div className="p-2 flex flex-col h-screen ">
      <div className="flex-1">
        <div>
            {/* newchat */}
            <NewChat />
        
        <div>
            {/* modelSelection */}
        </div>
        {/* chatrows mapping through em */}
        </div>
      </div>
    </div>
  );
}

export default SideBar;
