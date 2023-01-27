import React from 'react'
import './stylesheets/FAQs.css'
export default function FAQs() {
    return (
        <>
            <div className='container text-center'>
                <div className='row'>
                    <div className='col'>
                        <div className='faq-left'>
                            <div className='faq-text'>
                                Frequently Asked Questions
                                <span className='star-blue'>*</span>
                            </div>
                        </div>
                    </div>
                    <div className='col'>
                        <div className='faq-right'>
                            <ul class="list-group list-group-flush listContainer">
                                <li class="list-group-item listStyle">
                                    <div>
                                        Question 1
                                        <button className='show-button'>+</button>
                                    </div>
                                </li>
                                <li class="list-group-item listStyle">
                                    <div>
                                        Question 2
                                        <button className='show-button'>+</button>
                                    </div>
                                </li>
                                <li class="list-group-item listStyle">
                                    <div>
                                        Question 3
                                        <button className='show-button'>+</button>
                                    </div>
                                </li>
                                <li class="list-group-item listStyle">
                                    <div>
                                        Question 4
                                        <button className='show-button'>+</button>
                                    </div>
                                </li>
                                <li class="list-group-item listStyle">
                                    <div>
                                        Question 5
                                        <button className='show-button'>+</button>
                                    </div>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>


            </div>

        </>

    )
}
