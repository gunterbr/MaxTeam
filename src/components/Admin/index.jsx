import React from 'react'
import Logo from '../img/logoMaxTeam.png'
import { useHistory } from 'react-router'
import Load from './load'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

const Admin = () => {
    const history = useHistory()
    
    return (
        <>
            <div id='container'>
            <div id='home'>
                <div className='justify'>
                    <img src={Logo} alt='Logo MaxTeam' />
                </div>
                
                <div className='justify acesso-restrito'>
                    <button className='btn btn-secondary' onClick={() => {
                            localStorage.clear()
                            history.push('/home')
                        }}>
                    <i className='bi bi-box-arrow-left'></i>
                    </button>
                </div>

                <Load />

            </div>
            </div>
            

            
        </>
    )
}

export default Admin