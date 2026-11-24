import React, { useRef } from 'react'

const AddMenu = ({ onAdd }) => {
  const inputRef = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()

    const name = inputRef.current.value.trim()

    if (!name) {
      inputRef.current.focus()
      return
    }

    onAdd(name)
    inputRef.current.value = ''
    inputRef.current.focus()
  }

  return (
    <form className='add' onSubmit={handleSubmit}>
      <input
        type="text"
        ref={inputRef}
        placeholder='추가하고 싶은 나들이 장소를 입력해요(예: 한강공원)'
      />
      <button type='submit'>추가</button>
    </form>
  )
}

export default AddMenu