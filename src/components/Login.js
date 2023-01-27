import React from 'react'
import './stylesheets/Login.css'
export default function Login() {
    return (
        <div className='container-fluid'>
            <div className='login-upper-container'>
                <div className='container'>
                    <div className='login-inner-container'>
                        <form>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">LOGIN</label>
                                <input type="email" class="form-control" placeholder='Email' />
                            </div>
                            <div class="mb-3">
                                <input type="password" class="form-control" placeholder='Password' />
                            </div>
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>

            </div>
        </div>

    )
}
