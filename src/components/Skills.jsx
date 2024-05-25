
function Skills() {
  return (
    <div id="skills" className="h-full flex justify-center pb-24 pt-24 ">
        <div className=" flex flex-wrap w-[70%] justify-center items-center gap-4 p-6">
            <Badge background="bg-blue-700" name="C++" />
            <Badge background="bg-yellow-600" name="Python"/>
            <Badge background="bg-orange-500" name="HTML" />
            <Badge background="bg-blue-400" name="CSS" />
            <Badge background="bg-yellow-500" name="Javascript" />
            <Badge background="bg-blue-600" name="TypeScript" />
            <Badge background="bg-green-500" name="Tailwind" />
            <Badge background="bg-blue-500" name="React" />
            <Badge background="bg-gray-900" name="Next.js" />
            <Badge background="bg-red-500" name="Firebase" />
            <Badge background="bg-green-700" name="MongoDB" />
            <Badge background="bg-gray-800" name="Express" />
            <Badge background="bg-blue-400" name="MySQL" />
            <Badge background="bg-green-600" name="Node.js" />
            <Badge background="bg-blue-700" name="Golang" />
            <Badge background="bg-black" name="Solidity" />
            <Badge background="bg-blue-800" name="Blockchain" />
            <Badge background="bg-gray-700" name="Ganache" />
            <Badge background="bg-purple-800" name="Truffle" />
        </div>
    </div>
  )
}

const Badge =(props)=>{
    return(
        <span className={`badge ${props.background} text-white px-4 py-2 rounded-full`}>{props.name}</span>
    )
}
export default Skills