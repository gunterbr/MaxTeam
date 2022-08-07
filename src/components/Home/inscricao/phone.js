import React, { useState } from 'react'
import InputMask from 'react-input-mask'
function PhoneInput(props) {
  return (
    <InputMask
      type='tel'
      name='contato'
      id='contato' placeholder='(00) 90000-0000 '
      required
      mask='(99) 99999 9999' 
      value={props.value} 
      onChange={props.onChange}>
    </InputMask>
  )
}
function Phone() {
  const [phone, setPhone] = useState('')
  const handleInput = ({ target: { value } }) => setPhone(value)
  return (
    <>
      <PhoneInput
        value={phone}
        onChange={handleInput}>
      </PhoneInput>
    </>
  )
}
export default Phone