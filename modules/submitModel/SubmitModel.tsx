import React from 'react'
import {FaRegCircleCheck} from 'react-icons/fa6'

const SubmitModel = ({isModalOpen, setIsModalOpen}: any) => {
  const handleOnOkClick = () => {
    setIsModalOpen(false)
  }

  return (
    <div className={isModalOpen ? 'model_mask' : 'model_mask model_mask_none'}>
      <div className='submitModel_wrapper'>
        <div className='success_icon'>
          <FaRegCircleCheck />
        </div>
        <div className='success_text'>
          Form successfully submitted Thankyou!
        </div>
        <button onClick={handleOnOkClick} className='ok_btn'>
          Close
        </button>
      </div>
    </div>
  )
}

export default SubmitModel
