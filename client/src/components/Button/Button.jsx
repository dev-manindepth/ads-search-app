import './button.css'
const Button = ({text,link}) => {
  return (
    <>
        <button className="button">
          <a href={`https:www.${link}`} target="_blank">{text}</a>
        </button>
    </>
  )
}

export default Button