import React from 'react'

export default function Main() {
  return (
    <main className='main'>
      <img src='portfolio-image.jpg' className='main__image' />
      <h1 className='main__title'>Evgenii Litvinov</h1>
      <h2 className='main__subtitle'>Frontend Developer</h2>
      <div className='main__buttons'>
        <button className='main__button main__button_email'>Email</button>
        <button className='main__button main__button_github'>GitHub</button>
      </div>
      <section className='main__text'>
        <h3 className='main__textTitle'>About</h3>
        <p className='main__info'>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
        <h3 className='main__textTitle'>Interests</h3>
        <p className='main__info'>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
      </section>
    </main>
  )
}
