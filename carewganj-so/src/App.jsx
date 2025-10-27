import { useState } from 'react'
import postofficeLogo from '../src/img/postoffice2.png'
import ippb from '../src/img/ippb2.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="bg">
     <div class="topHead">
      <div class="childHead"><img src={postofficeLogo} alt="" /></div>
      {/* <div class="childHead"><img src={ippb} alt="" /></div> */}
     </div>
     <div className="header"><h1>CAREWGANJ S.O.</h1></div>
 <div class="content">
       <p className="read-the-docs">
        Welcome to the official website of <b>Carewganj Post Office</b>, Shahjahanpur – 242001.
We are committed to delivering efficient, reliable, and customer-friendly postal services to the people of Carewganj and nearby areas.

Our post office is managed by Shri <b>Hari Shanker</b>, Sub Postmaster (SPM), along with a dedicated team including <b>Anubhav Mishra (Packer)</b> and several experienced agents who ensure smooth operations and prompt service. Among our valued agents is <b>Shri Pradeep Saxena</b>, who actively assists customers with postal and savings services.

At Carewganj Post Office, we aim to bring essential postal, banking, and insurance services closer to the community with trust and transparency.

<b>Our Services Include:</b>

 <li>Mail delivery and parcel booking</li>
 <li>Speed Post</li>
 <li>Post office savings and banking services</li>
 <li>India Post Payments Bank (IPPB) facilities</li>
 <li>Insurance and Philately services</li>
We take pride in serving you — connecting Carewganj with the rest of India through dependable and modern postal solutions.

      </p>
 </div>
 </div>
    </>
  )
}

export default App
