import './mailList.css'

const MailList = () => {
  return (
    <div className="mail">
        <h1>Save time, save money!</h1>
        <h2>Sign up and we'll send the best deals to you</h2>
        <div className="Mailinput">
            <input type="text" placeholder='Your email address'  />
            <button >Subscribe</button>
        </div>
    </div>
  )
}

export default MailList