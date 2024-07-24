
export default function Tab({ tabData, field, setField }){
    return (

      <div style = {{boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)", }} className = "flex bg-[#013f4f] p-1 gap-x-1 my-6 rounded-full max-w-max" >
      
       { tabData.map((tab) => (
          <button key = {tab.id} onClick = {() => setField(tab.type)}  className = {`${ field === tab.type ? "bg-white text-black font-bold text-[110%]" : "bg-transparent text-white" } 
          py-1 px-4 rounded-full transition-all duration-200`}>
            {tab?.tabName}
          </button>
        ))}
      </div>
    
)}