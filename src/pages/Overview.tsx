
const Overview = () => {

  const today = new Date()

  return (
    <>
      <div>
    <span>India - IST 7:56AM</span>
    <span>{today.toLocaleDateString()}</span>
      </div>
    </>
  )
}



export default Overview