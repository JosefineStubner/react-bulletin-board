import ReactPost from "./ReactPost";

export default function BulletinBoard({data}) {
  return (
  <div>
    <h1>Posts:</h1>
    {data.map((data, index) => {
      return( <ReactPost key={index} question={data.question} answer={data.answer} />)
    })}
  </div>
  )
}

// {data.map((data) => <div className="info-box"><h3>{data.question}</h3><p>{data.answer}</p><button>Ge en like!</button></div>)}