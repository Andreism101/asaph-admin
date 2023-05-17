import Link from 'next/link';
// import { Link } from "react-router-dom";
import fireDb from "../pages/firebase";
import React, { useEffect, useState } from "react";
import { MdOutlineSearch } from "react-icons/md";
import View from "../pages/customerProfile";

const CustomerTableOverview = () => {
    const [data, setData] = useState({});
  const [sortedData, setSortedData] = useState([]);
  const [sort, setSort] = useState(false);

  useEffect(() => {
    fireDb.child("1EaoWoCz_zfqe0M1kl5vkqnVEDSwSrBKZzibAGZ63rrM/Members").on("value", (snapshot) => {
      if (snapshot.val() !== null) {
        setData({ ...snapshot.val() });
      } else {
        setData({});
      }
    });

    return () => {
      setData({});
    };
  }, []);

  

  const handleChange = (e) => {
    setSort(true);
    fireDb
      .child("1EaoWoCz_zfqe0M1kl5vkqnVEDSwSrBKZzibAGZ63rrM")
      .child("Members")
      .orderByChild(`${e.target.value}`)
      .on("value", (snapshot) => {
        let sortedData = [];
        snapshot.forEach((snap) => {
          sortedData.push(snap.val());
        });
        setSortedData(sortedData);
      });
  };
//   const handleReset = () => {
//     setSort(false);
//     fireDb.child("Registered_Users").on("value", (snapshot) => {
//       if (snapshot.val() !== null) {
//         setData({ ...snapshot.val() });
//       } else {
//         setData({});
//       }
//     });
//   };

//   const filterData = (value) => {
//     fireDb
//       .child("Registered_Users")
//       .orderByChild("loan_status")
//       .equalTo(value)
//       .on("value", (snapshot) => {
//         if (snapshot.val()) {
//           const data = snapshot.val();
//           setData(data);
//         }
//       });
//   };
  return (
    <div class=" overflow-x-auto shadow-md px-5">
        <div class="flex items-center justify-between pb-4">
            <label for="table-search" class="sr-only">Search</label>
            <input type="text" id="table-search" class="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search : Name, ID"/>
        </div>
        <table class="w-full text-left">
            <caption class="p-5 text-lg font-semibold text-left text-gray-900 bg-white">
                Borrower Search
                <p class="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
                    Enter the Name or ID designed to easily locate a borrower.
                </p>
            </caption>
            <thead className="rounded-lg bg-slate-800 text-white">
            <tr>
                <th scope="col" class="px-6 py-3">Borrower ID</th>
                <th scope="col" class="px-6 py-3">Last Name</th>
                <th scope="col" class="px-6 py-3">First Name</th>
                <th scope="col" class="px-6 py-3">Middle Name</th>
                <th scope="col" class="px-6 py-3">Loan Date</th>
                <th scope="col" class="px-6 py-3">Loan Amount</th>
                <th scope="col" class="px-6 py-3">Loan Status</th>
            {!sort && <th scope="col" class="px-6 py-3">Action</th>}
            </tr>
            </thead>
            {!sort && (
            <tbody>
                {Object.keys(data).map((id, index) => {
                return (
                    <tr className='bg-white border-b' key={id}>
                    <th scope="col" class="px-6 py-3 text-blue-700 hover:underline" >{data[id].UserId}</th>
                    <td scope="col" class="px-6 py-3">{data[id].LastName}</td>
                    <td scope="col" class="px-6 py-3">{data[id].FirstName}</td>
                    <td scope="col" class="px-6 py-3">{data[id].Password}</td>
                    <td scope="col" class="px-6 py-3">{data[id].UserId}</td>
                    <td scope="col" class="px-6 py-3">{data[id].LoanValue}</td>
                    <td scope="col" class="px-6 py-3">{data[id].LoanStatus}</td>
                    
                    <td>
                    
                        <Link href={`/customerProfile`}>
                        <button className="btn btn-active">View</button>
                        </Link>
                    </td>
                    </tr>
                );
                })}
            </tbody>
            )}
            {sort && (
            <tbody>
                {sortedData.map((item, index) => {
                return (
                    <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{item.LastName}</td>
                    <td>{item.Password}</td>
                    <td>{item.UserId}</td>
                    <td className="sd">{item.Salary}</td>
                    </tr>
                );
                })}
            </tbody>
            )}
      </table>
      {/* <div className="moveit">
        <label>Sort By:</label>
        <select className="dropdown" name="colValue" onChange={handleChange}>
          <option>Please Select</option>
          <option value="accountnum">Account Number</option>
          <option value="fullName">Name</option>
          <option value="phoneNo">Contact</option>
          <option value="loan_status">Loan Status</option>
        </select>
        <button className="btn btn-reset" onClick={handleReset}>
          Reset
        </button>
        <br />
        <label>Filter:</label>
        <button className="btn btn-active" onClick={() => filterData("Reviewing")}>
          Applicants
        </button>

        <button className="btn btn-active" onClick={() => filterData("Processing")}>
          Processing
        </button>

        <button
          className="btn btn-active"
          onClick={() => filterData("Approved")}
        >
          Approvesd
        </button>
        
        <button className="btn btn-active" onClick={() => filterData("Declined")}>
          Declined
        </button>

        <button
          className="btn btn-inactive"
          onClick={() => filterData("Ongoing")}
        >
          Due
        </button>
        <button
          className="btn btn-inactive"
          onClick={() => filterData("InActive")}
        >
          InActive
        </button>
      </div> */}
        
    </div>
    
   
  );





//   return (
//     <div class=" overflow-x-auto shadow-md px-5">
//         <div class="flex items-center justify-between pb-4">
//             <label for="table-search" class="sr-only">Search</label>
//             <input type="text" id="table-search" class="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search : Name, ID"/>
//         </div>
//         <table class="w-full text-left">
//             <caption class="p-5 text-lg font-semibold text-left text-gray-900 bg-white">
//                 Borrower Search
//                 <p class="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
//                     Enter the Name or ID designed to easily locate a borrower.
//                 </p>
//             </caption>
//             <thead className="rounded-lg bg-slate-800 text-white">
//                 <tr>
//                 <th scope="col" class="px-6 py-3">Borrower ID</th>
//                 <th scope="col" class="px-6 py-3">First Name</th>
//                 <th scope="col" class="px-6 py-3">Middle Name</th>
//                 <th scope="col" class="px-6 py-3">Last Name</th>
//                 <th scope="col" class="px-6 py-3">Loan Date</th>
//                 <th scope="col" class="px-6 py-3">Loan Amount</th>
//                 <th scope="col" class="px-6 py-3">Loan Status</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 <tr className='bg-white border-b'>
//                     <td scope="col" class="px-6 py-3 text-blue-700 hover:underline">
//                         <Link href={'/customerProfile'}>
//                             K11893274
//                         </Link>
//                     </td>
//                     <td scope="col" class="px-6 py-3">Juan</td>
//                     <td scope="col" class="px-6 py-3">Dela</td>
//                     <td scope="col" class="px-6 py-3">Cruz</td>
//                     <td scope="col" class="px-6 py-3">4/30/23</td>
//                     <td scope="col" class="px-6 py-3">&#8369;18521.33</td>
//                     <td scope="col" class="px-6 py-3">
//                         <div class="flex items-center">
//                             <div class="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div> Active
//                         </div>
//                     </td>
//                 </tr>
//             </tbody>
//         </table>
//     </div>
//   )
}

export default CustomerTableOverview
