import React, { useEffect, useState } from 'react';
import Subpagetop from './Subpagetop';
const ExecutiveBoards = () => {

  const [members, setmembers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:7000/api/v1/members")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setmembers(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
        <Subpagetop/>
      <div class="projects">
  <div class="objectiveGoals">
   <div class="og_title">
        Executive Boards
   </div>
    <div class="ogcontents">
    <div class="ogc_objectives">
   <div class="ogco_title">
       VIPs
   </div>
   <div class="ogco_content">
    <ol>
       {members.map((element, index) => (
            <li>
                <strong>Name:</strong> {element.name},<br />
                <strong>Email:</strong> {element.email},
                <strong>Position:</strong> {element.position}
            </li>
        ))}
    </ol>
 {/* <ol>

    <li>
        <strong>Name:</strong> Arjun Banjade,
        <strong>Email:</strong> president@nrnusa.org,
        <strong>Position:</strong> President
    </li>
    <li>
        <strong>Name:</strong> Bikash Upreti,
        <strong>Email:</strong> bikashupretysvp@nrnusa.org,
        <strong>Position:</strong> Senior Vice President
    </li>
    <li>
        <strong>Name:</strong> Bhanu Kharel,
        <strong>Email:</strong> bhanukheralvp1@nrnusa.org,
        <strong>Position:</strong> Vice President
    </li>
    <li>
        <strong>Name:</strong> Prem Tamang,
        <strong>Email:</strong> premtamangvp2@nrnusa.org,
        <strong>Position:</strong> Vice President
    </li>
    <li>
        <strong>Name:</strong> Gyanendra Gurung,
        <strong>Email:</strong> gyanendravp3@nrnusa.org,
        <strong>Position:</strong> Vice President
    </li>
    <li>
        <strong>Name:</strong> Netra Pandey,
        <strong>Email:</strong> netrapandeyvp4@nrnusa.org,
        <strong>Position:</strong> Vice President
    </li>
    <li>
        <strong>Name:</strong> Sunita Sapkota Kandel,
        <strong>Email:</strong> sunitakandelwvp@nrnusa.org,
        <strong>Position:</strong> Women Vice President
    </li>
    <li>
        <strong>Name:</strong> Anup Khanal,
        <strong>Email:</strong> youthvp@nrnusa.org,
        <strong>Position:</strong> Youth Vice President
    </li>
    <li>
        <strong>Name:</strong> Ram Hari Adhikari,
        <strong>Email:</strong> generalsecretary@nrnusa.org,
        <strong>Position:</strong> General Secretary
    </li>
    <li>
        <strong>Name:</strong> Dipak Sapkota,
        <strong>Email:</strong> secretary@nrnusa.org,
        <strong>Position:</strong> Secretary
    </li>
    <li>
        <strong>Name:</strong> Santi Paudyal,
        <strong>Email:</strong> wsecretary@nrnusa.org,
        <strong>Position:</strong> Secretary (Women)
    </li>
    <li>
        <strong>Name:</strong> Saroj Sigdel,
        <strong>Email:</strong> treasurer@nrnusa.org,
        <strong>Position:</strong> Treasurer
    </li>
    <li>
        <strong>Name:</strong> Diwakar Pande,
        <strong>Email:</strong> treasurejoint@nrnusa.org,
        <strong>Position:</strong> Joint-Treasurer
    </li>
    <li>
        <strong>Name:</strong> Dr. Rajan Pant,
        <strong>Email:</strong> spokesperson@nrnusa.org,
        <strong>Position:</strong> Spokesperson
    </li>
    <li>
        <strong>Name:</strong> Tej Poudel,
        <strong>Email:</strong> youthcoordinator@nrnusa.org,
        <strong>Position:</strong> Youth Coordinator
    </li>
    <li>
        <strong>Name:</strong> Sunita Khatri,
        <strong>Email:</strong> sunitakwcoordinator@nrnusa.org,
        <strong>Position:</strong> Women Coordinator
    </li>
    <li>
        <strong>Name:</strong> -,
        <strong>Email:</strong> itcoordinator@nrnusa.org,
        <strong>Position:</strong> IT Coordinator
    </li>
    <li>
        <strong>Name:</strong> Dr. Gangadhar Acharya,
        <strong>Email:</strong> gangadharbod1@nrnusa.org,
        <strong>Position:</strong> Board of Director
    </li>
    <li>
        <strong>Name:</strong> Durga Tiwari,
        <strong>Email:</strong> durgatbod2@nrnusa.org,
        <strong>Position:</strong> Board of Director
    </li>
    <li>
        <strong>Name:</strong> Bal Rai,
        <strong>Email:</strong> balraibod3@nrnusa.org,
        <strong>Position:</strong> Board of Director
    </li>
    <li>
        <strong>Name:</strong> Rita Devi Pradhan,
        <strong>Email:</strong> ritadevibod4@nrnusa.org,
        <strong>Position:</strong> Board of Director
    </li>
    <li>
        <strong>Name:</strong> Bishnu Baral,
        <strong>Email:</strong> bishnubod5@nrnusa.org,
        <strong>Position:</strong> Board of Director
    </li>
    <li>
        <strong>Name:</strong> Srijana Sharma,
        <strong>Email:</strong> srijanabod6@nrnusa.org,
        <strong>Position:</strong> Board of Director
    </li>
</ol> */}


   </div>
    </div>
    </div>
 
</div>
</div>
    </div>
  )
}

export default ExecutiveBoards
