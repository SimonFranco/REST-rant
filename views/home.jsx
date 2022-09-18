const React = require('react')
const Def = require('./default')

function home () {
    return (
      <Def>
          <main>
              <h1>HOME</h1>
              <div>
                <img src='/images/dima-solomin-TJhQpbU5Nhk-unsplash.jpg 'width = '20%' alt='Burgers'/>
                <div>
                  Photo by <a href='https://unsplash.com/@solomin_d'>Dima Solomin</a>on <a href = 'https://unsplash.com/'>Unsplash</a>
                </div>
              </div>
          <a href="/places">
  <button className="btn-primary">Places Page</button>
</a>
          </main>

      </Def>
    )
  }
  

module.exports = home
