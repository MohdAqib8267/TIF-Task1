import React from 'react'
import "./HomeLanding.css"

const HomeLanding = () => {
  return (
    <div className='HomeLanding'>
      <div className="h-l-left">
        <div className="img-logo">
            <img src="https://s3-alpha-sig.figma.com/img/e61b/6571/33af368e1471bcf0efe704356a08337d?Expires=1701648000&Signature=UcpcdZjFLKvpqBZnKty19bBBxa~ibU0Z9smzXERhqYA-NUbCraPKL~wKKseXd1xVz2YCvscUW5eIyYJOQ4V7xpQG4JEpwZgGaVFd5wt6E0lQiltim04Tmdw87Pkrkp~ZZH7ue~5MEzg4zYMoMJ~P7qIGQurnB0wmgGMQ81FtaJLnGUyW~hlbgDcas4hckLcysrdYUsRyyksiH2oeDQh1w5DZa58sp73F~CywXfFBYD3FyW-UxL8-wd-DMfH85jFqCHdxgYIvhBdvCD-IaRY1Sa~sdWdajq9iMCURTf~Nc241cE4ZLCTCd50xVM2xJvWeOs6y0Hd8V5T8ybqUY1cz7w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
        </div>

        <div className='logo-heading'>
          Discover the <br/>
        <span style={{color:"#E23744"}}>Best</span> Food <br className='breaker'/>
        and Drinks

        <div className="logo-info">
        Naturally made Healthcare Products for the <br/> better care & support of your body.
        </div>
        </div>

       

        <div className="btn">
            <button>Explore Now!</button>
        </div>
      </div>
      <div className="h-l-right">
        <div className="l-r-pizza">
          <img src="https://s3-alpha-sig.figma.com/img/c2a9/c613/9cad959fc06da22d2d90d91c2fed69db?Expires=1701648000&Signature=OFwjlFu7J8570kqxDSahDb8TRlJnherfkeD9qx4e2scTnpg6R4edaZyO8JdaMgsa-uHqeSB9M0fq79ozoaRc9F1aIRddaaCGU2edh51zHo6Fu1LAploSATZ0q5UWrnLy9QS-ysT7aA0ccgVMSlUNMATw3DjjDn69oImzHiKY0r6YvyTM-yLnA-LnBey~gNCWRzTga-kKR9dbcYQBcwE9bJyDYrZcqzbdxHhJMut7fw-kbCF7NbtGjIWiT~jF5~y5Ds-Md-mcpgrRtMV4pAxfQpcPyEdBkrY1e-x7y5DxEuhQpOxAcpq4ZlbTNkEiGRIr8Bww5aNhbmHkHUFzFvIMVg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
        </div>
      </div>
    </div>
  )
}

export default HomeLanding
