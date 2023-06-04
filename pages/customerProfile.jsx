import ProfileTabs from '@/components/ProfileTabs'
import React, { useState, useEffect } from "react";
import { MdChevronRight, MdExpandMore, MdCheck, MdClose } from "react-icons/md";
import fireDb from "@/components/firebase";
import PersonalInfo from '@/components/PersonalInfo';
import Identification from '../components/CustomerProfile/Identification';
import AdditionalInfo from '../components/CustomerProfile/AdditionalInfo';
import Employment from '../components/CustomerProfile/Employment';
import { useRouter } from 'next/router';

const customerProfile = () => {
  //--
  const router = useRouter();
  const { userId } = router.query;
  const [user, setUser] = useState({});

  useEffect(() => {
    if (userId) {
      const fetchData = async () => {
        try {
          const snapshot = await fireDb
            .child(`1EaoWoCz_zfqe0M1kl5vkqnVEDSwSrBKZzibAGZ63rrM/Members/${userId}`)
            .get();
          if (snapshot.exists()) {
            setUser({ ...snapshot.val() });
          } else {
            setUser({});
          }
        } catch (error) {
          console.log(error);
        }
      };
      fetchData();
    }
  }, [userId]); 
 
  
  //----
  const [showIdentification, setShowIdentification] = useState(true)
  const [showDTI, setShowDTI] = useState(true)
  const [showAdditional, setShowAdditional] = useState(true)
  const [showEmployment, setShowEmployment] = useState(true)

  const identificationNav =() =>{
    setShowIdentification(!showIdentification);
  }
  const DTINav =() =>{
    setShowDTI(!showDTI);
  }
  const AdditionalNav =() =>{
    setShowAdditional(!showAdditional);
  }

  const EmploymentNav =() =>{
    setShowEmployment(!showEmployment);
  }
  return (
    <>
    <PersonalInfo personal={user}/>
    <div className='mx-5'>
      <ProfileTabs profiletabs={user}/>
    </div>
    <div>
      <div className='flex justify-start items-center  pl-10 pt-4 font-bold text-lg'>
        <div onClick={identificationNav} className='cursor-pointer'>
          {showIdentification ? <MdExpandMore size={30}/> : <MdChevronRight size={30}/>  }
        </div>
        <p className='align-middle'>Identification</p>
      </div>
      {showIdentification && 
        <Identification />
      }

    </div>
    <div>
      <div className='flex justify-start items-center  pl-10 pt-4 font-bold text-lg'>
        <div onClick={AdditionalNav} className='cursor-pointer'>
          {showAdditional ? <MdExpandMore size={30}/> : <MdChevronRight size={30}/>  }
        </div>
        <p className='align-middle'>Additional Information</p>
      </div>

      {showAdditional && 
        <AdditionalInfo additional={user}/>
      }
    </div>
    <div>
      <div className='flex justify-start items-center  pl-10 pt-4 font-bold text-lg'>
        <div onClick={EmploymentNav} className='cursor-pointer'>
          {showEmployment ? <MdExpandMore size={30}/> : <MdChevronRight size={30}/>  }
        </div>
        <p className='align-middle'>Employment Information</p>
      </div>

      {showEmployment && 
        <Employment employment={user}/>
      }
    </div>
  </>
  )
}

export default customerProfile