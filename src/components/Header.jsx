import React from 'react'

const Header = ({logo}) => {
  const menu=['소개','메뉴','오시는 길']
  return (
    <header>
      <h2>{logo}</h2>
      <ul className='nav'>
        {/* menu 뿌려주기 */}
      </ul>
    </header>
  )
}

export default Header