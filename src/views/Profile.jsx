import axios from 'axios'
import React from 'react'
import { CgProfile } from 'react-icons/cg'
import Header from "./Header2"
const Profile = () => {

  const url = "https://foursnakeandladderapi.onrender.com/api/login"
  const help = async (e) => {
    e.preventDefault();
    await axios({
      method: "POST",
      url: url,
      data: {
        "name": "namedxdhb"
      }
    })
  }
  return (
    <>
      <div>
        <Header />
        <div className="bg-white w-[100%]">
          <div>
            <CgProfile className='text-blue-500' />
            <h1 className=''>
              USER
            </h1>
            <form>
              <input
                type="text"
                className='border-slate-950 w-[100px] border-solid bg-red-300'
              />
              <button type="submit" onClick={(e) => help(e)}>Add</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile